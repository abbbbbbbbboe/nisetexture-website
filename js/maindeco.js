attachScrollStep();

// ================================
// 📌 メニューボタンのアクティブ切替
// ================================
document.querySelectorAll('.menu button').forEach(btn => {
  btn.addEventListener('click', () => {

    // ★ メニュークリック時は main から top-page を外す（モバイルもPCも共通）
    if (btn.dataset.category === 'archive') {
      main.classList.remove('page-top');
      // main.removeAttribute('data-scrolltype');
      delete main.dataset.scrolltype;
      delete main.dataset.scrollAttached;
    }

    document.querySelectorAll('.menu button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // ★ archiveクリック時のみpaddingをつける
    if (btn.dataset.category === 'archive') {
      imageContainer.style.paddingLeft = "40px";
      imageContainer.style.paddingRight = "40px";
    } else {
      imageContainer.style.paddingLeft = "20px";
      imageContainer.style.paddingRight = "20px";
    }
    currentPage = btn.dataset.category;
    generateArchiveList()
    // ★ 左リストの active を全て解除
    const listContainer = document.querySelector('.list-container');
    if (listContainer) {
      listContainer.querySelectorAll('.list-item').forEach(item => item.classList.remove('active'));
    }


    generateArchiveSortButtons();


    updateMobileView();
    adjustMediaSizes();

    if (listContainer) listContainer.scrollTop = 0;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        attachScrollStep();
      });
    });
  });
});

// ================================
// 📌 メニュークリック時のカテゴリ切替
// ================================

menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;

    // 🔹 右側表示をリセットしてトップページ状態にする
    currentIndex = null;
    imageArea.querySelectorAll('iframe, img, video, .caption').forEach(el => el.remove());
    textsContainer.querySelectorAll('p, .scroll-extra, a, .lang-toggle-btn').forEach(el => el.remove());

    window.location.hash = category;

    showCategory(category);

    
  });
});

// -------------------------
// archive用ソートボタンの要素を表示/非表示
// -------------------------
function toggleArchiveSortButtons(show) {
  const containertASB = document.getElementById('archive-sort-buttons');
  if (!containertASB) return;

  // archiveカテゴリが表示されているときだけ見せる
  if (show) {
    containertASB.style.display = 'inline-block';
  } else {
    containertASB.style.display = 'none';
  }
}


// ================================
// 画像エリアのリサイズ
// ================================
function resizeMediaToFitArea(el, areaWidth) {
  let targetEl = el;
  let wrapper = null;

  // iframe / video は wrapper を親に持つ
  if (el.closest('.media-iframe-wrapper')) {
    wrapper = el.closest('.media-iframe-wrapper');
  }
  let naturalWidth, naturalHeight, aspectRatio;

  if (el.tagName.toLowerCase() === 'iframe') {
    aspectRatio = 16 / 9;
    naturalWidth = 1600;
    naturalHeight = 900;
  } else {
    naturalWidth = el.naturalWidth || el.videoWidth || el.clientWidth;
    naturalHeight = el.naturalHeight || el.videoHeight || el.clientHeight;
    aspectRatio = naturalWidth / naturalHeight;
  }

  if (!naturalWidth || !naturalHeight) return;

  // ⭐ モバイル時だけ丸め単位を 35px に
  const roundUnit = isMobile() ? 35 : 40;

  // ================================
  // ボーダー offset
  // ================================
  const borderOffset = 2;
  const usableWidth = areaWidth - borderOffset;

  // 高さ -1px offset
  const heightOffset = 1;

  // 比率維持した縮小
  const scale = Math.min(1, usableWidth / naturalWidth);
  let newWidth = naturalWidth * scale;
  let newHeight = (naturalHeight * scale) - heightOffset;

  // ⭐★ 丸め単位で調整（PC=40, モバイル=35）
  newHeight = Math.floor(newHeight / roundUnit) * roundUnit;
  if (newHeight < roundUnit) newHeight = roundUnit;

  newWidth = aspectRatio * newHeight;

  // 横幅オーバーなら再調整
  if (newWidth > usableWidth) {
    newWidth = usableWidth;
    newHeight = newWidth / aspectRatio;

    newHeight = Math.floor(newHeight / roundUnit) * roundUnit;
  }

  // 最終調整
  newHeight = newHeight - 1;
  if (newHeight < 1) newHeight = 1;

  newWidth = Math.floor(newWidth);

  // 適用
  el.style.width = `${newWidth}px`;
  el.style.height = `${newHeight}px`;

  el.style.display = 'block';
  // el.style.margin = '-1px auto 0px auto';
  el.style.maxWidth = '100%';


  // ▶ wrapper にも高さを与える（← 超重要）
  if (wrapper) {
    wrapper.style.height = `${newHeight}px`;
  }
}




// ==========================
// すべてのメディアを調整
// ==========================
function adjustMediaSizes() {
  // const imageContainer = document.querySelector('.image-container');
  if (!imageContainer) return;

  // ⭐ 先に koma 用の処理
  adjustKomaBlocks();


  const styles = getComputedStyle(imageContainer);
  const paddingLeft = parseFloat(styles.paddingLeft) || 0;
  const paddingRight = parseFloat(styles.paddingRight) || 0;
  const usableWidth = imageContainer.clientWidth - paddingLeft - paddingRight;

  const mediaElements = imageContainer.querySelectorAll('img, video, iframe');

  mediaElements.forEach(el => {
    // ⭐ トップページの画像（.frame付き）はスキップ
    if (el.classList.contains("frame")) return;
    const applySize = () => resizeMediaToFitArea(el, usableWidth);

    if (el.tagName.toLowerCase() === 'img') {
      if (el.complete) applySize();
      else el.addEventListener('load', applySize);
    } else if (el.tagName.toLowerCase() === 'video') {
      if (el.readyState >= 1) applySize();
      else el.addEventListener('loadedmetadata', applySize);
    } else if (el.tagName.toLowerCase() === 'iframe') {
      el.addEventListener('load', applySize);
      setTimeout(applySize, 300);
    }
  });
}

window.addEventListener('resize', adjustMediaSizes);



// ==========================
// 映像のリンクを埋め込み方式に変換
// ==========================

// YouTubeのURLをembed形式に変換
function convertToYouTubeEmbed(url) {
  let videoId = "";

  if (url.includes("watch?v=")) {
    videoId = url.split("v=")[1].split("&")[0];
  } else if (url.includes("/live/")) {
    videoId = url.split("/live/")[1].split("?")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  }

  // enablejsapi=1 が超重要
  return `https://www.youtube.com/embed/${videoId}`;
}


function convertToVimeoEmbed(url) {
  const videoId = url.split("/").pop();
  return `https://player.vimeo.com/video/${videoId}`;
}

function convertToSoundCloudEmbed(url) {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&auto_play=false&hide_related=true&visual=true&color=454c50`;
}





// ==========================
// ランダムスペーシング関数↓ココカラ
// ==========================
function randomLetterSpacing(text, minSpacing = -0.5, maxSpacing = 2) {
  return text
    .split('')
    .map(char => {
      const spacing = (Math.random() * (maxSpacing - minSpacing) + minSpacing).toFixed(2);
      return `<span style="letter-spacing:${spacing}px">${char}</span>`;
    })
    .join('');
}

// ==========================
// メニューに適用
// ==========================
function applyRandomSpacingToMenu() {
  document.querySelectorAll('.menu button , .menu a').forEach(button => {
    const originalText = button.textContent;
    button.innerHTML = randomLetterSpacing(originalText, 1, 3);
  });
}
// ==========================
// エリアタイトルに適用
// ==========================
function applyRandomSpacingToAreaTitles() {
  document.querySelectorAll('.area-title a').forEach(title => {
    const originalText = title.textContent;
    title.innerHTML = randomLetterSpacing(originalText, 1, 2.5);
  });
}

// ==========================
// listタイトルに適用
// ==========================
function applyRandomSpacingToListArea() {
  document.querySelectorAll('.list-title ').forEach(list => {
    const originalText = list.textContent;
    list.innerHTML = randomLetterSpacing(originalText, 0.5, 3);
  });
}

// ==========================
// mobileタイトルに適用
// ==========================
function applyRandomSpacingToMobileAreaTitles() {
  document.querySelectorAll('.mobile-nav-btn span').forEach(title => {
    const originalText = title.textContent;
    title.innerHTML = randomLetterSpacing(originalText, 1, 2.5);
  });
}

// ==========================
// mobileタイトルに適用
// ==========================
function applyRandomSpacingToTopText() {
  document.querySelectorAll('.top-title').forEach(text => {
    const originalText = text.textContent;
    text.innerHTML = randomLetterSpacing(originalText, 2, 3);
  });
}


// ==========================
// 初期化
// ==========================
window.addEventListener('DOMContentLoaded', () => {
  applyRandomSpacingToMenu();
  applyRandomSpacingToAreaTitles();
  applyRandomSpacingToListArea();
  applyRandomSpacingToMobileAreaTitles();
  applyRandomSpacingToTopText();
});





// ==========================
// スクロールトップボタン
// ==========================
function createScrollTopButton(container) {
  if (container.querySelector('.scroll-top-btn')) return;

  const btn = document.createElement('button');
  btn.textContent = '↑';
  btn.className = 'scroll-top-btn';
  container.appendChild(btn); // container 内に追加

  // 初期状態（透明 & クリック無効）
  btn.style.opacity = '0';
  btn.style.pointerEvents = 'none';
  btn.style.transition = 'opacity';

  // btn.style.border = '1px dotted var(--btn-color)';
  btn.style.color = 'var(--btn-color)';
  btn.style.cursor = 'pointer';
  btn.style.zIndex = '900';


  // -----------------------
  // 共通処理：表示更新関数
  // -----------------------
  function updateScrollTopButton() {
    // 一定量スクロールしたら表示
    if (container.scrollTop > 120) {
      btn.style.opacity = '1';
      btn.style.pointerEvents = 'auto';
    } else {
      btn.style.opacity = '0';
      btn.style.pointerEvents = 'none';
    }

    // ボタン位置（fixedで追従）
    const rect = container.getBoundingClientRect();
    btn.style.position = 'fixed';

    if (!isMobile()) {
      btn.style.left = '';
      btn.style.right = (window.innerWidth - rect.right + 30) + 'px';
    } else {
     
        btn.style.left = (rect.left + 7) + 'px';
        btn.style.right = '';
   
    }
  }


  // -----------------------
  // スクロール監視
  // -----------------------
  container.addEventListener('scroll', updateScrollTopButton);


  window.addEventListener('resize', updateScrollTopButton);

  // -----------------------
  // 初期状態でも一度実行（重要）
  // -----------------------
  updateScrollTopButton();


  // -----------------------
  // クリックでトップへ
  // -----------------------
  btn.addEventListener('click', () => {
    container.scrollTo({ top: 0 });
  });
}





