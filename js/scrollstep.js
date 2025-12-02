// ==========================
// スクロール制御（コンテナ単位、最後のステップで止める）
// ==========================
function attachScrollStep() {
  document.querySelectorAll('.list-container, .image-container, .text-container').forEach(container => {
    if (container.dataset.scrollAttached === "true") return;
    container.dataset.scrollAttached = "true";

    let isScrolling = false;

    // --------------------------------------------------
    // スクロールごとの trigger（発火距離）と step（移動量）
    // --------------------------------------------------
    const getTriggerAndStep = (container) => {
        let textsContainer = textArea.querySelector('.text-container');
let imageContainer = imageArea.querySelector('.image-container');
let listContainer = listArea.querySelector('.list-container');
      const isMobile = window.innerWidth <= 768;

      if (isMobile) {
        if (container === imageContainer) return { trigger: 15, step: 35 };
        if (container === textsContainer) return { trigger: 15, step: 35 };
        if (container === listContainer)  return { trigger: 15, step: 35 };
      } else {
        if (container === imageContainer) return { trigger: 120, step: 120 };
        if (container === textsContainer) return { trigger: 10,  step: 80 };
        if (container === listContainer)  return { trigger: 40,  step: 40 };
      }

      return { trigger: 20, step: 40 }; // fallback
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

    container.addEventListener(
      'wheel',
      (e) => {
        e.preventDefault();

        const { trigger, step } = getTriggerAndStep(container);

        wheelAccum += e.deltaY;

        if (Math.abs(wheelAccum) >= trigger) {
          const direction = wheelAccum > 0 ? 1 : -1;
          scrollToStep(direction, step);
          wheelAccum = 0;
        }
      },
      { passive: false }
    );

    // ==================================================
    // 📱 Mobile: touch + 疑似慣性ステップ
    // ==================================================
    let lastY = 0;
    let accum = 0;

    // ★ 疑似慣性スクロール用
    let inertiaVelocity = 0;      // 現在の慣性の速度
    let inertiaInterval = null;   // カタカタ実行タイマー

    // -------- inertia start ---------
    const startInertia = (step) => {
      clearInterval(inertiaInterval);

      inertiaInterval = setInterval(() => {

        // 速度が小さくなったら終了
        if (Math.abs(inertiaVelocity) < 0.05) {
          clearInterval(inertiaInterval);
          return;
        }

        const direction = inertiaVelocity > 0 ? 1 : -1;
        scrollToStep(direction, step);

        // 慣性の減衰（ゆっくり止まる）
        inertiaVelocity *= 0.86;   // ← 減衰速度（0.90〜0.96 が自然）

      }, 60); // 60msごとにカタッカタッと進む
    };
    // --------------------------------

    container.addEventListener("touchstart", (e) => {
      lastY = e.touches[0].clientY;
      accum = 0;

      // 慣性を止める
      inertiaVelocity = 0;
      clearInterval(inertiaInterval);
    });

    container.addEventListener("touchmove", (e) => {
      e.preventDefault();

      const currentY = e.touches[0].clientY;
      const diff = lastY - currentY;
      lastY = currentY;

      const { trigger, step } = getTriggerAndStep(container);

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
      const { step } = getTriggerAndStep(container);

      // 指を離したあと慣性でステップスクロール
      if (Math.abs(inertiaVelocity) > 0.5) {
        startInertia(step);
      }

      accum = 0;
    });
  });
}
