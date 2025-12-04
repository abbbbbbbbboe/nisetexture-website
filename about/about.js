const contents = {
  about: [
    {
      id: "profile",
      useSlider: true, 
      title: "Profile",
      title_en: "Profile",
      media: ["nise"],
      media_mobile: ["mobile_nise"],
      text_jp: `単純・退屈で繰り返される、日常の行為や生活の作業を、ニセテクスチャ（物や事における偽物の質感、手触り、表面の様子）によって覆い隠す・反転させることを目的に、
      2024年より活動を開始したゲイジュツ・チーム。オオタソラと小林玲衣奈が参加。主な活動は飲み会をした後にその街を一晩中歩くこと。趣味は街にある木材が本物か確認すること。`,
      text_en: `An art team that began its activities in 2024 with the aim of concealing and reversing simple, monotonous, and repetitive everyday actions and routines through “fake textures” — simulated surfaces, 
      sensations, and appearances of things and situations. The members are Sora Oota and Reina Kobayashi. Their main activity is walking around the city all night after having a drink together. Their hobby is checking whether the wooden materials found in the city are real or not.`,
         links: {
    "YouTube": "https://youtube.com/@nisetexture?si=XRcAyUBKGoHIAxTG"
  }
    },
    {
      id: "otasora",
      useSlider: true, 
      title: "オオタソラ",
       title_en: "ota sora",
      media: ["ota"],
      media_mobile: ["mobile_ota"],
       text_jp: `1998年福岡生まれ。<br>武蔵野美術大学 造形学部 基礎デザイン学科 卒業。<br>webサイト、グラフィックデザイン、映像の制作を主に行う。ドットやパターンの表現に興味がある。<br>
       なるべく道具や構造から作るように意識して制作する。`,
      text_en: `Born in Fukuoka in 1998.<br> Graduated from Musashino Art University, Faculty of Design, Department of Basic Design. <br>Primarily creates web, graphic design, and video content.
       Interested in dot and pattern expression. Consciously strives to create works by building from tools and structures whenever possible.`,
         links: {
    "Website": "https://otasora.website/",
    "Instagram": "https://www.instagram.com/abbbbbbbbboe"
  }
    },
    {
      id: "kobayashireina",
      useSlider: true, 
      title: "小林玲衣奈",
       title_en: "kobayashi reina",
      media: ["koba"],
      media_mobile: ["mobile_koba"],
    text_jp: `1998年、愛知県名古屋市生まれ。<br>2023年、情報科学芸術大学院大学［IAMAS］修士課程修了。<br>風景に関心があり、ささやかなものを集めたりまとめたりすることで、物事を見出そうとする。`,
      text_en: `Born in 1998 in Nagoya, Aichi Prefecture.Completed the Master’s Program at the Institute of Advanced Media Arts and Sciences (IAMAS) in 2023.<br>With a deep interest in landscapes, she seeks to discover meaning by collecting and assembling subtle, everyday fragments.`,
            links: {
    "Website": "https://www.kobayashireina.com/",
    "Instagram": "https://www.instagram.com/5884017rk/?hl=ja"
  
  }
    },
    {
      id: "statement",
      useSlider:true,
      title: "Statement",
      title_en: "Statement",
      media: ["statement"],
      media_mobile: ["mobile_statement"],
   text_jp: `私たちはあらゆる場面でのハラスメントを許容しません。`,
      text_en: `We will not tolerate discrimination or harassment of any kind.`,
            links: {
    
  }
    }
  ]
};

let currentIndex = null;
let currentItemId = null;


// 📌 モバイルランダム画像の前回使用番号
const lastMobileImageIndex = {};

// ===============================
// 🔷 スマホアドレスバー計算
// ===============================
function setVh() {
  // innerHeightの1%を計算
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// 初回実行
setVh();

// リサイズや回転時にも更新
window.addEventListener('resize', setVh);
window.addEventListener('orientationchange', setVh);

// ★★ ADD START : モバイル判定 + 現在表示エリア管理 ★★
let activeSection = "list"; 
// "list" | "image" | "text"

function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

const prevBtn = document.getElementById("nav-prev");
const nextBtn = document.getElementById("nav-next");

function updateMobileView() {
  // PC → すべて表示 & nav 隠す
  if (!isMobile()) {
    listArea.style.display  = "";
    imageArea.style.display = "";
    textArea.style.display  = "";
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    return;
  }

  // mobile → active だけ表示
  listArea.style.display  = (activeSection === "list")  ? "" : "none";
  imageArea.style.display = (activeSection === "image") ? "" : "none";
  textArea.style.display  = (activeSection === "text")  ? "" : "none";

  updateNavButtons();
   applyRandomSpacingToListArea();
      applyRandomSpacingToAreaTitles();
}

function updateNavButtons() {

  if (activeSection === "list") {
       // archiveページかつ作品未選択なら右ボタン非表示
    if (currentItemId == null) {
      nextBtn.style.display = "none";
      prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "none";
      nextBtn.style.display = "";
      nextBtn.innerHTML = `↑ <span class="mobile-nav-btn-text">image</span>`;
      nextBtn.onclick = () => {
        activeSection = "image";
       updateMobileView();
      applyRandomSpacingToListArea();
      applyRandomSpacingToAreaTitles();
      };
    }
  }

  if (activeSection === "image") {
    // image = 左→list / 右→text
    prevBtn.style.display = "";
    nextBtn.style.display = "";
    prevBtn.innerHTML = `↓ <span class="mobile-nav-btn-text">title</span>`;
    nextBtn.innerHTML = `↑ <span class="mobile-nav-btn-text">text</span>`;

    prevBtn.onclick = () => {
      activeSection = "list";
      updateMobileView();
      applyRandomSpacingToListArea();
      applyRandomSpacingToMobileAreaTitles();
    };
    nextBtn.onclick = () => {
      activeSection = "text";
      updateMobileView();
      applyRandomSpacingToListArea();
      applyRandomSpacingToMobileAreaTitles();
    };
  }

  if (activeSection === "text") {
    // text = 右ボタンなし / 左→image
    prevBtn.style.display = "";
    prevBtn.innerHTML = `↓ <span class="mobile-nav-btn-text">image</span>`;
    prevBtn.onclick = () => {
      activeSection = "image";
      updateMobileView();
      applyRandomSpacingToListArea();
      applyRandomSpacingToMobileAreaTitles();
    };
    nextBtn.style.display = "none";
  }
}

// ★★ ADD END ★★

document.addEventListener("DOMContentLoaded", () => {
  if (isMobile()) {
    activeSection = "list";   // ← 初期状態を list に指定
    updateMobileView();       // ← 表示を反映
  }
  attachScrollStep();
  createScrollTopButton(listContainer, textContainer, imageContainer);
});


// ================================
// 📌 DOM要素の取得
// ================================
const menuButtons = document.querySelectorAll('.menu button');
const listArea = document.querySelector('.list-area');
const imageArea = document.querySelector('.image-area');
const textArea = document.querySelector('.text-area');
const listContainer = listArea.querySelector('.list-container');
const textContainer = textArea.querySelector('.text-container');
const imageContainer = imageArea.querySelector('.image-container');

function showAboutCategory(category) {
  const items = contents.about;
  if (!items) return;

  // ★★ ADD START : 初期表示は image-area ★★
activeSection = isMobile() ? "image" : activeSection;
updateMobileView();
// ★★ ADD END ★★

  // --- エリア初期化 ---
  imageContainer.innerHTML = '';
  textContainer.innerHTML = '';

  // --- 選択されたカテゴリデータ取得 ---
  const targetItem = items.find(item => item.id === category);
  if (!targetItem) return;

  currentItemId = targetItem.id;
applyRandomSpacingToMobileAreaTitles()
  // ================================
  // 📷 メディア描画処理
  // ================================
if (isMobile() && targetItem.useSlider) {

  const folder = targetItem.media_mobile[0];
  const frameCount = 5;

  // 前回と違う番号を選ぶ
  let rand;
  do {
    rand = Math.floor(Math.random() * frameCount) + 1;
  } while (lastMobileImageIndex[folder] === rand);

  // 記録
  lastMobileImageIndex[folder] = rand;

  const img = new Image();

  // まず JPG
  img.src = `img/mobile/${folder}/${rand}.jpg`;

  // JPG ダメなら PNG
  img.onerror = () => {
    img.onerror = null;
    img.src = `img/mobile/${folder}/${rand}.png`;
  };

  img.classList.add("mobile-random-image");
  imageContainer.appendChild(img);

} else if (targetItem.useSlider) {
    
    targetItem.media.forEach((folder, idx) => {
      const containerId = `imageContainer_${category}_${idx}`;
      const container = document.createElement("div");
      container.id = containerId;
      container.className = "member-slider";
      imageContainer.appendChild(container);

      const frameCount = 5;
      const frameRatios = [6, 4, 3, 6, 9,];
      const cumulative = [];
      const total = frameRatios.reduce((a, b) => a + b, 0);
      let sum = 0;
      frameRatios.forEach(r => {
        sum += r;
        cumulative.push(sum / total);
      });

      const frames = [];
      let currentIndex = -1;
      let imagesLoaded = 0;

 for (let i = 1; i <= frameCount; i++) {
  const img = new Image();

  // まず jpg を試す
  img.src = `img/pc/${folder}/${i}.jpg`;

  // jpg がなかったら png に切り替える
  img.onerror = () => {
    img.onerror = null; // 無限ループ防止
    img.src = `img/pc/${folder}/${i}.png`;
  };

  img.classList.add("frame");
  container.appendChild(img);
  frames.push(img);

  img.onload = () => {
    imagesLoaded++;
    if (imagesLoaded === frameCount) updateFrameByCursor();
  };
}


      function updateFrameByCursor(e = null) {
        const x = e ? e.clientX : window.innerWidth / 2;
        const ratio = x / window.innerWidth;

        let index = 0;
        for (let i = 0; i < cumulative.length; i++) {
          if (ratio <= cumulative[i]) {
            index = i;
            break;
          }
        }

        if (index !== currentIndex) {
          if (currentIndex >= 0) frames[currentIndex].classList.remove("active");
          frames[index].classList.add("active");
          currentIndex = index;
        }
      }

      window.addEventListener("mousemove", updateFrameByCursor);
    });

  } else {
    // --- 通常メディア描画 ---
    targetItem.media.forEach((file, idx) => {
      let elementHTML = '';

      if (file.includes("youtube.com") || file.includes("youtu.be")) {
        const embedUrl = file.includes("embed") ? file : convertToYouTubeEmbed(file);
        elementHTML = `<iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`;
      } else if (file.includes("vimeo.com")) {
        const embedUrl = convertToVimeoEmbed(file);
        elementHTML = `<iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe>`;
      } else if (file.endsWith('.mp4')) {
        elementHTML = `<video src="${file}" controls playsinline></video>`;
      } else {
        elementHTML = `<img src="${file}" alt="${targetItem.title}">`;
      }

      imageContainer.insertAdjacentHTML('beforeend', elementHTML);

      if (targetItem.captions && targetItem.captions[idx]) {
        const caption = document.createElement('div');
        caption.className = 'caption';
        caption.textContent = targetItem.captions[idx];
        imageContainer.appendChild(caption);
      }
    });
  }

  // ================================
  // 📝 テキスト描画処理
  // ================================
  const jpFull = targetItem.text_jp || targetItem.text_ja || targetItem.text || "";
  const enFull = targetItem.text_en || "";
  const creditFull = targetItem.text_credit || "";

  // --- リンク描画 ---
if (targetItem.links && Object.keys(targetItem.links).length > 0) {
  // --- リンクがある場合の通常処理 ---
  const linkContainer = document.createElement('div');
  linkContainer.className = 'text-section text-links';

  for (const [label, url] of Object.entries(targetItem.links)) {
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
  emptyLinkSpace.style.height = isMobileDevice ? "70px" : "80px";

  textContainer.appendChild(emptyLinkSpace);
}


  // === 言語切り替えボタン ===
const langBtn = document.createElement('button');
langBtn.className = "text-section lang-toggle-btn";

// 言語のグローバル状態（維持したい場合）
let activeLanguage = window.activeLanguage || "ja";
window.activeLanguage = activeLanguage;

textContainer.appendChild(langBtn);

 // --- 日本語テキスト ---

let jaSection = null;
if (jpFull.trim()) {
  jaSection = document.createElement('div');
  jaSection.className = 'text-section text-ja';
   // モバイル → タイトル + テキスト
  // PC → テキストのみ
  if (isMobile()) {
    jaSection.innerHTML = `
      <p class="mobile-jp-title">${targetItem.title || ""}</p>
      <p>${jpFull}</p>
    `;
  } else {
    jaSection.innerHTML = `<p>${jpFull}</p>`;
  }
  textContainer.appendChild(jaSection);
}

// --- 英語テキスト ---

let enSection = null;
if (enFull.trim()) {
  enSection = document.createElement('div');
  enSection.className = 'text-section text-en';
  if (isMobile()) {
    // モバイル → タイトル + テキスト
    enSection.innerHTML = `
      <p class="mobile-en-title">${targetItem.title_en || ""}</p>
      <p>${enFull}</p>
    `;
  } else {
    // PC → テキストのみ
    enSection.innerHTML = `<p>${enFull}</p>`;
  }
  textContainer.appendChild(enSection);
}


  if (creditFull.trim()) {
    const creditSection = document.createElement('div');
    creditSection.className = 'text-section text-credit';
    creditSection.innerHTML = `<p>credit<br>${creditFull}</p>`;
    textContainer.appendChild(creditSection);
  }

  
// === 言語適用関数 ===
function applyLanguage(lang) {
  activeLanguage = lang;
  window.activeLanguage = lang;

  if (jaSection) jaSection.style.display = (lang === "ja") ? "block" : "none";
  if (enSection) enSection.style.display = (lang === "en") ? "block" : "none";

  // ボタンの表示テキスト
  langBtn.textContent = (lang === "ja") ? "EN" : "JP";
}


// === ボタンクリックでトグル ===
langBtn.addEventListener("click", () => {
  const newLang = (activeLanguage === "ja") ? "en" : "ja";
  applyLanguage(newLang);
});




// === 初期表示 ===
applyLanguage(activeLanguage);


  // --- スクロール余白 ---
  // const spacerImg = document.createElement('div');
  // spacerImg.className = 'scroll-extra';
  // imageArea.appendChild(spacerImg);


  // --- activeクラス更新 ---
  updateActiveButton(category);

  // --- サイズ調整 ---
  adjustMediaSizes();

attachScrollStep();

// ★★ ADD START : モバイルボタン更新 ★★
addMobileNavButtons();
updateMobileView();
// ★★ ADD END ★★
applyRandomSpacingToMobileAreaTitles();
createScrollTopButton(listContainer, textContainer, imageContainer);
  
}

// ★★ ADD START : resize 時にも反映 ★★
// window.addEventListener("resize", () => {
//   updateMobileView();
//   addMobileNavButtons();
// });
// ★★ ADD END ★★


// ================================
// --- activeボタン切替 ---
// ================================
function updateActiveButton(activeCategory) {
  document.querySelectorAll('[data-category]').forEach(btn => {
    if (btn.dataset.category === activeCategory) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// ================================
// --- クリックイベント設定 ---
// ================================
document.querySelectorAll('[data-category]').forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;
    if (category) {
      // ハッシュを変更（履歴に残る）
      window.location.hash = category;
      showAboutCategory(category);
      
    }
  });
});

// ================================
// --- ハッシュ変化時（ブラウザ戻る対応） ---
// ================================
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    showAboutCategory(hash);
  } else {
    // ハッシュが消えた場合、全てのactiveを外す
    updateActiveButton(null);
  }
});

// ================================
// --- 初期表示（リロード時） ---
// ================================
window.addEventListener('DOMContentLoaded', () => {
  const initialHash = window.location.hash.replace('#', '');
  if (initialHash) {
    showAboutCategory(initialHash);
  }
  attachScrollStep();
});





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

  // ================================
  // ボーダー分を差し引いた有効幅
  // ================================
  const borderOffset = 2; // 左右1pxずつ
  const usableWidth = areaWidth - borderOffset;

  // ✅ ボーダー計算のタイミングで高さからも1px減らす
  const heightOffset = 1;

  // 比率を維持して最大サイズに収める
  const scale = Math.min(1, usableWidth / naturalWidth);
  let newWidth = naturalWidth * scale;
  let newHeight = (naturalHeight * scale) - heightOffset;

  // 高さを40pxの倍数に調整
const step = isMobile() ? 35 : 40;

  newHeight = Math.floor(newHeight / step) * step;
  if (newHeight < step) newHeight = step;

  newWidth = aspectRatio * newHeight;
  // 横幅が usableWidth を超えたら再調整
  if (newWidth > usableWidth) {
    newWidth = usableWidth;
    newHeight = newWidth / aspectRatio;
    newHeight = Math.floor(newHeight / 40) * 40;
  }

  // ✅ ここではもう縦-1pxしない（上で処理済み）
// ✅ 縦を1px減らす 
newHeight = newHeight - 1; if (newHeight < 1) newHeight = 1;

newWidth = Math.floor(newWidth);
  // スタイル適用
  el.style.width = `${newWidth}px`;
  el.style.height = `${newHeight}px`;
  
  el.style.display = 'block';
  el.style.margin = '-1px auto 0px auto';
  el.style.maxWidth = '100%';
  

    // ✅ 親の member-slider 高さも設定
  const parentSlider = el.closest('.member-slider');
  if (parentSlider) {
    parentSlider.style.height = `${newHeight}px`;
  }
}



// ==========================
// すべてのメディアを調整
// ==========================
function adjustMediaSizes() {
  const imageContents = document.querySelector('.image-container');
  if (!imageContents) return;
  

  const styles = getComputedStyle(imageContents);
  const paddingLeft = parseFloat(styles.paddingLeft) || 0;
  const paddingRight = parseFloat(styles.paddingRight) || 0;
  const usableWidth = imageArea.clientWidth - paddingLeft - paddingRight;

  const mediaElements =  imageContents.querySelectorAll('img, video, iframe');

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
}

window.addEventListener('resize', adjustMediaSizes);






// // ==========================
// // スクロール制御（コンテナ単位、最後のステップで止める）
// // ==========================
// function attachScrollStep() {
//   document.querySelectorAll('.list-container, .image-container, .text-container').forEach(container => {
//     if (container.dataset.scrollAttached === "true") return;
//     container.dataset.scrollAttached = "true";

//     let isScrolling = false;

//     const getStep = () => {
//       const isImg = container.classList.contains('image-container');
//       if (window.innerWidth <= 768) {
//         return isImg ? 35 : 35;   // Mobile
//       } else {
//         return isImg ? 120 : 40;  // PC
//       }
//     };

//     const maxScroll = () => container.scrollHeight - container.clientHeight;

//     const scrollToStep = (direction) => {
//       if (isScrolling) return;
//       isScrolling = true;

//       const step = getStep();
//       let target = container.scrollTop + direction * step;

//       const lastStepTop = Math.floor(maxScroll() / step) * step;
//       if (target > lastStepTop) target = lastStepTop;
//       if (target < 0) target = 0;

//       target = Math.round(target / step) * step;
//       container.scrollTo({ top: target, behavior: 'auto' });

//       setTimeout(() => { isScrolling = false; }, 120);
//     };

//     // ==========================
//     // 🖱 PC: wheel
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

//  // ==========================
//     // 📱 Mobile: touchmove でステップスクロール
//     // ==========================
//     let lastY = 0;
//     let accum = 0;

//     container.addEventListener("touchstart", (e) => {
//       lastY = e.touches[0].clientY;
//       accum = 0;
//     });

//     container.addEventListener("touchmove", (e) => {
//   e.preventDefault(); // 標準スクロール無効

//   const currentY = e.touches[0].clientY;
//   const diff = lastY - currentY;

//   accum += diff;
//   lastY = currentY;

//   const step = getStep();   // ← 実際に動く量（例：35px）
//   const trigger = 6;       // ← 指を何px動かしたら発火するか

//   if (Math.abs(accum) >= trigger) {
//     const direction = accum > 0 ? 1 : -1;

//     scrollToStep(direction);  // step(35px) で動く

//     // 余りを残す（滑らか連続ステップのため）
//     accum = accum % trigger;
//   }
// }, { passive: false });

//     container.addEventListener("touchend", () => {
//       accum = 0;
//     });
//   });
// }




// 初回タイトル生成
// document.querySelectorAll('.list-area, .image-area, .text-area').forEach(area => {
//   if (!area.querySelector('.area-title')) {
//     const title = document.createElement('div');
//     title.className = 'area-title';

//     if (area.classList.contains('list-area')) title.textContent = 'title';
//     if (area.classList.contains('image-area')) title.textContent = 'image';
//     if (area.classList.contains('text-area')) title.textContent = 'text';

//     area.prepend(title);
//   }
// });


// YouTubeのURLをembed形式に変換
function convertToYouTubeEmbed(url) {
  const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop();
  return `https://www.youtube.com/embed/${videoId}`;
}

// VimeoのURLをembed形式に変換
function convertToVimeoEmbed(url) {
  const videoId = url.split("/").pop();
  return `https://player.vimeo.com/video/${videoId}`;
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
  document.querySelectorAll('.list-area button,.list-area p').forEach(title => {
    const originalText = title.textContent;
    title.innerHTML = randomLetterSpacing(originalText,1, 1.5);
  });
}

// ==========================
// mobileタイトルに適用
// ==========================
function applyRandomSpacingToMobileAreaTitles() {
  document.querySelectorAll('.mobile-nav-btn span').forEach(title => {
    const originalText = title.textContent;
    title.innerHTML = randomLetterSpacing(originalText,1, 2.5);
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

// ==========================
// ランダムスペーシング関数↑ここまで
// ==========================

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
    btn.style.right = (window.innerWidth - rect.right + 8) + 'px'; // 右端からの余白
    } else {
     btn.style.left = (rect.left + 8) + 'px'; // 16pxは画面端からの余白
    btn.style.right = ''; // 念のため右は空に
    }
  }
  });

  btn.addEventListener('click', () => {
    container.scrollTo({ top: 0 });
  });
}


// 初期設定
applyRandomSpacingToMenu();


