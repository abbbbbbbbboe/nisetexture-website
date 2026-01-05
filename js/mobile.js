
const mobileNavBtn = document.querySelector(".mobile-nav-btn");

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



function detectPageType() {
  const hash = window.location.hash.replace('#', '');

  if (hash.startsWith('archive')) return 'archive';

  return 'top';
}

let currentPage = detectPageType();

// ★★ ADD START : モバイル判定 + 現在表示エリア管理 ★★
let activeSection = "list";
// "list" | "image" | "text"

function isMobile() {
  return window.matchMedia("(max-width: 768px)").matches;
}

const prevBtn = document.getElementById("nav-prev");
const nextBtn = document.getElementById("nav-next");



document.addEventListener("DOMContentLoaded", () => {
  if (isMobile()) {
    if (currentIndex === null || currentIndex === undefined) {
      activeSection = "list";
    } else {
      activeSection = "image";
    }
    updateMobileView();
    adjustMediaSizes();
  }
});


const main = document.querySelector('#content');

if (currentPage === 'top') {
  main.classList.add('page-top');
  main.dataset.scrolltype = "top";
  delete main.dataset.scrollAttached;

} else {
  main.classList.remove('page-top');
  delete main.dataset.scrolltype;
  delete main.dataset.scrollAttached;

}


function updateMobileView() {

  if (!isMobile()) {
    listArea.style.display = "";
    imageArea.style.display = "";
    textArea.style.display = "";
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    return;
  }


  // ⭐ トップページは切替を完全に無効化（常に3つのセクションを表示）
  if (currentPage === "top") {
    listArea.style.display = "";
    imageArea.style.display = "";
    textArea.style.display = "";
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    return;
  }

  // ===============================
  // Archiveページ（モバイル）
  // ===============================
  if (currentPage === "archive") {

    // ★ 作品が未選択 → navを隠す
    if (currentIndex === null) {
      mobileNavBtn.style.display = "none";
    } else {
      mobileNavBtn.style.display = "";
    }

    // アクティブセクションのみ表示
    listArea.style.display = (activeSection === "list") ? "" : "none";
    imageArea.style.display = (activeSection === "image") ? "" : "none";
    textArea.style.display = (activeSection === "text") ? "" : "none";

    updateNavButtons();
    applyRandomSpacingToListArea();
    applyRandomSpacingToAreaTitles();
    applyRandomSpacingToMobileAreaTitles();
    // モバイルでは filter ボタン非表示
    if (filterArea) filterArea.style.display = "none";

    return;
  }
}

function updateNavButtons() {
    if (!isMobile()) return;
    
  if (activeSection === "list") {
    // archiveページかつ作品未選択なら右ボタン非表示
    if (currentPage === "archive" && currentIndex === null) {
      prevBtn.style.display = "none";
      nextBtn.style.display = "none";
    } else {
      prevBtn.style.display = "block";
      prevBtn.innerHTML = `↓ <span class="mobile-nav-btn-text">text</span>`;
      prevBtn.onclick = () => {
      stopInertiaAndRound(imageContainer);
      activeSection = "text";
      updateMobileView();
      applyRandomSpacingToListArea();
      applyRandomSpacingToAreaTitles();
      applyRandomSpacingToMobileAreaTitles();

      const textContainer = document.querySelector('.text-container');
      if (textContainer) {
        textContainer.scrollTop = 0;
      }
    };
     nextBtn.style.display = "block";
     nextBtn.innerHTML = `↑ <span class="mobile-nav-btn-text">image</span>`;
      nextBtn.onclick = () => {
        stopInertiaAndRound(listContainer);
        activeSection = "image";
        updateMobileView();
        applyRandomSpacingToListArea();
        applyRandomSpacingToAreaTitles();
        applyRandomSpacingToMobileAreaTitles();
      };
    }
  }

  if (activeSection === "image") {
    // image = 左→list / 右→text
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
    prevBtn.innerHTML = `↓ <span class="mobile-nav-btn-text">title</span>`;
    nextBtn.innerHTML = `↑ <span class="mobile-nav-btn-text">text</span>`;

    prevBtn.onclick = () => {
      stopInertiaAndRound(imageContainer);
      activeSection = "list";
      updateMobileView();
      applyRandomSpacingToListArea();
      applyRandomSpacingToAreaTitles();
      applyRandomSpacingToMobileAreaTitles();

      // === activeを画面内にスクロール ===
      setTimeout(() => {
        const activeItem = listContainer.querySelector('.list-item.active');
        if (activeItem) {
          activeItem.scrollIntoView({
            block: 'start',
            behavior: 'instant' // "smooth" でもOK
          });
        }
      }, 0);

    };
    nextBtn.onclick = () => {
      stopInertiaAndRound(imageContainer);
      activeSection = "text";
      updateMobileView();
      applyRandomSpacingToListArea();
      applyRandomSpacingToAreaTitles();
      applyRandomSpacingToMobileAreaTitles();

      const textContainer = document.querySelector('.text-container');
      if (textContainer) {
        textContainer.scrollTop = 0;
      }
    };
  }

  if (activeSection === "text") {
    // text = 右ボタンなし / 左→image
    prevBtn.style.display = "block";
    prevBtn.innerHTML = `↓ <span class="mobile-nav-btn-text">image</span>`;
    prevBtn.onclick = () => {
      stopInertiaAndRound(textsContainer);
      activeSection = "image";
      updateMobileView();
      applyRandomSpacingToListArea();
      applyRandomSpacingToAreaTitles();
    };
     nextBtn.style.display = "block";
     nextBtn.innerHTML = `↑ <span class="mobile-nav-btn-text">list</span>`;
     nextBtn.onclick = () => {
      stopInertiaAndRound(imageContainer);
      activeSection = "list";
      updateMobileView();
      applyRandomSpacingToListArea();
      applyRandomSpacingToAreaTitles();
      applyRandomSpacingToMobileAreaTitles();

      // === activeを画面内にスクロール ===
      setTimeout(() => {
        const activeItem = listContainer.querySelector('.list-item.active');
        if (activeItem) {
          activeItem.scrollIntoView({
            block: 'start',
            behavior: 'instant' // "smooth" でもOK
          });
        }
      }, 0);

    };
  }
}
// ★★ ADD END ★★



function adjustTopSpacerHeight() {
  // モバイル版のみ
  if (!isMobile()) return;

  const pageTop = document.querySelector(".page-top");
  const topSpacer = document.querySelector(".top-spacer");

  if (!pageTop || !topSpacer) return;

  // 画面内に表示されている他の要素の高さを合計（top-spacerとpage-top以外）
  const otherElements = Array.from(document.body.children).filter(
    el => el !== pageTop && el !== topSpacer && el.offsetParent !== null
  );

  const otherHeight = otherElements.reduce((sum, el) => sum + el.offsetHeight, 0);

  // 画面全体の高さ
  const windowHeight = window.innerHeight;

  // 残りの高さをtop-spacerにセット
  const remainingHeight = windowHeight - otherHeight;
  topSpacer.style.height = remainingHeight > 0 ? `${remainingHeight}px` : "0px";

}

// DOM読み込み時とリサイズ時に実行
document.addEventListener("DOMContentLoaded", adjustTopSpacerHeight);
window.addEventListener("resize", adjustTopSpacerHeight);

