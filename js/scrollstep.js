
// スクロール処理ファイルの冒頭
window.inertiaTimer = null;
window.inertiaVelocity = 0;
// ==========================
// スクロール制御（コンテナ単位、最後のステップで止める）
// ==========================
function attachScrollStep() {

  const main = document.querySelector("main");


  const isTopPage = main && main.classList.contains("page-top");

  let targets = [];
  if (main && isTopPage) {
    // 🟦 TOPページ：main のみスクロール対象
    if (main.dataset.scrolltype) {
      targets = [main];
    }
  } else {
    // 🟩 Archiveページ or main が存在しないページ：
    //   div[data-scrolltype] のみ対象
    targets = Array.from(document.querySelectorAll('div[data-scrolltype]'))
      .filter(el => el.dataset.scrolltype && el.dataset.scrollAttached !== "true");

  }


  targets.forEach(container => {

    if (container.dataset.scrollAttached === "true") return;
    container.dataset.scrollAttached = "true";

    let isScrolling = false;



    // --------------------------------------------------
    // スクロールごとの trigger（発火距離）と step（移動量）
    // --------------------------------------------------
    const getTriggerAndStep = (container) => {
      const type = container.dataset.scrolltype;
      const isMobile = window.innerWidth <= 768;



      if (!type) return null; // ← type 無しは無視

      if (isMobile) return { trigger: 33, step: 35 };

      switch (type) {
        case "image": return { trigger: 120, step: 120 };
        case "text": return { trigger: 10, step: 40 };
        case "list": return { trigger: 10, step: 40 };
        case "top": return { trigger: 40, step: 40 };
      }
      return null;
    };

    const maxScroll = () => container.scrollHeight - container.clientHeight;

    const scrollToStep = (direction, step) => {




      if (isScrolling) return;
      isScrolling = true;

      let target = container.scrollTop + direction * step;

      const lastStepTop = Math.floor(maxScroll() / step) * step;
      if (target > lastStepTop) target = lastStepTop;
      if (target < 0) target = 0;

      target = Math.round(target / step) * step;
      container.scrollTo({ top: target, behavior: 'auto' });

      setTimeout(() => { isScrolling = false; }, 120);
    };

    // ==================================================
    // 🖱 PC: wheel
    // ==================================================
    let wheelAccum = 0;

    container.addEventListener("wheel", (e) => {
      e.preventDefault();

      const conf = getTriggerAndStep(container);
      if (!conf) return;

      const { trigger, step } = conf;

      wheelAccum += e.deltaY * 5;

      if (Math.abs(wheelAccum) >= trigger) {
        const direction = wheelAccum > 0 ? 1 : -1;
        scrollToStep(direction, step);
        wheelAccum = 0;
      }
    }, { passive: false });

    // ==================================================
    // 📱 Mobile: touch + 疑似慣性ステップ
    // ==================================================
    let lastY = 0;
    let accum = 0;


    // ==========================
    // Mobile: Inertia Scroll
    // ==========================



    const startInertia = (step) => {
      clearTimeout(window.inertiaTimer);

      const loop = () => {
        if (Math.abs(window.inertiaVelocity) < 0.05) return;

        const direction = window.inertiaVelocity > 0 ? 1 : -1;
        scrollToStep(direction, step);

        window.inertiaVelocity *= 0.9;

        const speed = Math.min(Math.max(10, 200 - Math.abs(window.inertiaVelocity) * 190), 200);
        window.inertiaTimer = setTimeout(loop, speed);
      };

      loop();
    };



    // --------------------------------

    container.addEventListener("touchstart", (e) => {
      lastY = e.touches[0].clientY;
      accum = 0;

      // 慣性を止める
      inertiaVelocity = 0;
      clearTimeout(inertiaTimer);  // ← これが正しい！
    });

    container.addEventListener("touchmove", (e) => {
      const conf = getTriggerAndStep(container);
      if (!conf) return;  // ← ここが無いとエラー
      const { trigger, step } = conf;

      e.preventDefault();

      const currentY = e.touches[0].clientY;
      const diff = lastY - currentY;
      lastY = currentY;



      accum += diff;

      // 指の動きから慣性速度を追加（指を速く動かすほど慣性が強くなる）
      inertiaVelocity = diff * 0.4;  // ← 慣性の強さ（0.2〜0.35 が自然）

      // 指が一定距離動いたらステップ発火
      if (Math.abs(accum) >= trigger) {
        const direction = accum > 0 ? 1 : -1;
        scrollToStep(direction, step);

        accum = accum % trigger;
      }
    }, { passive: false });

    container.addEventListener("touchend", () => {
      const conf = getTriggerAndStep(container);
      if (!conf) return;

      const { step } = conf;

      // 指を離したあと慣性でステップスクロール
      if (Math.abs(inertiaVelocity) > 0.5) {
        startInertia(step);
      }

      accum = 0;
    });
  });
}

function getTriggerAndStepGlobal(container) {
  const isMobile = window.innerWidth <= 768;
  const stepSize = 35; // デフォルト

  // ここで container に応じた step を返す
  if (isMobile) return { trigger: 10, step: 35 };
  else return { trigger: 40, step: 40 };
}

function stopInertiaAndRound(container) {
  window.inertiaVelocity = 0;
  clearTimeout(window.inertiaTimer);

  const { step } = getTriggerAndStepGlobal(container); // 現在のステップサイズを取得
  const current = container.scrollTop;
  const rounded = Math.round(current / step) * step;
  container.scrollTop = rounded; // 位置を丸める
}




function clickMediaIframe(el) {
  const wrapper = el.closest('.media-iframe-wrapper');
  if (!wrapper) return;

  const cover = wrapper.querySelector('.media-iframe-cover');
  if (!cover) return;

  // 初期状態
  el.style.pointerEvents = 'none';
  cover.style.pointerEvents = 'auto';

  let isActive = false;

  // ▶ cover クリックで有効化 + 再生
  cover.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();

    isActive = true;

    // cover 非表示
    cover.style.opacity = '0';
    cover.style.pointerEvents = 'none';

    // iframe 有効化
    el.style.pointerEvents = 'auto';
    wrapper.classList.add('iframe-active');

    // ▶ 再生指示を送る
    playIframe(el);
  });

  // ▶ 外クリックで無効化
  const deactivate = (e) => {
    if (!isActive) return;
    if (wrapper.contains(e.target)) return;

    isActive = false;

    el.style.pointerEvents = 'none';
    cover.style.pointerEvents = 'auto';
    cover.style.opacity = '1';

    wrapper.classList.remove('iframe-active');
  };

  // ▶ 再生終了・停止時に cover 復活
  setupIframeStateListener(el, () => {
    isActive = false;

    el.style.pointerEvents = 'none';
    cover.style.pointerEvents = 'auto';
    cover.style.opacity = '1';

    wrapper.classList.remove('iframe-active');
  });

  document.addEventListener('click', deactivate);
  document.addEventListener('touchstart', deactivate);
}

function playIframe(el) {
  const src = el.src || '';

  // YouTube
  if (src.includes('youtube.com') || src.includes('youtu.be')) {
    el.contentWindow?.postMessage(
      JSON.stringify({
        event: 'command',
        func: 'playVideo',
        args: []
      }),
      '*'
    );
  }

  // Vimeo
  else if (src.includes('vimeo.com')) {
    el.contentWindow?.postMessage(
      { method: 'play' },
      '*'
    );
  }

  // 🔊 SoundCloud
  else if (src.includes('soundcloud.com')) {
    el.contentWindow?.postMessage(
      JSON.stringify({
        method: 'play'
      }),
      '*'
    );
  }
}


function setupIframeStateListener(el, onDeactivate) {
  const src = el.src || '';

  // YouTube
  if (src.includes('youtube.com') || src.includes('youtu.be')) {
    window.addEventListener('message', (e) => {
      if (!e.data) return;

      let data;
      try {
        data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
      } catch {
        return;
      }

      if (data.event === 'onStateChange') {
        // 0: ended, 2: paused
        if (data.info === 0 || data.info === 2) {
          onDeactivate();
        }
      }
    });
  }

  // Vimeo
  else if (src.includes('vimeo.com')) {
    window.addEventListener('message', (e) => {
      if (!e.data || !e.data.event) return;

      if (e.data.event === 'pause' || e.data.event === 'ended') {
        onDeactivate();
      }
    });
  }

  // 🔊 SoundCloud
  else if (src.includes('soundcloud.com')) {
    window.addEventListener('message', (e) => {
      if (!e.data) return;

      let data;
      try {
        data = typeof e.data === 'string' ? JSON.parse(e.data) : e.data;
      } catch {
        return;
      }

      // pause / finish
      if (
        data.event === 'pause' ||
        data.event === 'finish'
      ) {
        onDeactivate();
      }
    });
  }
}
