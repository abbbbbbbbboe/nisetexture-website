const menuButtons = document.querySelectorAll('.menu button');
const listArea = document.querySelector('.list-area');
const imageArea = document.querySelector('.image-area');
const textArea = document.querySelector('.text-area');
const listContainer = document.querySelector('.list-container');
const imageContainer = document.querySelector('.image-container');
const textsContainer = document.querySelector('.text-container');
const listItem = document.querySelector('.list-item');
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

  if (document.querySelector(".list-container")) {
    initBlog();
    attachScrollStep();
  }

  const hash = location.hash.replace("#", "");
  if (hash) {
    const post = blogContents.posts.find(p => p.id === hash);
    if (post) {

      // attachJumpHandlers();
      const targetItem = listContainer.querySelector(`.list-item[data-post-id="${hash}"]`);
      if (targetItem) {
        const allItems = listContainer.querySelectorAll(".list-item");
        allItems.forEach(el => el.classList.remove("active"));
        targetItem.classList.add("active");
      }

      displayText(post.textBlocks, post.images, post);

      displayImages(post.images);
      // updateTextAreaTitle();
      // applyRandomSpacingToAreaTitles();

    }
  }
  applyRandomSpacingToMenu();
  // applyRandomSpacingToAreaTitles();
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
  // updateTextAreaTitle();
  // applyRandomSpacingToAreaTitles();
  // 左のリストの active 切り替え
  // activateListItem(hash);
});

// ================================
// --- ブラウザ戻る・進む（hashchange対応） ---
// ================================



// ================================
// 左リスト作成
// ================================

function buildList(posts) {

  listContainer.innerHTML = "";
  createScrollTopButton(listContainer,listArea);
  posts.forEach(post => {
    const div = document.createElement("div");
    div.className = "list-item";
    div.dataset.postId = post.id;
    div.innerHTML = `
    <div class="list-category list-meta">【${post.category || ''}】</div><br>
      <div class="list-title"><span>+&ensp;${randomLetterSpacing(post.title)}&ensp;+</span></div>
      <div class="list-meta">
        <span class="list-date">(${post.date || ''})</span>
      <div class="list-tag"></div>
        
      </div>
    `;
    listContainer.appendChild(div);

    // list-tag の中を取得
    const tagContainer = div.querySelector('.list-tag');

    // 配列があればタグを追加
    (post.tag || []).forEach(t => {
      const tagSpan = document.createElement("div");
      tagSpan.className = "tag";
      tagSpan.textContent = "#" + t;
      tagContainer.appendChild(tagSpan);

    });
    // ★ list-tagのクリックを list-item に伝えない
    //タグでソートする場合はこれを解除
    // tagContainer.addEventListener("click", (e) => {
    //   e.stopPropagation();
    // });

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




    if (isMobile()) {
      activeSection = "text";
      applyRandomSpacingToMobileAreaTitles();
      updateMobileView();

    }

    displayText(post.textBlocks, post.images, post);
    displayImages(post.images);

    // スクロールリセット
    if (textsContainer) textsContainer.scrollTop = 0;
    if (imageContainer) imageContainer.scrollTop = 0;

    // updateTextAreaTitle();

    // applyRandomSpacingToAreaTitles();
    // applyRandomSpacingToMobileAreaTitles();
    // ハッシュ更新は最後（または少し遅らせる）
    setTimeout(() => { location.hash = postId; }, 0);
    adjustMediaSizes();
    
  });
}


function applyHyperlinksToText(text, links, usedWords) {
  if (!text || !links || links.length === 0) return text;

  let newText = text;

  for (const link of links) {
    if (!link.word || !link.href) continue;

    // ★ すでに記事中で使われた語句はスキップ
    if (usedWords.has(link.word)) continue;

    // 正規表現エスケープ
    const escaped = link.word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // 最初の 1 回だけヒット
    const re = new RegExp(escaped);

    // マッチしなければ次へ
    if (!re.test(newText)) continue;

    // 1 回だけ置換
    newText = newText.replace(
      re,
      `<a href="${link.href}" target="_blank" class="inline-link">${link.word}</a>`
    );

    // ★ 記事全体でこの語句が使われたと記録
    usedWords.add(link.word);
  }

  return newText;
}





function collectHyperlinks(post) {
  let links = [];

    // ② 次に記事固有リンク（postHyperlinks）
  //    → 同じ word があればこちらが後に来て優先される
  if (post.postHyperlinks) {
    links.push(...post.postHyperlinks);
  }

  // ① 先に globalHyperlinks を入れる
  //    → あとで postHyperlinks が同じ単語なら上書きされる
  if (post.hyperlinkGroups) {
    post.hyperlinkGroups.forEach(groupName => {
      const group = blogContents.globalHyperlinks[groupName];
      if (group) links.push(...group);
    });
  }



  return links;
}

// function removeEmptyLinks(html) {
//   if (!html) return html;

//   // 空の a タグをすべて削除（中身が空白のみも含む）
//   return html.replace(/<a\b[^>]*>\s*<\/a>/g, "");
// }

function displayText(blocks, images, post) {
  textsContainer.innerHTML = "";

  createScrollTopButton(textsContainer, textArea);

  let currentButtonGroup = null;

   // ★ 記事全体で既にリンク化された語句を記録
  const usedWords = new Set();

  // ★ PC版・モバイル版それぞれでスキップパネルを準備
  let skipPanel = document.createElement("div");


  if (isMobile()) {
    skipPanel.className = "skip-button-panel-mobile";
    textsContainer.appendChild(skipPanel);
  } else {
    document.querySelectorAll('.skip-button-panel').forEach(el => el.remove());
    skipPanel.className = "skip-button-panel";

    // ★ PC版：.list-item.active の “下” に入れる
    const activeItem = listContainer.querySelector(".list-item.active");
    if (activeItem) {
      activeItem.insertAdjacentElement("afterend", skipPanel);
    }

  }


  // =========================================================
  // ★ モバイル版：本文の前にタイトル・カテゴリ・日付を挿入
  // =========================================================
  if (isMobile()) {

    const categoryP = document.createElement("p");
    categoryP.className = "mobile_text_category";
    categoryP.innerHTML = `【${post.category || ""}】`;
    textsContainer.appendChild(categoryP);

    const titleP = document.createElement("p");
    titleP.className = "mobile_text_title";
    titleP.innerHTML = `+&ensp;${post.title || ""}&ensp;+`;
    textsContainer.appendChild(titleP);



    //"*" + post.category + "&emsp;" +"(" + post.date + ")" || ""
    const dateP = document.createElement("p");
    dateP.className = "mobile_text_data";
    dateP.innerHTML = `(${post.date || ""}) `;
    textsContainer.appendChild(dateP);

    const wrapper = document.createElement("p");
    wrapper.className = "mobile_text_tag";

    // post.tag が配列なら、その中身を1つずつ div にして追加
    (post.tag || []).forEach(t => {
      const tagDiv = document.createElement("div");
      tagDiv.className = "tag";
      tagDiv.textContent = "#" + t;
      wrapper.appendChild(tagDiv);
    });

    textsContainer.appendChild(wrapper);

  }


  blocks.forEach(block => {

    // --------------------------
    // ▶ 通常の段落 <p>
    // --------------------------
if (block.type === "p") {
  currentButtonGroup = null;

  // 記事用のリンク一覧
  const links = collectHyperlinks(post);

  // リンク化したテキスト
  const linked = applyHyperlinksToText(block.text, links, usedWords);

  const p = document.createElement("p");
  p.innerHTML = linked; // ← aタグ反映済みテキストを入れる

    // --- 🔥 空の a タグを削除する処理 ---
  // const aTags = p.querySelectorAll("a");
  // aTags.forEach(a => {
  //   if (!a.textContent || a.textContent.trim() === "") {
  //     a.remove();
  //   }
  // });

  // クラス追加
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
    // ▶ 通常の段落 <li>
    // --------------------------
    if (block.type === "li") {
  currentButtonGroup = null;

  const links = collectHyperlinks(post);
  const linked = applyHyperlinksToText(block.text, links, usedWords);

  const li = document.createElement("li");
  li.innerHTML = linked;

  if (block.class) {
    if (Array.isArray(block.class)) {
      block.class.forEach(c => li.classList.add(c));
    } else {
      li.classList.add(block.class);
    }
  }

  textsContainer.appendChild(li);
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


      // 親要素
      const wrapper = document.createElement("div");
      wrapper.className = "divider-line";

      // 内側の border 要素
      const inner = document.createElement("div");
      inner.className = "line";

      // 親に子を入れる
      wrapper.appendChild(inner);

      // 画面に追加
      textsContainer.appendChild(wrapper)


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

    // ────────────────────────────────
    // ▶ SKIP BUTTON（PC・モバイル両対応版）
    // ────────────────────────────────
    else if (block.type === "skipbutton") {

      // ★ scroll target（PC/モバイル共通）
      const mark = document.createElement("div");
      mark.className = "skip-target";
      mark.dataset.skipId = block.id;
      textsContainer.appendChild(mark);
      const markP = document.createElement("p");
      markP.className = "skip-target-text";
      markP.textContent = block.text ? block.text : "";
      mark.appendChild(markP);

      // ★ スクロール対象を決める
      const scrollContainer = textsContainer; // モバイルもPCもtext-containerをスクロール

      // =============================================
      // ★ モバイル版：本文内にシンプルボタン挿入
      // =============================================
      if (isMobile()) {
        const btn = document.createElement("button");
        btn.className = "mobile-skip-btn";

        // ← モバイル用ラベル（なければPC用labelかデフォルト）
        let label = block.mobile_label || block.label;
        btn.textContent = label ? label + "↓" : "↓";

     
    btn.addEventListener("click", () => {
      scrollContainer.scrollTo({
        behavior: 'auto',
        top: mark.offsetTop
      });
    });

        skipPanel.appendChild(btn);

        return; // ← PC側の処理は行わない
      }

      // =============================================
      // ★ PC版：右側パネルにボタン追加（従来通り）
      // =============================================
      const sb = document.createElement("button");
      sb.className = "skip-btn";
      sb.textContent = block.label ? "…" + block.label : "";

      sb.dataset.id = block.id;
  sb.addEventListener("click", () => {
    scrollContainer.scrollTo({
      behavior: 'auto',
      top: mark.offsetTop
      
    });
  });


      skipPanel.appendChild(sb);
    }
 // ← attachJumpHandlers() はループ外が正しい
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

    iframe.dataset.id = mediaId;

    wrapper.appendChild(iframe);

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
          width="80%" 
          height="80px" 
        
          src="${embedUrl}"
          data-id="${mediaId}">
        </iframe>
        `;
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


  createScrollTopButton(imageContainer,imageArea);

}



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
  return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&auto_play=false&hide_related=true&visual=true&color=454c50`;
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
  const skipBtn = listArea.querySelector('.skip-btn');
  if (skipBtn) return;

  // if (!imageContainer) return;

  document.querySelectorAll('.list-area span,.list-area p').forEach(list => {
    const originalText = list.textContent;
    list.innerHTML = randomLetterSpacing(originalText, 2, 3);
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

function updateTextAreaTitle() {
  const titleEl = document.querySelector('.area-title-imagetext h1');
  if (!titleEl) return;

  if (isMobile()) {
    titleEl.textContent = "text | image";   // ← モバイル表記

  } else {
    titleEl.textContent = "text";           // ← PC表記
    applyRandomSpacingToAreaTitles();
  }

}
window.addEventListener("resize", updateTextAreaTitle);

// ==========================
// スクロールトップボタン
// ==========================
function createScrollTopButton(container, area) {
  if (area.querySelector('.scroll-top-btn')) return;


  const btn = document.createElement('button');
  btn.textContent = '↑';
  btn.className = 'scroll-top-btn';
  area.appendChild(btn); // container 内に追加
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





// ================================
// 画像エリアのリサイズ
// ================================
// function resizeMediaToFitArea(el, areaWidth) {
//   let naturalWidth, naturalHeight, aspectRatio;

//   if (el.tagName.toLowerCase() === 'iframe') {
//     aspectRatio = 16 / 9;
//     naturalWidth = 1600;
//     naturalHeight = 900;
//   } else {
//     naturalWidth = el.naturalWidth || el.videoWidth || el.clientWidth;
//     naturalHeight = el.naturalHeight || el.videoHeight || el.clientHeight;
//     aspectRatio = naturalWidth / naturalHeight;
//   }

//   if (!naturalWidth || !naturalHeight) return;

//   // ⭐ モバイル時だけ丸め単位を 35px に
//   const roundUnit = isMobile() ? 35 : 40;

//   // ================================
//   // ボーダー offset
//   // ================================
//   const borderOffset = 2;
//   const usableWidth = areaWidth - borderOffset;

//   // 高さ -1px offset
//   const heightOffset = 1;

//   // 比率維持した縮小
//   const scale = Math.min(1, usableWidth / naturalWidth);
//   let newWidth = naturalWidth * scale;
//   let newHeight = (naturalHeight * scale) - heightOffset;

//   // ⭐★ 丸め単位で調整（PC=40, モバイル=35）
//   newHeight = Math.floor(newHeight / roundUnit) * roundUnit;
//   if (newHeight < roundUnit) newHeight = roundUnit;

//   newWidth = aspectRatio * newHeight;

//   // 横幅オーバーなら再調整
//   if (newWidth > usableWidth) {
//     newWidth = usableWidth;
//     newHeight = newWidth / aspectRatio;

//     newHeight = Math.floor(newHeight / roundUnit) * roundUnit;
//   }

//   // 最終調整
//   newHeight = newHeight - 1;
//   if (newHeight < 1) newHeight = 1;

//   newWidth = Math.floor(newWidth);

//   // 適用
//   el.style.width = `${newWidth}px`;
//   el.style.height = `${newHeight}px`;

//   el.style.display = 'block';
//   // el.style.margin = '-1px auto 0px auto';
//   el.style.maxWidth = '100%';

// }


// ================================
// 画像エリアのリサイズ（修正版）
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

  // ================================
  // まず普通に縮小（比率維持）
  // ================================
  const scale = Math.min(1, usableWidth / naturalWidth);
  let scaledWidth = naturalWidth * scale;
  let scaledHeight = (naturalHeight * scale) - heightOffset;

 

  // ================================
  // 高さを丸め（※ここだけで丸める）
  // ================================
  let newHeight = Math.floor(scaledHeight / roundUnit) * roundUnit;
  if (newHeight < roundUnit) newHeight = roundUnit;

  // 丸めた高さから幅を再計算
  let newWidth = newHeight * aspectRatio;

  // ================================
  // 横幅オーバーなら再計算（丸めは再度しない）
  // ================================
  if (newWidth > usableWidth) {
    newWidth = usableWidth;
    newHeight = newWidth / aspectRatio;

    // 再丸めすると不具合が出るため丸めはしない
  }

  // 最終調整
  newHeight = Math.floor(newHeight);
  newHeight = newHeight - 1;
  if (newHeight < 1) newHeight = 1;

  newWidth = Math.floor(newWidth);

  // ================================
  // 適用
  // ================================
  el.style.width = `${newWidth}px`;
  el.style.height = `${newHeight}px`;

  el.style.display = 'block';
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

  const tryApply = () => {
    // naturalWidth が 0 の場合は後で再試行
    if (el.naturalWidth > 0 && el.naturalHeight > 0) {
      applySize();
      return true;
    }
    return false;
  };

  // complete でも naturalWidth が 0 のケースがある
  if (!tryApply()) {
    // 取得できるまで最大15回再試行（45ms）
    let retry = 0;
    const timer = setInterval(() => {
      if (tryApply() || retry > 15) {
        clearInterval(timer);
      }
      retry++;
    }, 3);
  }
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

window.addEventListener("load", adjustMediaSizes);
window.addEventListener('resize', adjustMediaSizes);




