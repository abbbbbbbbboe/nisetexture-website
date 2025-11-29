// ===============================
// 🔷 スマホアドレスバー高さ調整
// ===============================
function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
setVh();
window.addEventListener("resize", setVh);
window.addEventListener("orientationchange", setVh);

// ===============================
// 🔷 モバイル判定
// ===============================
function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

// ===============================
// 🔷 セクション状態
// ===============================
let activeSection = "list"; // "list" | "image" | "text"

// ===============================
// 🔷 DOM 取得
// ===============================
const listArea  = document.querySelector(".list-area");
const imageArea = document.querySelector(".image-area");
const textArea  = document.querySelector(".text-area");

const prevBtn = document.getElementById("nav-prev");
const nextBtn = document.getElementById("nav-next");

// ===============================
// 🔷 記事が選択されているか
// ===============================
function hasSelectedPost() {
  return !!location.hash.replace("#", "");
}

// ===============================
// 🔷 初期ロード
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  if (isMobile()) {
    if (!hasSelectedPost()) {
      activeSection = "list";
    } else {
      activeSection = "text";
    }
 
 
    updateMobileView();
  }
});

// ===============================
// 🔷 メイン切り替え処理
// ===============================
function updateMobileView() {

  // PC は常に全部表示
  if (!isMobile()) {
    listArea.style.display  = "";
    imageArea.style.display = "";
    textArea.style.display  = "";
    prevBtn.style.display   = "none";
    nextBtn.style.display   = "none";
    return;
  }

  // アクティブセクションのみ表示
  listArea.style.display  = activeSection === "list"  ? "" : "none";
  imageArea.style.display = activeSection === "image" ? "" : "none";
  textArea.style.display  = activeSection === "text"  ? "" : "none";

  
  const textsContainer = document.querySelector('.text-container');
  if (textsContainer) textsContainer.scrollTop = 0;
  updateNavButtons();
 
}

// ===============================
// 🔷 ナビゲーションボタン設定
// ===============================
function updateNavButtons() {

  const selected = hasSelectedPost();

  if (activeSection === "list") {
    if (!selected) {
      // 記事未選択 → 右ボタン無し
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    } else {
      // 記事選択時 → textへ
      prevBtn.style.display = "none";
      nextBtn.style.display = "";
      nextBtn.innerHTML = `↑ <span class="mobile-nav-btn-text">text | image</span>`;
      
      nextBtn.onclick = () => {
        activeSection = "text";
        
      
        updateMobileView();
         adjustMediaSizes();
          
         
        
      };
    }
  }

  if (activeSection === "image") {
    // image = 左→list / 右→text
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";

  }



  if (activeSection === "text") {
    prevBtn.style.display = "";

    prevBtn.innerHTML = `↓ <span class="mobile-nav-btn-text">list</span>`;
    
    prevBtn.onclick = () => {
      activeSection = "list";
      updateMobileView();
      
      //  adjustMediaSizes();
      
      
      
    };

    nextBtn.style.display = "none";
  }

  
 
}

// ===============================
// 🔷 ブラウザ戻る対応（ハッシュ変更）
// ===============================
window.addEventListener("hashchange", () => {
  const selected = hasSelectedPost();

  if (!isMobile()) return;

  if (selected) {
    // 記事が選択された → text へ
    activeSection = "text";
    
  } else {
    // ハッシュ消えた → list へ
    activeSection = "list";
  }
 applyRandomSpacingToMobileAreaTitles();
  updateMobileView();
  
 
});

function updateTextAreaTitle() {
 const titleEl = document.querySelector('.area-title-imagetext h1');
  if (!titleEl) return;

  if (isMobile()) {
    titleEl.textContent = "text | image";   // ← モバイル表記
    
  } else {
    titleEl.textContent = "text";           // ← PC表記
  }
  
}
window.addEventListener("resize", updateTextAreaTitle);

