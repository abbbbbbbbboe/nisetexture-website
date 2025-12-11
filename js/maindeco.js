  attachScrollStep()
  
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
      imageContainer.style.paddingLeft = "80px";
      imageContainer.style.paddingRight = "80px";
    } else {
      imageContainer.style.paddingLeft = "20px";
      imageContainer.style.paddingRight = "20px";
    }
currentPage = btn.dataset.category; // ← これが重要！！
    generateArchiveList()
    // ★ 左リストの active を全て解除
    const listContainer = document.querySelector('.list-container');
    if (listContainer) {
      listContainer.querySelectorAll('.list-item').forEach(item => item.classList.remove('active'));
    }

    
    generateArchiveSortButtons(); 



// adjustMobilePageTopLayout();
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
    // console.log("🟡 showCategory 呼び出し:", {
    //   category,
    //   targetIndex,
    //   filterCategory,
    //   forceScrollReset: isDifferentItem,
    //   skipRestore: isDifferentItem
    // });

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
  // 初回タイトル生成
  // ================================
//   document.querySelectorAll('.list-area, .image-area, .text-area').forEach(area => {
//   if (!area.querySelector('.area-title')) {
//     const title = document.createElement('div');
//     title.className = 'area-title';

//     if (area.classList.contains('list-area')) title.textContent = 'title';
//     if (area.classList.contains('image-area')) title.textContent = 'image';
//     if (area.classList.contains('text-area')) title.textContent = 'text';

//     area.prepend(title);
//   }
// });





  // ================================
  // 画像エリアのリサイズ
  // ================================
function resizeMediaToFitArea(el, areaWidth) {
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

}




// ==========================
// すべてのメディアを調整
// ==========================
function adjustMediaSizes() {
  // const imageContainer = document.querySelector('.image-container');
  if (!imageContainer) return;

    // ⭐ 先に koma 用の処理
  adjustKomaBlocks()
  

  const styles = getComputedStyle(imageContainer);
  const paddingLeft = parseFloat(styles.paddingLeft) || 0;
  const paddingRight = parseFloat(styles.paddingRight) || 0;
  const usableWidth = imageContainer.clientWidth - paddingLeft - paddingRight;

  const mediaElements =  imageContainer.querySelectorAll('img, video, iframe');

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

  // ① 通常動画の形式 ...watch?v=XXXX
  if (url.includes("watch?v=")) {
    videoId = url.split("v=")[1].split("&")[0];
  
  // ② ライブ配信の形式 .../live/XXXX
  } else if (url.includes("/live/")) {
    videoId = url.split("/live/")[1].split("?")[0];
  
  // ③ 短縮URL形式 youtu.be/XXXX
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  }

  return `https://www.youtube.com/embed/${videoId}`;
}

// VimeoのURLをembed形式に変換
function convertToVimeoEmbed(url) {
  const videoId = url.split("/").pop();
  return `https://player.vimeo.com/video/${videoId}`;
}


// ページロード時にもハッシュを復元
// window.addEventListener('load', () => {
//   // handleHashChange(); // ← 下の関数を呼び出すだけ
//   updateArchiveButtonStates();
// });

// ハッシュ変化時
// window.addEventListener('hashchange', handleHashChange);


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
    button.innerHTML = randomLetterSpacing(originalText);
  });
}
// ==========================
// エリアタイトルに適用
// ==========================
function applyRandomSpacingToAreaTitles() {
  document.querySelectorAll('.area-title h1').forEach(title => {
    const originalText = title.textContent;
    title.innerHTML = randomLetterSpacing(originalText, 1, 2.5);
  });
}

// ==========================
// listタイトルに適用
// ==========================
function applyRandomSpacingToListArea() {
  document.querySelectorAll('.list-title').forEach(list => {
    const originalText = list.textContent;
    list.innerHTML = randomLetterSpacing(originalText, 2, 2.5);
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
// 初期化
// ==========================
window.addEventListener('DOMContentLoaded', () => {
  applyRandomSpacingToMenu();
  applyRandomSpacingToAreaTitles();
  applyRandomSpacingToListArea();
  applyRandomSpacingToMobileAreaTitles()
});



// // ==========================
// // スクロール制御（コンテナ単位、最後のステップで止める）
// // ==========================


// function attachScrollStep() {
//   document.querySelectorAll('.list-container, .image-container, .text-container, .page-top').forEach(container => {
//     if (container.dataset.scrollAttached === "true") return;
//     container.dataset.scrollAttached = "true";

//     let isScrolling = false;

//     const getStep = () => {
//       const isImg = container.classList.contains('image-container');
//       if (window.innerWidth <= 768) {
//         return isImg ? 35 : 35;   // Mobile 固定35px
//       } else {
//         return isImg ? 120 : 40;  // PC
//       }
//     };

//     const maxScroll = () =>
//       container.scrollHeight - container.clientHeight;

//     const scrollToStep = (direction) => {
//       if (isScrolling) return;
//       isScrolling = true;

//       const step = getStep();
//       let target = container.scrollTop + direction * step;

//       // 最終ステップ調整
//       const lastStepTop = Math.floor(maxScroll() / step) * step;
//       if (target > lastStepTop) target = lastStepTop;
//       if (target < 0) target = 0;

//       target = Math.round(target / step) * step;

//       container.scrollTo({ top: target, behavior: 'auto' });

//       setTimeout(() => { isScrolling = false; }, 80);
//     };


//     // ==========================
//     // PC: wheel
//     // ==========================
//     container.addEventListener(
//       'wheel',
//       (e) => {
//         e.preventDefault();
//         const direction = e.deltaY > 0 ? 1 : -1;
//         scrollToStep(direction);
//       },
//       { passive: false }
//     );

//     // ==========================
//     // Mobile: touch
//     // ==========================
//     let lastY = 0;
//     let accum = 0;
//     const trigger = 17;

//     // **慣性疑似スクロール用**
//     let inertiaInterval = null;
//     let inertiaVelocity = 0;

//     const startInertia = () => {
//       clearInterval(inertiaInterval);

//       inertiaInterval = setInterval(() => {
//         // 速度がほぼ0 → 停止
//         if (Math.abs(inertiaVelocity) < 0.05) {
//           clearInterval(inertiaInterval);
//           return;
//         }

//         const direction = inertiaVelocity > 0 ? 1 : -1;
//         scrollToStep(direction);

//         // 摩擦で減衰
//         inertiaVelocity *= 0.87;
//       }, 60); // 60msごとに "カタカタ" 移動
//     };


//     container.addEventListener("touchstart", (e) => {
//       lastY = e.touches[0].clientY;
//       accum = 0;
//       inertiaVelocity = 0;
//       clearInterval(inertiaInterval);
//     });

//     container.addEventListener("touchmove", (e) => {
//       e.preventDefault();
//       const currentY = e.touches[0].clientY;
//       const diff = lastY - currentY;

//       accum += diff;
//       lastY = currentY;

//       // 慣性用速度に加算
//       inertiaVelocity = diff * 0.23;

//       if (Math.abs(accum) >= trigger) {
//         const direction = accum > 0 ? 1 : -1;
//         scrollToStep(direction);
//         accum = accum % trigger;
//       }
//     }, { passive: false });

//     container.addEventListener("touchend", () => {
//       // 指離したら慣性ステップスクロール開始
//       if (Math.abs(inertiaVelocity) > 0.5) {
//         startInertia();
//       }
//       accum = 0;
//     });
//   });
// }



// ==========================
// スクロールトップボタン
// ==========================
function createScrollTopButton(container) {
  if (container.querySelector('.scroll-top-btn')) return;

  const btn = document.createElement('button');
  btn.textContent = '↑';
  btn.className = 'scroll-top-btn';
  container.appendChild(btn); // container 内に追加
    // 初期非表示
  btn.style.display = 'none';
 
  btn.style.border = '1px solid #b4b4b4';
 
  btn.style.color = '#e1e1e1';
  btn.style.cursor = 'pointer';
  btn.style.zIndex = '900';
 
  // スクロール監視
  container.addEventListener('scroll', () => {
    // 一定量スクロールしたら表示
    if (container.scrollTop > 120) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }

    // エリア右下にボタンを配置（fixedで追従）
    const rect = container.getBoundingClientRect();
    btn.style.position = 'fixed';
 

  if (!isMobile()) {
    btn.style.left = '';
    btn.style.right = (window.innerWidth - rect.right + 30) + 'px'; // 右端からの余白
  } else {
    // モバイル
    if (activeSection === 'list') {
   btn.style.left = '';
    btn.style.right = (window.innerWidth - rect.right + 7) + 'px'; // 右端からの余白
    } else {
     btn.style.left = (rect.left + 7) + 'px'; // 16pxは画面端からの余白
    btn.style.right = ''; // 念のため右は空に
    }
  }
  });

  btn.addEventListener('click', () => {
    container.scrollTo({ top: 0 });
  });
}


