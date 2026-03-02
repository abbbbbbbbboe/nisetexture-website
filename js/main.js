
// ================================
// 📌 DOM要素の取得
// ================================
const menuButtons = document.querySelectorAll('.menu button');
const listArea = document.querySelector('.list-area');
const imageArea = document.querySelector('.image-area');
const textArea = document.querySelector('.text-area');
const page = document.querySelector('.page');
const listContainer = document.querySelector('.list-container');
const imageContainer = document.querySelector('.image-container');
const textsContainer = document.querySelector('.text-container');
const filterArea = document.getElementById('archive-sort-buttons');
let skipScrolling = false;

let currentIndex = null;
let currentArchiveFilters = [];
let archiveSortButtons = [];




// ================================
// 🆕 フィルタによる表示・非表示
// ================================

function updateListByFilter() {
  const items = contents['archive'];

  // --- 1. 既存の spacer を全て削除 ---
  listContainer.querySelectorAll('.list-item-spacer').forEach(el => el.remove());

  // --- 2. list-item の表示 / 非表示を更新 ---
  const listItems = Array.from(listContainer.querySelectorAll('.list-item'));

  listItems.forEach(el => {
    const id = el.dataset.id;
    const item = items.find(i => i.id === id);
    if (!item) return;

    // category を配列に変換
    const itemCategories = Array.isArray(item.category)
      ? item.category
      : item.category.split(',').map(s => s.trim());

    // フィルタ一致判定
    const matches =
      currentArchiveFilters.length === 0 ||
      itemCategories.some(cat => currentArchiveFilters.includes(cat));

    el.style.display = matches ? '' : 'none';
  });

  // --- 3. 表示されている list-item の間に spacer を再挿入 ---
  const visibleItems = listItems.filter(el => el.style.display !== 'none');

  visibleItems.forEach((el, index) => {
    // 最後の要素には spacer を入れない
    if (index === visibleItems.length - 1) return;

    const spacer = document.createElement('div');
    spacer.className = 'list-item-spacer';
    listContainer.insertBefore(spacer, el.nextSibling);
  });
}



// ================================
// 📌 archiveカテゴリ専用：フィルターボタン生成と挙動設定
// ================================
function generateArchiveSortButtons() {
  const container = document.getElementById('archive-sort-buttons');
  if (!container) return;

  container.innerHTML = '';

  // --- sortボタン生成の「前」に画像を追加 ---
  const imgBefore = document.createElement("img");
  imgBefore.src = "img/parentheses.svg"; // ←画像パス
  imgBefore.alt = "parentheses";
  imgBefore.className = "archive-parentheses-left"; // 任意
  container.appendChild(imgBefore);

  // --- カテゴリ集計 ---
  const categoryCount = {};
  contents.archive.forEach(item => {
    const cats = item.category.split(',').map(c => c.trim());
    cats.forEach(cat => {
      categoryCount[cat] = (categoryCount[cat] || 0) + 1;
    });
  });

  // 優先カテゴリ順
  const priorityOrder = ['work', 'exhibition', 'news'];

  const sortedCats = Object.entries(categoryCount)
    .sort((a, b) => {
      const [catA, countA] = a;
      const [catB, countB] = b;

      const idxA = priorityOrder.indexOf(catA);
      const idxB = priorityOrder.indexOf(catB);

      const isPriorityA = idxA !== -1;
      const isPriorityB = idxB !== -1;

      // ① 優先カテゴリ同士 → priorityOrder の順
      if (isPriorityA && isPriorityB) {
        return idxA - idxB;
      }

      // ② 優先カテゴリ vs 通常カテゴリ → 優先を先に
      if (isPriorityA) return -1;
      if (isPriorityB) return 1;

      // ③ 通常カテゴリ同士 → 数が多い順
      if (countA !== countB) {
        return countB - countA;
      }

      // ④ 同数ならアルファベット順
      return catA.localeCompare(catB);
    })
    .map(([cate]) => cate);

  // --- sortボタン生成 ---
  sortedCats.forEach(categ => {
    const btn = document.createElement('button');
    btn.dataset.archiveCategory = categ;
    btn.className = "archive-filter";
    btn.innerHTML = "*" + randomLetterSpacing(categ);
    container.appendChild(btn);
  });

  // --- リセットボタン ---
  const resetBtn = document.createElement('button');
  resetBtn.textContent = "all";
  resetBtn.className = "archive-filter-reset";
  container.appendChild(resetBtn);


  // ④ 後に画像を追加
  const imgAfter = document.createElement("img");
  imgAfter.src = "img/parentheses.svg";
  imgAfter.alt = "parentheses";
  imgAfter.className = "archive-parentheses-right";
  container.appendChild(imgAfter);

  // ✅ カテゴリボタンだけを取得
  archiveSortButtons = Array.from(
    container.querySelectorAll('button[data-archive-category]')
  );

  // ================================
  // 📌 リセットボタン
  // ================================
  resetBtn.addEventListener('click', () => {

    // 1) currentArchiveFilters を完全に空にする
    currentArchiveFilters = [];

    // 2) 今の URL から category / itemId を取り出す
    const currentHash = window.location.hash;
    const [catPart] = currentHash.replace('#', '').split('?');
    const [category, itemId] = catPart.split('/');

    // 3) /A（作品ID）は残すが ?filter= は付けない
    let newHash = `#${category || 'archive'}`;
    if (itemId) newHash += `/${itemId}`;

    // showCategory が暴発しないよう一時停止
    window.suppressHashRender = true;
    window.location.hash = newHash;
    setTimeout(() => { window.suppressHashRender = false; }, 50);

    // 4) 左リストのフィルターを解除して再描画
    updateListByFilter('archive');

    // 5) ボタンの見た目も更新
    updateArchiveButtonStates();

   
  });






  // ================================
  // 📌 フィルターボタンクリック処理（URL反映版 / 正式版）
  // ================================
  archiveSortButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const selected = btn.dataset.archiveCategory;

      // ON/OFF切り替え
      if (currentArchiveFilters.includes(selected)) {
        currentArchiveFilters = currentArchiveFilters.filter(f => f !== selected);
      } else {
        currentArchiveFilters.push(selected);
      }

      // ✅ 現在のハッシュを解析
      const currentHash = window.location.hash;
      const [catPart] = currentHash.replace('#', '').split('?');
      const [category, itemId] = catPart.split('/');

      // ✅ 新しいハッシュ構築（作品表示状態は保持）
      let newHash = `#${category || 'archive'}`;
      if (itemId) newHash += `/${itemId}`;

      if (currentArchiveFilters.length > 0) {
        newHash += `?filter=${currentArchiveFilters.join(',')}`;
      }

      // ✅ 「ここが大事」 URL更新で showCategory が走らないように一時停止
      window.suppressHashRender = true;
      window.location.hash = newHash;
      setTimeout(() => { window.suppressHashRender = false; }, 50);

      // ✅ 左リストを更新
      updateListByFilter('archive');

      // ===============================
      // ✅ 表示中の作品がフィルタに一致するかチェック
      // ===============================
      if (window.currentRenderedId) {
        const currentItem = contents.archive.find(i => i.id === window.currentRenderedId);

        if (currentItem) {
          // item.category を配列化
          let itemCategories = Array.isArray(currentItem.category)
            ? currentItem.category
            : currentItem.category.split(',').map(s => s.trim());

          // フィルタに合致するか
          const matches =
            currentArchiveFilters.length === 0 ||
            itemCategories.some(cat => currentArchiveFilters.includes(cat));

          // ✅ 合わなくなった場合 → 作品表示を解除
          if (!matches) {
         

            const imgContainer = imageArea.querySelector('.image-container');
            if (imgContainer) {
              imgContainer.innerHTML = "";
            }

            const textContainer = textArea.querySelector('.text-container');
            if (textContainer) {
              textContainer.innerHTML = "";
            }

            // 内部状態リセット
            window.currentRenderedId = null;
            currentIndex = null;

            // ✅ リスト内の active クラスを全て解除する
            listArea.querySelectorAll('.list-item.active')
              .forEach(el => el.classList.remove('active'));

            // URL から ID を削除 → #archive?filter=...
            let newHash = `#archive`;
            if (currentArchiveFilters.length > 0) {
              newHash += `?filter=${currentArchiveFilters.join(',')}`;
            }

            window.suppressHashRender = true;
            window.location.hash = newHash;
            setTimeout(() => { window.suppressHashRender = false; }, 50);
          }
        }
      }

      // ✅ ボタン見た目を更新
      updateArchiveButtonStates();

    });
  });





}

// ================================
// プレビュー描画関数
// ================================
function renderPreview(data) {
  if (isMobile()) return;
  page.querySelectorAll('img.preview').forEach(el => el.remove());
  document.querySelectorAll('.preview-text-wrapper').forEach(el => el.remove());
  textArea.querySelectorAll('.scroll-extra').forEach(el => el.remove());

  // ✅ ホバー中は通常のテキストやリンク・クレジットなどを一時的に非表示
  textArea.querySelectorAll('.text-section, .scroll-extra').forEach(el => {
    el.style.visibility = 'hidden';
  });

  const firstMedia = data.media.find(file => file.match(/\.(jpg|jpeg|png|gif|webp)$/i));
  if (firstMedia) {
    const img = document.createElement('img');
    img.src = firstMedia;
    img.alt = data.title;
    img.classList.add('preview');

    const rect = page.getBoundingClientRect();
    const listrect = listArea.getBoundingClientRect();
    img.style.position = 'fixed';
    img.style.top = (rect.top) + 'px';
    img.style.left = listrect.width + 'px';
    img.style.width = (rect.width - listrect.width) + 'px';
    img.style.height = (rect.height) + 'px';
    img.style.objectFit = 'cover';
    img.style.zIndex = '999';
    img.style.pointerEvents = 'none';
    // img.style.filter = '    grayscale(100%) sepia(100%) hue-rotate(180deg) saturate(90%) brightness(85%) contrast(105%)';

    page.appendChild(img);
  }

  // --- プレビュー短文を生成 ---
  const jpText = data.text_jp || data.text_ja || data.text || "";
  const enText = data.text_en || "";

  // --- 日本語の一文を抽出 ---
  const jpPreview = jpText.split("。")[0] + (jpText.includes("。") ? "。" : "");

  // --- 英語の一文を抽出 ---
  function getFirstSentenceWithHTML(htmlText) {
    // 仮の div に流してテキストだけ抽出
    const tmpDiv = document.createElement('div');
    tmpDiv.innerHTML = htmlText;
    const textContent = tmpDiv.textContent || tmpDiv.innerText || "";

    // 最初のピリオドまでを取得（日本語なら '。' に置き換え可）
    const match = textContent.match(/.*?[.。!?]/);
    if (!match) return htmlText; // 文が見つからなければそのまま返す

    const firstSentenceText = match[0];

    // 元の HTML から対応する部分を復元
    let count = 0;
    let resultHTML = "";
    const parser = document.createElement('div');
    parser.innerHTML = htmlText;

    function traverse(node) {
      if (count >= firstSentenceText.length) return;

      if (node.nodeType === Node.TEXT_NODE) {
        const remaining = firstSentenceText.length - count;
        resultHTML += node.textContent.slice(0, remaining);
        count += node.textContent.slice(0, remaining).length;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        resultHTML += `<${node.tagName.toLowerCase()}`;
        // 属性もコピー
        for (let attr of node.attributes) {
          resultHTML += ` ${attr.name}="${attr.value}"`;
        }
        resultHTML += '>';
        for (let child of node.childNodes) {
          traverse(child);
        }
        resultHTML += `</${node.tagName.toLowerCase()}>`;
      }
    }

    parser.childNodes.forEach(traverse);
    return resultHTML;
  }

  // 使用例
  const enPreview = getFirstSentenceWithHTML(enText);



  const rect = textArea.getBoundingClientRect();

  // プレビュー用ラッパー
  const wrapper = document.createElement('div');
  wrapper.className = 'preview-text-wrapper';
  wrapper.style.position = 'absolute';
  wrapper.style.top = rect.top + 120 + 'px';
  wrapper.style.left = rect.left + 'px';
  wrapper.style.width = rect.width + 'px';
  wrapper.style.zIndex = '999';
  wrapper.style.pointerEvents = 'none';
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.margin = '0';
  // wrapper.style.mixBlendMode = 'difference';
  wrapper.style.color = '#000';



  if (jpPreview.trim()) {
    const pJp = document.createElement('p');
    pJp.className = 'preview-text text-ja';
    pJp.innerHTML = jpPreview;
    // pJp.style.margin = '0';
    wrapper.appendChild(pJp);
  }

  if (enPreview.trim()) {
    const pEn = document.createElement('p');
    pEn.className = 'preview-text text-en';
    pEn.innerHTML = enPreview;

    wrapper.appendChild(pEn);
  }

  document.body.appendChild(wrapper);
}

// ================================
// archive初期画面でitemをホバーした時にプレビューを出す。
// ================================
function attachArchiveHoverEvents() {
  listArea.querySelectorAll('.list-item').forEach(itemEl => {
    itemEl.addEventListener('mouseenter', e => {
      const index = Number(e.currentTarget.dataset.index);
      const data = contents.archive[index];
      if (!data) return;
      // クリックで表示中の作品ならプレビューを出さない
      if (currentIndex === index) return;
      renderPreview(data); // ← showCategory 内の既存の関数をそのまま呼ぶ
    });

    itemEl.addEventListener('mouseleave', () => {

      // プレビューを消す処理（あなたの既存コードに合わせる）
      page.querySelectorAll('img.preview').forEach(el => el.remove());
      document.querySelectorAll('.preview-text-wrapper').forEach(el => el.remove());

      // 消した後、右側の通常テキストを再表示
      textArea.querySelectorAll('.text-section').forEach(el => {
        el.style.visibility = 'visible';
      });
    });
  });
}

// ================================
// 左のリストの要素の構成
// ================================

function generateArchiveList() {
  listContainer.innerHTML = '';

  createScrollTopButton(listContainer);

  contents.archive.forEach((item, i) => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.dataset.index = i;
    div.dataset.id = item.id;



    // まず基本情報を入れる
    div.innerHTML = `
      <div class="list-title">+&ensp;${randomLetterSpacing(item.title, 0.5, 3)}&ensp;+</div>
      <div class="list-meta">
        <span class="list-date">(${item.date || ''})</span>
        <br>
          <span class="list-category">
      ${item.category
        ? item.category.split(",").map(cat => `*${cat}`).join(" ")
        : ""}
    </span>
        <br>
         ${item.place ? `<span class="list-place">@${item.place}</span>` : ""}
      </div>
    `;

    // ▼▼ モバイル：list-place の下に media の1枚目画像を追加 ▼▼
    if (isMobile()) {
      const media = item.media || [];
      let firstImage = null;

      // 静止画だけを候補にする
      for (const m of media) {
        if (/\.(jpg|jpeg|png|gif|webp)$/i.test(m)) {
          firstImage = m;
          break;
        }
      }

      if (firstImage) {
        const mobileImg = document.createElement("div");
        mobileImg.className = "mobile-list-image";
        mobileImg.innerHTML = `<img src="${firstImage}" alt="">`;

        // list-meta の直後に挿入
        const metaBlock = div.querySelector(".list-meta");
        if (metaBlock) {
          metaBlock.insertAdjacentElement("afterend", mobileImg);
        }
      }


    }

    // active 表示
    if (currentIndex === i) div.classList.add('active');

    // click → showCategory()
    div.addEventListener('click', () => {

 

      const previewtext = document.querySelector('.preview-text-wrapper'); // class
      if (previewtext) {
        previewtext.innerHTML = '';
      }
      page.querySelectorAll('img.preview').forEach(el => el.remove());


      currentIndex = i;

      showCategory('archive', i, currentArchiveFilters.length ? currentArchiveFilters : 'all');

      // active 更新
      listContainer.querySelectorAll('.list-item').forEach(el => el.classList.remove('active'));
      div.classList.add('active');

      // URL更新
      let newHash = `#archive/${item.id}`;
      if (currentArchiveFilters.length > 0) {
        newHash += `?filter=${currentArchiveFilters.join(',')}`;
      }

      if (isMobile()) {
        activeSection = "image";
        updateMobileView();
        adjustMediaSizes();
      }

      window.suppressHashRender = true;
      window.location.hash = newHash;
      setTimeout(() => window.suppressHashRender = false, 50);

    });

    // list-item を追加
    listContainer.appendChild(div);

    // list-item-spacer を追加
    const spacer = document.createElement("div");
    spacer.className = "list-item-spacer";
    listContainer.appendChild(spacer);
  });



  // フィルタ適用
  updateListByFilter('archive');

  // 再度 hover イベントをバインド
  attachArchiveHoverEvents();

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


}





// ================================
// 📌 archiveボタンのON/OFF状態更新（完全統合版）
// ================================
function updateArchiveButtonStates() {
  let filters = [];

  // URLハッシュから取得
  const hash = window.location.hash.replace('#', '');
  const [catPart, queryPart = ''] = hash.split('?');
  const [category, itemId] = catPart.split('/');
  const params = new URLSearchParams(queryPart);
  const filterParam = params.get('filter');

  if (category === 'archive' && filterParam) {
    filters = filterParam.split(',').map(s => s.trim());
    currentArchiveFilters = filters;
  } else {
    filters = currentArchiveFilters;
  }

  archiveSortButtons.forEach(btn => {
    const cat = btn.dataset.archiveCategory?.trim();
    const isActive = filters.includes(cat);
    btn.classList.toggle('on', isActive);
  });
}





// =====================================================
// ✅ ページ読み込み時
// ページ読み込み時にフィルターボタンを生成＆状態更新
// =====================================================
document.addEventListener('DOMContentLoaded', () => {


  // URLハッシュ解析
  const hash = window.location.hash.replace('#', '');
  const [catPart, queryPart = ''] = hash.split('?');
  const [category, id] = catPart.split('/');
  const params = new URLSearchParams(queryPart);
  const filterParam = params.get('filter');
  if (filterParam) currentArchiveFilters = filterParam.split(',');

  if (category === 'archive' && id) {
    const idx = contents.archive.findIndex(item => item.id === id);
    if (idx !== -1) currentIndex = idx;
  }

  // ★★ リロード時に padding を反映 ★★
  if (category === 'archive') {
    imageContainer.style.paddingLeft = "40px";
    imageContainer.style.paddingRight = "40px";
    // ★★ archive ページなら最初に右側と左側の中身を空にする ★★
    if (imageContainer) imageContainer.innerHTML = '';
    if (textsContainer) textsContainer.innerHTML = '';
  } else {
    imageContainer.style.paddingLeft = "0px";
    imageContainer.style.paddingRight = "0px";
  }

  generateArchiveSortButtons();
  // ★ メニューボタンの active 管理
  const menuButtons = document.querySelectorAll('.menu button');
  menuButtons.forEach(btn => btn.classList.remove('active'));
  if (category === 'archive') {
    const archiveBtn = document.querySelector('.menu button[data-category="archive"]');
    if (archiveBtn) archiveBtn.classList.add('active');
  }

  // ★ ソートボタンの表示制御
  toggleArchiveSortButtons(category === 'archive');


  if (category === 'archive') {
    if (textsContainer) textsContainer.innerHTML = '';
    generateArchiveList();

  }

  updateArchiveButtonStates();   // ← フィルターボタンの見た目更新
  // 選択中作品を右側に表示
  if (Number.isInteger(currentIndex) && contents.archive[currentIndex]) {
    showCategory('archive', currentIndex, currentArchiveFilters.length ? currentArchiveFilters : 'all');
  }

  attachScrollStep();
  updateMobileView();

  // ===== 初期描画完了後に表示 =====
  if (listContainer) listContainer.style.visibility = 'visible';
  if (imageContainer) imageContainer.style.visibility = 'visible';
  if (textsContainer) textsContainer.style.visibility = 'visible';

  areaTitleTitleCss(category);
});




document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("langToggle");
  const jpText = document.querySelector(".top-text");
  const enText = document.querySelector(".top-text-en");

  if (!toggleBtn || !jpText || !enText) return;

  toggleBtn.addEventListener("click", () => {
    if (jpText.style.display === "none") {
      // 日本語表示
      jpText.style.display = "block";
      enText.style.display = "none";
      toggleBtn.textContent = "english⇄";
    } else {
      // 英語表示
      jpText.style.display = "none";
      enText.style.display = "block";
      toggleBtn.textContent = "japanese⇄";
    }
  });
});


function areaTitleTitleCss(category) {
  const targetEl = document.querySelector('.area-title-title');
  if (!targetEl) return;

  if (category === 'archive' && currentIndex === null) {
    targetEl.classList.add('area-title-title-css');
  } else {
    targetEl.classList.remove('area-title-title-css');
  }
}




// =====================================================
// ✅ ハッシュ解析 & 表示処理
// =====================================================
function handleHashChange() {



  if (window.suppressHashRender) {
    return;
  }

  //URLから現状のページ状態を解析
  const hash = window.location.hash.replace('#', '');
  const [catPart, queryPart = ''] = hash.split('?');
  const [category, itemId] = catPart.split('/');
  const params = new URLSearchParams(queryPart);


  // --- フィルター取得（常に配列へ統一） ---
  let filterCategory = params.get('filter');
  filterCategory = filterCategory && filterCategory !== 'all'
    ? filterCategory.split(',').map(s => s.trim())
    : [];

  currentArchiveFilters = filterCategory;

  const sameCategory = category === window.currentCategory;
  const sameItem = itemId === window.currentRenderedId;

  // ✅ フィルター変更のみ
  if (sameCategory && sameItem) {
  
    updateArchiveButtonStates();

    // ✅ 現在の作品がフィルター対象外なら非表示にする
    if (window.currentRenderedId && category === 'archive') {
      const currentItem = contents.archive.find(i => i.id === window.currentRenderedId);
      if (currentItem) {
        const itemCats = Array.isArray(currentItem.category)
          ? currentItem.category
          : currentItem.category.split(',').map(s => s.trim());
        const filters = currentArchiveFilters.map(f => f.toLowerCase());
        const match = filters.length === 0 || itemCats.some(c => filters.includes(c.toLowerCase()));

        if (!match) {
          imageArea.querySelectorAll('iframe, img, video, .caption').forEach(el => el.remove());
          textArea.querySelectorAll('p, .scroll-extra, a').forEach(el => el.remove());

          window.currentRenderedId = null;
          currentIndex = null;
          listContainer.querySelectorAll('.list-item').forEach(el => el.classList.remove('active'));

          areaTitleTitleCss(category);

          // ✅ ここから追加：URLから itemId を削除（suppress でループ防止）
          window.suppressHashRender = true;
          const baseHash = `#${category}`;
          const filterPart = currentArchiveFilters.length > 0
            ? `?filter=${currentArchiveFilters.join(',')}`
            : '';
          window.location.hash = baseHash + filterPart;
          setTimeout(() => { window.suppressHashRender = false; }, 50);
        }

      }
    }

    setTimeout(() => updateListByFilter(category), 100);
    return;
  }

  //フィルターの変更のみでない場合は以下の処理
  window.currentCategory = category;

  //URLからアーカイブのidを探しその配列内のインデックスをセットする。
  let targetIndex = null;
  if (category === 'archive' && itemId) {
    const targetItem = contents.archive.find(item => item.id === itemId);
    if (targetItem) targetIndex = contents.archive.indexOf(targetItem);
  } else if (itemId && !isNaN(parseInt(itemId))) {
    targetIndex = parseInt(itemId);
  }
  // ✅ フィルタ解除で itemId があるのに targetIndex が null になるのを防ぐ
  if (category === 'archive' && itemId && targetIndex == null) {
    const fallback = contents.archive.findIndex(i => i.id === itemId);
    if (fallback !== -1) targetIndex = fallback;
  }
 


  if (category) {
    const isDifferentItem = itemId !== window.currentRenderedId;


    showCategory(category, targetIndex, filterCategory, {
      forceScrollReset: isDifferentItem,  // ← 作品が変わったときだけスクロールリセット
      skipRestore: isDifferentItem
    });
  }

  updateArchiveButtonStates();
   areaTitleTitleCss(category); 


}


