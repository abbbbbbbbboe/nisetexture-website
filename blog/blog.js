const menuButtons = document.querySelectorAll('.menu button');
const listArea = document.querySelector('.list-area');
const imageArea = document.querySelector('.image-area');
const textArea = document.querySelector('.text-area');
const listContainer = document.querySelector('.list-container');
const imageContainer = document.querySelector('.image-container');
const textsContainer = document.querySelector('.text-container');
const filterArea = document.getElementById('archive-sort-buttons');

let currentIndex = null;
let currentArchiveFilters = []; 
let archiveSortButtons = [];

import { blogContents } from "./blogcontents.js";

export function initBlog() {
  buildList(blogContents.posts);
  setupClickHandler();
}



// リサイズや回転時にも更新
window.addEventListener('resize', setVh);
window.addEventListener('orientationchange', setVh);


document.addEventListener("DOMContentLoaded", () => {

  //    if (isMobile()) {
  //   if (!hasSelectedPost()) {
  //     activeSection = "list";
  //   } else {
  //     activeSection = "text";
  //   }
 
 
  //   updateMobileView();
  // }

  if (document.querySelector(".list-container")) {
    initBlog();
     attachScrollStep();
  }

   initBlog();
  const hash = location.hash.replace("#", "");
  if (hash) {
    const post = blogContents.posts.find(p => p.id === hash);
    if (post) {
      displayText(post.textBlocks, post.images, post);
      displayImages(post.images);
      updateTextAreaTitle();
      applyRandomSpacingToAreaTitles();
      // attachJumpHandlers();
      const targetItem = listContainer.querySelector(`.list-item[data-post-id="${hash}"]`);
      if (targetItem) {
        const allItems = listContainer.querySelectorAll(".list-item");
        allItems.forEach(el => el.classList.remove("active"));
        targetItem.classList.add("active");
      }
    }
  }
applyRandomSpacingToMenu();
  applyRandomSpacingToAreaTitles();
  applyRandomSpacingToListArea();
  applyRandomSpacingToMobileAreaTitles();
  // adjustMediaSizes(); //問題ない
  
});

// ================================
// --- ブラウザ戻る・進む（hashchange対応） ---
// ================================

function clearActiveListItem() {
  const listContainer = document.querySelector(".list-container");
  listContainer.querySelectorAll(".list-item").forEach(el => {
    el.classList.remove("active");
  });
}
function clearContentAreas() {
  document.querySelector(".image-container").innerHTML = "";
  document.querySelector(".text-container").innerHTML = "";
}


window.addEventListener("hashchange", () => {
  const hash = location.hash.replace("#", "");

  // ハッシュなし → active解除 + エリアクリア
  if (!hash) {
    clearActiveListItem();
    clearContentAreas();
    return;
  }

  // 対応する記事を探す
  const post = blogContents.posts.find(p => p.id === hash);
  if (!post) return;

  // 表示更新
  displayText(post.textBlocks, post.images, post);
  displayImages(post.images);
updateTextAreaTitle();
applyRandomSpacingToAreaTitles();
  // 左のリストの active 切り替え
  // activateListItem(hash);
});

// ================================
// --- ブラウザ戻る・進む（hashchange対応） ---
// ================================





function buildList(posts) {
  
  listContainer.innerHTML = "";
createScrollTopButton(listContainer);
  posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.dataset.postId = post.id;
    div.innerHTML = `
      <div class="list-title">+&thinsp;${randomLetterSpacing(post.title)}&ensp;+</div>
      <div class="list-meta">
        <span class="list-date">(${post.date || ''})</span>
        <br>
        <span class="list-category">*${post.category || ''}</span>
      </div>
    `;
    listContainer.appendChild(div);
    const spacer = document.createElement("div");
      spacer.className = "list-item-spacer";
      listContainer.appendChild(spacer);
  });
  
}


function setupClickHandler() {
  listContainer.addEventListener("click", (e) => {
    const item = e.target.closest(".list-item");
    if (!item) return;

    const postId = item.dataset.postId;
    const post = blogContents.posts.find(p => p.id === postId);

    // active 切り替え
    listContainer.querySelectorAll(".list-item")
      .forEach(el => el.classList.remove("active"));
    item.classList.add("active");

    // スクロールリセット
    if (textsContainer) textsContainer.scrollTop = 0;
    if (imageContainer) imageContainer.scrollTop = 0;

    if (isMobile()) {
      activeSection = "text";
       applyRandomSpacingToMobileAreaTitles();
      updateMobileView();
        
    }

    displayText(post.textBlocks, post.images, post);
    displayImages(post.images);
    updateTextAreaTitle();
    applyRandomSpacingToAreaTitles();
    applyRandomSpacingToMobileAreaTitles();

    // ハッシュ更新は最後（または少し遅らせる）
    setTimeout(() => { location.hash = postId; }, 0);
  });
}



//   const isMobile = window.innerWidth <= 768;
// let title = null;
//   if (title.trim()) {
//   title = document.createElement('div');
//   title.className = 'mobile_title';

//   // モバイル → タイトル + テキスト
//   // PC → テキストのみ
//   if (isMobile) {
//     title.innerHTML = `
//       <p class="title">${posts.title || ""}</p>
//       <p class="category">${posts.category || ""}</p>
//       <p class="date">${posts.date || ""}</p>
//     `;
//   } else {
//     title.innerHTML = ``;
//   }

//   textContainer.appendChild(title);
// }

function displayText(blocks, images, post) {
  textsContainer.innerHTML = "";
  createScrollTopButton(textsContainer);

  let currentButtonGroup = null;

 // =========================================================
  // ★ モバイル版：本文の前にタイトル・カテゴリ・日付を挿入
  // =========================================================
  if (isMobile()) {
    const titleP = document.createElement("p");
    titleP.className = "mobile_text_title";
    titleP.innerHTML = `+&ensp;${post.title || ""}&ensp;+`;
    textsContainer.appendChild(titleP);

    const categoryP = document.createElement("p");
    categoryP.className = "mobile_text_category_data";
    categoryP.innerHTML =`(${post.date || ""}) &emsp; * ${post.category || ""}`;
    textsContainer.appendChild(categoryP);
    //"*" + post.category + "&emsp;" +"(" + post.date + ")" || ""

    
  }

  blocks.forEach(block => {

    // --------------------------
    // ▶ 通常の段落 <p>
    // --------------------------
    if (block.type === "p") {
      currentButtonGroup = null;

      const p = document.createElement("p");
      p.innerHTML = block.text;   // ← a タグ対応
    // ← クラスが配列か文字列かを判定して追加
  if (block.class) {
    if (Array.isArray(block.class)) {
      block.class.forEach(c => p.classList.add(c));
    } else {
      p.classList.add(block.class);
    }
  }

      textsContainer.appendChild(p);
    }

// --------------------------
// ▶ Aタグ
// --------------------------
else if (block.type === "a") {
  currentButtonGroup = null;

  // 親となる <p> を作る
  const p = document.createElement("p");

  // <a> を作る
  const a = document.createElement("a");
  a.href = block.link || "#";
  a.textContent = block.text || "";
  a.target = "_blank";

  // class が配列にも単体にも対応
  if (block.class) {
    if (Array.isArray(block.class)) {
      block.class.forEach(cls => a.classList.add(cls));
    } else {
      a.classList.add(block.class);
    }
  }

  // a を p の子要素に入れる
  p.appendChild(a);

  // 最後に p を textsContainer に追加
  textsContainer.appendChild(p);
}

    // --------------------------
    // ▶ 区切り線
    // --------------------------
    else if (block.type === "divider") {
      currentButtonGroup = null;

      const div = document.createElement("div");
      div.className = "divider-line";
      textsContainer.appendChild(div);
    }


    // --------------------------
    // ▶ ボタン or メディア挿入位置
    // --------------------------
    else if (block.type === "button") {

      const targetId = block.targetId;
      const matchedMedia = images.find(img => img.id == targetId);

      // =========================================================
      // ★ モバイル版 → ボタンの代わりに画像/動画を直接挿入
      // =========================================================
      if (isMobile()) {
        if (matchedMedia) {
          const wrapper = document.createElement("div");
          wrapper.className = "inline-media-wrapper";

          const mediaEl = createMediaElement(matchedMedia);
          wrapper.appendChild(mediaEl);

          // キャプション
          if (matchedMedia.caption) {
            const cap = document.createElement("div");
            cap.className = "caption";
            cap.textContent = matchedMedia.caption;
            wrapper.appendChild(cap);
          }

          textsContainer.appendChild(wrapper);
          
        }
        return; // ← PC 用ボタン部分は作らない
      }


      // =========================================================
      // ★ PC版 → ボタンを作る (今まで通り)
      // =========================================================
      if (!currentButtonGroup) {
        currentButtonGroup = document.createElement("div");
        currentButtonGroup.className = "button-group";
        textsContainer.appendChild(currentButtonGroup);
      }

      let label = block.label || matchedMedia?.caption || "";

      const btn = document.createElement("button");
      btn.className = "jump-btn";
      btn.dataset.targetId = targetId;
      btn.textContent = label + " →";

      currentButtonGroup.appendChild(btn);
    }
    attachJumpHandlers();

  });

  
 
}

 // =========================================================
      //モバイル用のtextareaの画像表示の際の関数
      // =========================================================
function createMediaElement(item) {
  const file = item.src;
  const mediaId = item.id;
  let wrapper = document.createElement("div");
  wrapper.className = "media-wrapper";

  // --- YouTube ---
  if (file.includes("youtube.com") || file.includes("youtu.be")) {
    const embedUrl = file.includes("embed") ? file : convertToYouTubeEmbed(file);
    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    iframe.setAttribute("allowfullscreen", "");
    iframe.dataset.id = mediaId;
    wrapper.appendChild(iframe);
  }

  // --- Vimeo ---
  else if (file.includes("vimeo.com")) {
    const embedUrl = convertToVimeoEmbed(file);
    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    iframe.setAttribute("allowfullscreen", "");
    iframe.dataset.id = mediaId;
    wrapper.appendChild(iframe);
  }

  // --- SoundCloud ---
  else if (file.includes("soundcloud.com")) {
    const embedUrl = convertToSoundCloudEmbed(file);

    // 透明 iframe を作成（モバイルのオーバーレイ消すため）
    const iframe = document.createElement("iframe");
    iframe.src = embedUrl;
    // iframe.style.width = "0";
    // iframe.style.height = "0";
    // iframe.style.opacity = "0";
    // iframe.style.border = "0";
    iframe.dataset.id = mediaId;

    wrapper.appendChild(iframe);

    // // --- カスタム UI ---
    // const ui = document.createElement("div");
    // ui.className = "soundcloud-ui";

    // const title = document.createElement("div");
    // title.className = "soundcloud-title";
    // title.textContent = item.title || "SoundCloud Track";

    // const playBtn = document.createElement("button");
    // playBtn.className = "sc-play-btn";
    // playBtn.textContent = "▶︎ PLAY";

    // const pauseBtn = document.createElement("button");
    // pauseBtn.className = "sc-pause-btn";
    // pauseBtn.textContent = "⏸ PAUSE";

    // ui.appendChild(title);
    // ui.appendChild(playBtn);
    // ui.appendChild(pauseBtn);

    // wrapper.appendChild(ui);

    // --- Widget API 接続 ---
    // setTimeout(() => {
    //   if (typeof SC !== "undefined" && SC.Widget) {
    //     const widget = SC.Widget(iframe);
    //     playBtn.onclick = () => widget.play();
    //     pauseBtn.onclick = () => widget.pause();
    //   }
    // }, 200);
  }

  // --- MP4 ---
  else if (file.endsWith(".mp4")) {
    const video = document.createElement("video");
    video.src = file;
    video.controls = true;
    video.playsInline = true;
    video.dataset.id = mediaId;
    wrapper.appendChild(video);
  }

  // --- 画像 ---
  else {
    const img = document.createElement("img");
    img.src = file;
    img.alt = item.caption || "";
    img.dataset.id = mediaId;
    wrapper.appendChild(img);
  }

  return wrapper;
}


 // =========================================================
      //imageareaの画像表示の関数
      // =========================================================
function displayImages(images) {
  
  imageContainer.innerHTML = "";

  images.forEach((item, idx) => {
    const file = item.src;
    const mediaId = item.id ?? idx;
    

    // ⭐ wrapper を作成（フラッシュはこれにつける）
    const wrapper = document.createElement("div");
    wrapper.className = "media-wrapper";
    
    wrapper.dataset.id = mediaId; // これで wrapper も検索可能に
    wrapper.style.position = "relative";
    wrapper.style.overflow = "hidden"; // ← フラッシュをきれいに見せるため必須
    // wrapper.style.width = "fit-content";

    let innerHTML = "";

    // --- YouTube ---
    if (file.includes("youtube.com") || file.includes("youtu.be")) {
      const embedUrl = file.includes("embed") ? file : convertToYouTubeEmbed(file);
      innerHTML = `
        <iframe src="${embedUrl}" 
                frameborder="0" 
                allowfullscreen
                data-id="${mediaId}">
        </iframe>`;
    }

    // --- Vimeo ---
    else if (file.includes("vimeo.com")) {
      const embedUrl = convertToVimeoEmbed(file);
      innerHTML = `
        <iframe src="${embedUrl}"
                frameborder="0"
                allowfullscreen
                data-id="${mediaId}">
        </iframe>`;
    }

      // ⭐⭐⭐ --- SoundCloud (追加) --- ⭐⭐⭐
    else if (file.includes("soundcloud.com")) {
      const embedUrl = convertToSoundCloudEmbed(file); // 追加
      innerHTML = `
        <iframe 
          width="100%" 
          height="80px" 
        
          src="${embedUrl}"
          data-id="${mediaId}">
        </iframe>`;
    }

    // --- MP4 Video ---
    else if (file.endsWith(".mp4")) {
      innerHTML = `
        <video src="${file}" 
               controls 
               playsinline
               data-id="${mediaId}">
        </video>`;
    }

    // --- Image ---
    else {
      innerHTML = `
        <img src="${file}"
             alt=""
             data-id="${mediaId}">
      `;
    }
    

    // ⭐ wrapper の中にメディア本体を入れる
    wrapper.insertAdjacentHTML("beforeend", innerHTML);

    // コンテナに wrapper を追加
    imageContainer.appendChild(wrapper);
adjustMediaSizes();
    // --- キャプション ---
    if (item.caption) {
      const caption = document.createElement("div");
      caption.className = "caption";
      caption.textContent = item.caption;
      imageContainer.appendChild(caption);
    }
     
  });

  // 余白
  const extraSpace = document.createElement("div");
  extraSpace.className = "scroll-extra";
  extraSpace.style.height = "213px";
  imageContainer.appendChild(extraSpace);

  
  createScrollTopButton(imageContainer);
 
}


// ===============================
// ⭐ PC版：画像ジャンプ機能（画像のみ白いフラッシュ）
// ===============================
// ===============================
// ⭐ PC版：画像ジャンプ機能
// ===============================
function jumpToImage(imageId) {
  const imageContainer = document.querySelector(".image-container");
  if (!imageContainer) return;

  const target = imageContainer.querySelector(`[data-id="${imageId}"]`);
  if (!target) return;

  // ―― スクロールが必要かチェック ――
  const containerHeight = imageContainer.clientHeight;
  const contentHeight = imageContainer.scrollHeight;

  // ★ 高さが収まる場合：スクロールせず即フラッシュ
  if (contentHeight <= containerHeight) {
    setTimeout(() => {
      target.classList.add("flash-white");
      setTimeout(() => target.classList.remove("flash-white"), 200);
    }, 200);
    return;
  }

  // ―― スクロール位置を計算 ――
  const topPos = target.offsetTop - 39;

  // smooth を使わず即座にスクロール
  imageContainer.scrollTo({ top: topPos });

  // ★ スクロール後 0.5 秒してフラッシュ
  setTimeout(() => {
    target.classList.add("flash-white");
    setTimeout(() => target.classList.remove("flash-white"), 200);
  }, 200);
}


// ===============================
// ⭐ PC版：テキスト内ボタン → 画像ジャンプ
// ===============================
function attachJumpHandlers() {
  document.querySelectorAll(".jump-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.targetId;
      jumpToImage(id);
    });
  });
}

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

// function convertToSoundCloudEmbed(url) {
//   const encoded = encodeURIComponent(url);
//   return `https://w.soundcloud.com/player/?url=${encoded}&color=%23ff5500&inverse=false&auto_play=false&show_user=true`;
// }

function convertToSoundCloudEmbed(url) {
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&auto_play=false&hide_related=true&visual=true`;
}



// ==============================================================================
// decoration系
// ==============================================================================


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
  document.querySelectorAll('.area-title h1, .area-title-imagetext h1').forEach(title => {
    const originalText = title.textContent;
    title.innerHTML = randomLetterSpacing(originalText, 1, 2.5);
  });
}

// ==========================
// listタイトルに適用
// ==========================
function applyRandomSpacingToListArea() {
  document.querySelectorAll('.list-area button,.list-area p').forEach(list => {
    const originalText = list.textContent;
    list.innerHTML = randomLetterSpacing(originalText);
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
  applyRandomSpacingToMobileAreaTitles();
});


// ==========================
// スクロール制御（コンテナ単位、最後のステップで止める）
// ==========================
function attachScrollStep() {
  document.querySelectorAll('.list-container, .image-container, .text-container').forEach(container => {
    if (container.dataset.scrollAttached === "true") return;
    container.dataset.scrollAttached = "true";

    let isScrolling = false;

    // --------------------------------------------------
    // 👇 トリガー距離（指がこれだけ動いたら反応する）
    //    スクロール幅（実際に移動する量）
    // --------------------------------------------------
    const getTriggerAndStep = (container) => {
      const isMobile = window.innerWidth <= 768;

      // PC / Mobile で切替
      if (isMobile) {
        if (container === imageContainer) return { trigger: 7, step: 35 };
        if (container === textsContainer) return { trigger: 7, step:  35};
        if (container === listContainer)  return { trigger: 7, step: 35 };
      } else {
        if (container === imageContainer) return { trigger: 120, step: 120 };
        if (container === textsContainer) return { trigger: 10, step: 80 };
        if (container === listContainer)  return { trigger: 40, step: 40 };
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
          wheelAccum = 0;  // リセット
        }
      },
      { passive: false }
    );

    // ==================================================
    // 📱 Mobile: touchmove
    // ==================================================
    let lastY = 0;
    let accum = 0; // accumulated movement

    container.addEventListener("touchstart", (e) => {
      lastY = e.touches[0].clientY;
      accum = 0;
    });

    container.addEventListener("touchmove", (e) => {
      e.preventDefault();
      const currentY = e.touches[0].clientY;
      const diff = lastY - currentY;

      accum += diff;
      lastY = currentY;

      const { trigger, step } = getTriggerAndStep(container);

      // 指が trigger 以上動いたらステップスクロール
      if (Math.abs(accum) >= trigger) {
        const direction = accum > 0 ? 1 : -1;

        scrollToStep(direction, step);

        // 余りだけ残す
        accum = accum % trigger;
      }
    }, { passive: false });

    container.addEventListener("touchend", () => {
      accum = 0;
    });
  });
}


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

  // 適用
  el.style.width = `${newWidth}px`;
  el.style.height = `${newHeight}px`;

  el.style.display = 'block';
  // el.style.margin = '-1px auto 0px auto';
  el.style.maxWidth = '100%';

}




// ==========================
// すべてのメディアを調整（image-container & text-container 両方）
// ==========================
function adjustMediaSizes() {
    const containers = isMobile()
    ? [
        document.querySelector('.image-container'),
        document.querySelector('.text-container')
      ].filter(Boolean)   // モバイル：両方
    : [
        document.querySelector('.image-container')
      ].filter(Boolean);   // PC：image-containerだけ

  containers.forEach(container => {
    const styles = getComputedStyle(container);
    const paddingLeft = parseFloat(styles.paddingLeft) || 0;
    const paddingRight = parseFloat(styles.paddingRight) || 0;
    const usableWidth = container.clientWidth - paddingLeft - paddingRight;

    const mediaElements = container.querySelectorAll('img, video, iframe');

    mediaElements.forEach(el => {
    

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
  });
}


window.addEventListener('resize', adjustMediaSizes);
