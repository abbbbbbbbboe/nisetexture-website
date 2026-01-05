


// =====================================================
// ✅ カテゴリー表示関数（修正版）
// =====================================================
function showCategory(category, autoIndex = null, filterCategory = 'all', options = {}) {
  const prevImageScroll = imageContainer ? imageContainer.scrollTop : 0;
  const prevTextScroll = textsContainer ? textsContainer.scrollTop : 0;
  const forceScrollReset = options.forceScrollReset || false;

  

  // 🟩 特殊処理: archiveカテゴリで個別作品を指定して表示する場合
  let shouldRenderFull = false;
  let itemToRender = null;

  if (category === 'archive' && autoIndex !== null) {
    itemToRender = contents.archive[autoIndex];
    if (itemToRender) {
      currentIndex = autoIndex; // 左リストで active クラス同期用
      shouldRenderFull = true;  // 後で右エリア描画
    }
  }

  // 🟦 通常のカテゴリ表示処理
  const items = contents[category];
  if (!items) return;

  window.currentCategory = category;


  // ================================
  // 🔹 フィルタリング処理
  // ================================
  let filteredItems = items;
  let filters = [];

  if (category === 'archive') {
    if (filterCategory === 'all') filters = [];
    else if (Array.isArray(filterCategory)) filters = filterCategory;
    else if (typeof filterCategory === 'string') filters = filterCategory.split(',').map(s => s.trim());

    const lowerFilters = filters.map(f => f.toLowerCase());
    filteredItems = items.filter(item => {
      let itemCategories = Array.isArray(item.category)
        ? item.category.map(c => c.toLowerCase())
        : item.category.split(',').map(s => s.trim().toLowerCase());
      return (
        lowerFilters.length === 0 ||
        itemCategories.some(cat => lowerFilters.includes(cat))
      );
    });
  }



  // ================================
  // 🔹 メニュー・UI 更新　
  // ================================
  document.querySelectorAll('.menu button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
  toggleArchiveSortButtons(category === 'archive');

  // ================================
  // 🔹 表示初期化
  // ================================

  imageArea.querySelectorAll('iframe, img, video, .caption').forEach(el => el.remove());
  textsContainer.querySelectorAll('p, .scroll-extra, a').forEach(el => el.remove());







  // ================================
  // 🔹 現在の選択状態維持 or 非表示処理
  // ================================
  if (forceScrollReset) {
    if (imageContainer && textsContainer) {
      imageContainer.scrollTop = 0;
      textsContainer.scrollTop = 0;
    }
  }
  if (currentIndex !== null) {
    const currentItem = items[currentIndex];
    if (currentItem) {
      const cats = Array.isArray(currentItem.category)
        ? currentItem.category
        : currentItem.category.split(',').map(s => s.trim());
      const match = filters.length === 0 || cats.some(cat => filters.includes(cat));

      if (match) {
        if (window.currentRenderedId !== currentItem.id) {

          if (!imageContainer || !textsContainer) {

            renderFull(currentItem, { skipRestoreScroll: true });

          }
          renderFull(currentItem, { skipRestoreScroll: true });
        }
      } else {
        imageArea.querySelectorAll('iframe, img, video, .caption').forEach(el => el.remove());
        textsContainer.querySelectorAll('p, .scroll-extra, a').forEach(el => el.remove());
        currentIndex = null;
        window.currentRenderedId = null;
        listArea.querySelectorAll('.list-item').forEach(el => el.classList.remove('active'));
      }
    }
  }







  // ================================
  // 本文描画関数（差分更新対応版）
  // ================================
  function renderFull(data, options = {}) {
    // options.skipRestoreScroll が真ならスクロール復元をスキップする
    const skipRestore = !!options.skipRestoreScroll;
    const forceReset = !!options.forceScrollReset;

    // ✅ まだ1度も描画されていない場合は初期化
    if (!window.currentRenderedId) {
      window.currentRenderedId = null;
    }

    // ✅ 現在のスクロール位置を保持
    const imageScroll = imageContainer ? imageContainer.scrollTop : 0;
    const textScroll = textsContainer ? textsContainer.scrollTop : 0;




    // ✅ ここで「作品が切り替わったか」を判定
    const isSameWork = window.currentRenderedId === data.id;
    const shouldResetScroll = !isSameWork; // 違う作品ならリセット


    // ✅ 新しい作品を記録
    window.currentRenderedId = data.id;



    // ================================
    // 🔹 IMAGEエリア更新
    // ================================
    const isMobile = window.innerWidth <= 768;
    imageContainer.innerHTML = '';

    // 🔹 スクロールトップボタン
    createScrollTopButton(imageContainer);
    if (isMobile) {
      const imageAreaTitle = document.createElement('div');
      imageAreaTitle.className = 'mobile-image-area-title';
      imageAreaTitle.innerHTML = `
      <p>+&ensp;${data.title || ""}&ensp;+</p>
     
    `;
      imageContainer.appendChild(imageAreaTitle);
    }
    // --- メディア描画 ---
    data.media.forEach((file, i) => {
      let elementHTML = '';
      if (file.includes("youtube.com") || file.includes("youtu.be")) {
        const embedUrl = file.includes("embed")
          ? file
          : convertToYouTubeEmbed(file);

        const origin = location.origin;

        const src = embedUrl.includes("?")
          ? `${embedUrl}&enablejsapi=1`
          : `${embedUrl}?enablejsapi=1`;



        elementHTML = `
  <div class="media-iframe-wrapper" data-scrolltype="text">
    <iframe
    id="yt-${i}-${Date.now()}"
      src="${src}"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
      
    ></iframe>
    <div class="media-iframe-cover"></div>
    </div>`;
      } else if (file.includes("vimeo.com")) {
        const embedUrl = convertToVimeoEmbed(file);
        elementHTML = `<div class="media-iframe-wrapper" data-scrolltype="text"><iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe> <div class="media-iframe-cover"></div>
    </div>`;
      } else if (file.includes("soundcloud.com")) {
        const embedUrl = convertToSoundCloudEmbed(file);
        elementHTML = `<div class="media-iframe-wrapper" data-scrolltype="text"><iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe> <div class="media-iframe-cover"></div>
    </div>`;
      } else if (file.endsWith('.mp4')) {
        elementHTML = `<video src="${file}" controls playsinline></video>`;
      } else {
        elementHTML = `<img src="${file}" alt="${data.title}">`;
      }

      imageContainer.insertAdjacentHTML('beforeend', elementHTML);


      // 直前に追加した要素を取得
      const last = imageContainer.lastElementChild;
      let el = null;

      // --- iframe / video（wrapperあり） ---
      if (last.classList?.contains('media-iframe-wrapper')) {
        el = last.querySelector('iframe, video');

        if (el) {

          requestAnimationFrame(() => {
            setupMediaIframe(el);
            clickMediaIframe(el);
          });
        }
      }


      // キャプション
      if (data.captions && data.captions[i]) {
        const caption = document.createElement('div');
        caption.className = 'caption';
        caption.textContent = data.captions[i];
        imageContainer.appendChild(caption);
      }
    });

    // ✅ 余白を追加
    const extraSpace = document.createElement('div');
    extraSpace.className = 'scroll-extra';
    extraSpace.style.height = '240px';
    imageContainer.appendChild(extraSpace);


    // ================================
    // 🔹 TEXTエリア更新
    // ================================
    let textContainer = textArea.querySelector('.text-container');
    textContainer.innerHTML = ''; // コンテンツのみ更新

    // --- リンク（archive用） ---
    if (data.links && Object.keys(data.links).length > 0) {
      const linkContainer = document.createElement('div');
      linkContainer.className = 'text-section text-links';

      for (const [label, url] of Object.entries(data.links)) {
        const linkEl = document.createElement('a');
        linkEl.href = url;
        linkEl.textContent = label;
        linkEl.target = '_blank';
        linkEl.rel = 'noopener noreferrer';
        linkContainer.appendChild(linkEl);
      }

      textContainer.appendChild(linkContainer);
    } else {
      // --- links が空の場合：高さだけのダミー要素 ---
      const emptyLinkSpace = document.createElement('div');
      emptyLinkSpace.className = 'text-section text-links-empty';

      // 高さ設定（PC 40px / モバイル 35px）
      const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
      emptyLinkSpace.style.height = isMobileDevice ? "35px" : "40px";

      textContainer.appendChild(emptyLinkSpace);
    }

    // === ▼ 言語切り替え一式をまとめる親要素を作成 ▼ ===
    const langWrapper = document.createElement('div');
    langWrapper.className = "text-lang-wrapper";
    // ====================================================

    // === 言語切り替えボタン ===
    const langBtn = document.createElement('button');
    langBtn.className = "text-section lang-toggle-btn";

    // 言語のグローバル状態（維持したい場合）
    let activeLanguage = window.activeLanguage || "ja";
    window.activeLanguage = activeLanguage;

    // 🔻 textContainer に入れず、langWrapper に追加
    langWrapper.appendChild(langBtn);


    // --- 日本語テキスト ---

    const jpFull = data.text_jp || data.text_ja || data.text || "";
    let jaSection = null;

    if (jpFull.trim()) {
      jaSection = document.createElement('div');
      jaSection.className = 'text-section text-ja';

      // モバイル → タイトル + テキスト
      // PC → テキストのみ
      if (isMobile) {
        jaSection.innerHTML = `
      <p class="mobile-jp-title">${data.title || ""}</p>
      <div class="mobile-textarea-meta"><p>(${data.date || ""})</p><p>${data.place ? `@${data.place}` : ""}</p></div>
      <p>${jpFull}</p>
    `;
      } else {
        jaSection.innerHTML = `<p>${jpFull}</p>`;
      }

      // 🔻 textContainer → langWrapper
      langWrapper.appendChild(jaSection);
    }

    // --- 英語テキスト ---
    const enFull = data.text_en || "";
    let enSection = null;
    if (enFull.trim()) {
      enSection = document.createElement('div');
      enSection.className = 'text-section text-en';
      if (isMobile) {
        // モバイル → タイトル + テキスト
        enSection.innerHTML = `
      <p class="mobile-en-title">${data.title_en || ""}</p>
    <div class="mobile-textarea-meta"><p>(${data.date || ""})</p><p>${data.place ? `@${data.place}` : ""}</p></div>
      <p>${enFull}</p>
    `;
      } else {
        // PC → テキストのみ
        enSection.innerHTML = `<p>${enFull}</p>`;
      }

      // 🔻 textContainer → langWrapper
      langWrapper.appendChild(enSection);
    }

    if (!enSection) {
      langBtn.remove();
    }
    // === ▼ ここで初めて textContainer に追加して1まとめにする ▼ ===
    textContainer.appendChild(langWrapper);
    // =================================================================

    // --- クレジット ---
    const creditFull = data.text_credit || "";
    if (creditFull.trim()) {
      const creditSection = document.createElement('div');
      creditSection.className = 'text-section text-credit';
      creditSection.innerHTML = `<p><span class="credit-top">credit</span><br>${creditFull}</p>`;
      textContainer.appendChild(creditSection);
    }



    // === 言語適用関数 ===
    function applyLanguage(lang) {
      activeLanguage = lang;
      window.activeLanguage = lang;

      if (jaSection) jaSection.style.display = (lang === "ja") ? "block" : "none";
      if (enSection) enSection.style.display = (lang === "en") ? "block" : "none";

      // ボタンの表示テキスト
      langBtn.textContent = (lang === "ja") ? "english⇄" : "japanese⇄";
    }


    // === ボタンクリックでトグル ===
    langBtn.addEventListener("click", () => {
      const newLang = (activeLanguage === "ja") ? "en" : "ja";
      applyLanguage(newLang);
    });




    // === 初期表示 ===
    applyLanguage(activeLanguage);


    // --- スクロール補助 ---
    const spacer = document.createElement("div");
    spacer.className = "scroll-extra";
    textContainer.appendChild(spacer);

    // 🔹 スクロールトップボタン
    createScrollTopButton(textContainer);

    // ================================
    // 🔹 TEXTエリア更新が終わったあとに実行する
    // ================================
    textContainer.querySelectorAll("a").forEach(a => {
      const href = a.getAttribute("href");
      if (!a.target && href && !href.startsWith("#") && !href.startsWith("mailto:") && !href.startsWith("tel:")) {
        try {
          const url = new URL(href, location.href);
          if (url.hostname !== location.hostname) {
            a.target = "_blank";
            a.rel = "noopener noreferrer";
          }
        } catch (e) {
          // 無効なURLは無視
        }
      }
    });

    // --- サイズ調整・スクロール設定 ---
    adjustMediaSizes();


    // ================================
    // 📌 スクロールリセット処理
    // ================================

    if (forceReset || shouldResetScroll) {
      if (imageContainer) imageContainer.scrollTo({ top: 0, behavior: "auto" });
      if (textContainer) textContainer.scrollTo({ top: 0, behavior: "auto" });

    } else {
      // 同じ作品で、スクロール復元をスキップしない場合
      if (!skipRestore) {
        if (imageContainer) imageContainer.scrollTo({ top: imageScroll });
        if (textContainer) textContainer.scrollTo({ top: textScroll });

      }
    }




  }


  // =============================
  // イベント設定（クリック・ホバー）
  // =============================
  listArea.querySelectorAll('.list-item').forEach(itemEl => {
    itemEl.addEventListener('click', e => {

      savedScroll.text = 0;
      isItemClicked = true; // ✅ クリック時にフラグON
      setTimeout(() => {
        isItemClicked = false; // 少し経ってからリセット（数百msでOK）
      }, 1000);
      const origIndex = parseInt(e.currentTarget.dataset.index, 10);
      const data = items[origIndex];
      if (!data) return;

      // 🔹 クリック時にホバー状態のプレビューを消す
      e.currentTarget.dispatchEvent(new Event('mouseleave'));

      currentIndex = origIndex;

      // ✅ リストのアクティブ更新
      listArea.querySelectorAll('.list-item').forEach(el => el.classList.remove('active'));
      e.currentTarget.classList.add('active');

      // 🔹 プレビュー削除（念のため）
      imageArea.querySelectorAll('img.preview').forEach(el => el.remove());
      textArea.querySelectorAll('.preview-text-wrapper').forEach(el => el.remove());

      // 🔹 元の本文を復帰
      textArea.querySelectorAll('.text-section, .scroll-extra').forEach(el => {
        el.style.visibility = '';
      });

      // ✅ 本文描画
      renderFull(data, { forceScrollReset: true, skipSavedScroll: true });

      // ✅ ハッシュ更新（抑制あり）
      window.suppressHashRender = true;
      let hash = category;
      if (data.id) hash += `/${data.id}`;
      if (category === 'archive' && currentArchiveFilters.length > 0) {
        const filterStr = currentArchiveFilters.join(',');
        hash += `?filter=${encodeURIComponent(filterStr)}`;
      }
      window.location.hash = hash;
      requestAnimationFrame(() => {
        window.suppressHashRender = false;
      });

      if (isMobile()) {
        activeSection = "image";  // 初期表示は image エリア
      }
      updateMobileView();

    });







    // --- ホバー ---
    let savedScroll = { text: 0 };

    itemEl.addEventListener('mouseenter', e => {
     const origIndex = parseInt(e.currentTarget.dataset.index, 10);
  e.currentTarget.dataset.hoverIndex = origIndex;
  const data = items[origIndex];
  if (!data) return;

      // クリックで表示中の作品ならプレビューを出さない
      if (currentIndex === origIndex) return;

      // hover前に現在の選択作品のスクロール位置を保存
      const textContainer = textArea.querySelector('.text-container');
      if (textContainer) {
        savedScroll.text = textContainer.scrollTop;

        // ✅ スクロールバーを非表示
        textContainer.dataset.prevOverflowY = textContainer.style.overflowY; // 元の状態を保存
        textContainer.style.overflowY = 'hidden';
      }


      // 元の本文を非表示にしてスクロール位置を保持
      textArea.querySelectorAll('.text-section, .scroll-extra').forEach(el => {
        el.style.visibility = 'hidden';
      });

      // --- scroll-top-btn を非表示 ---
      imageArea.querySelectorAll('.scroll-top-btn').forEach(btn => btn.style.display = 'none');
      textArea.querySelectorAll('.scroll-top-btn').forEach(btn => btn.style.display = 'none');

      // プレビューを描画
      renderPreview(data);
    });


    // ==========================
    // マウスリーブ時の処理
    // ==========================
  itemEl.addEventListener('mouseleave', e => {
  const origIndex = Number(e.currentTarget.dataset.hoverIndex);

  // プレビュー削除など
  page.querySelectorAll('img.preview').forEach(el => el.remove());
  document.querySelectorAll('.preview-text-wrapper').forEach(el => el.remove());

  document.querySelectorAll('.scroll-top-btn').forEach(btn => {
    const container = btn.parentElement;
    btn.style.display = container.scrollTop > 120 ? 'block' : 'none';
  });

  if (currentIndex === origIndex) return;

  const textContainer = textArea.querySelector('.text-container');
  if (textContainer) {
    textContainer.style.overflowY =
      textContainer.dataset.prevOverflowY || 'auto';
    delete textContainer.dataset.prevOverflowY;
  }

  textArea.querySelectorAll('.text-section, .scroll-extra').forEach(el => {
    el.style.visibility = '';
  });

  if (typeof currentIndex === 'number' && items[currentIndex]) {
    const textContainer = textArea.querySelector('.text-container');
    if (textContainer) {
      requestAnimationFrame(() => {
        textContainer.scrollTop = savedScroll.text;
      });
    }
  }
});


  });



  if (isMobile()) {
    activeSection = "list";  // 初期表示は image エリア
  }
  updateMobileView();
  updateNavButtons();
 setTimeout(() => {
  areaTitleTitleCss(category);
}, 0);
}
