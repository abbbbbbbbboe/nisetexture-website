
 // ===========================================
    // ④ 実行（読み込む画像だけ指定する）
    // ===========================================

    // 現在ページの階層の深さを返す
function getPathDepth() {
    let path = window.location.pathname;

    // 末尾の "/" を強制削除（例: /about/ → /about）
    if (path.endsWith("/")) path = path.slice(0, -1);

    const segments = path.split("/").filter(s => s.length > 0);

    // 最後の要素がファイル名か判定（ . が含まれているか ）
    const last = segments[segments.length - 1];
    const isFile = last && last.includes(".");

    // ファイル名はカウントしない
    return isFile ? segments.length - 1 : segments.length;
}


// 深さに応じて "../" を付ける
function applyBaseToPaths(paths) {
    const depth = getPathDepth();
    const base = "../".repeat(depth); // depth=1 → "../" がつく

    return paths.map(p => base + p);
}

// 1ファイルだけの補正
function applyBaseToFile(path) {
    const depth = getPathDepth();
    const base = "../".repeat(depth);
    return base + path;
}


    const pcImagesRaw = [
        "img/window/pc/1.png",
        "img/window/pc/2.png",
        "img/window/pc/3.png",
        "img/window/pc/4.png",
        "img/window/pc/5.png",
        "img/window/pc/6.png",
        "img/window/pc/7.png",
        "img/window/pc/8.png",
        "img/window/pc/9.png"
    ];

    const mobileImagesRaw = [
         "img/window/mobile/1.png",
        "img/window/mobile/2.png",
        "img/window/mobile/3.png",
        "img/window/mobile/4.png",
        "img/window/mobile/5.png",
        "img/window/mobile/6.png",
        "img/window/mobile/7.png",
        "img/window/mobile/8.png",
        "img/window/mobile/9.png"
    ];


    // ===============================
// 画像をプリロードする関数
// ===============================
function preloadImages(imagePaths) {
    return Promise.all(
        imagePaths.map(src => {
            return new Promise(resolve => {
                const img = new Image();
                img.onload = () => resolve(src);      // ロード成功
                img.onerror = () => resolve(src);     // 失敗しても先に進む
                img.src = src;
            });
        })
    );
}
// 階層に応じて補正したパスを作成
const pcImages    = applyBaseToPaths(pcImagesRaw);
const mobileImages = applyBaseToPaths(mobileImagesRaw);
const topImage     = applyBaseToFile("img/rogo_side.svg");

const idleImages = isMobile() ? mobileImages : pcImages;

// 先にプリロード
preloadImages(idleImages).then(() => {
    enableIdleOverlay(idleImages, topImage, 15000);
});

//  clockElement.textContent = `〔${h}:${m}:${s}〕`;

function startClock(clockElement) {
    function update() {
        const now = new Date();
        // const h = String(now.getHours()).padStart(2,"0");
        // const m = String(now.getMinutes()).padStart(2,"0");
        const s = String(now.getSeconds()).padStart(2,"0");
        clockElement.textContent = `〔${s}〕`;
    }

    update();
    return setInterval(update, 1000);
}

// ===========================================
// ① overlay と画像フレームを JS で生成
// ===========================================
function createIdleOverlay(imagePaths, topImagePath) {
    const overlay = document.createElement("div");
    overlay.id = "idle-overlay";
    let overlaycss = "";
    if (isMobile()) {
        overlaycss = `
    position: fixed;
    top:50%;
    inset: 0;
    width: 100dvw;
      height: 100dvh;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    
    
  `;
    } else {
        overlaycss = `
    position: fixed;
    inset: 0;
    width: 100vw;
      height: 100vh;
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 999999;
    
    overflow: hidden;
  `;
    }

    overlay.style.cssText = overlaycss;

    const frameBox = document.createElement("div");
    frameBox.className = "frames";
    frameBox.style.cssText = `
    position: absolute;
    inset: 0;
  `;

    // ---- メイン画像（フィット表示） ----
    imagePaths.forEach(src => {
        const img = document.createElement("img");
        img.src = src;
        let imgcss = "";
        if (isMobile()) {
            imgcss = `
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 95dvw;
      height: 100dvh;
     
      transform: translate(-50%, -50%);
      image-rendering: pixelated;
      z-index: -1;
    `;
        } else {
            imgcss = `
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 102vw;
      height: 108vh;
     overflow: hidden;
     
      transform: translate(-50%, -50%);
      image-rendering: pixelated;
      z-index: -1;
    `;
        }

        img.style.cssText = imgcss;

        frameBox.appendChild(img);
    });

    overlay.appendChild(frameBox);

    // ---- 上に重ねる画像（ロゴ・模様など） ----
    if (topImagePath) {
        const topImg = document.createElement("img");
        topImg.src = topImagePath;
        let topImgCss = "";

        if (isMobile()) {
            topImgCss = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 20;  /* ← これが上のレイヤー */
      width: auto;
      max-width: 100dvw;
      max-height: 100dvh;
     padding-left: 3px;
  padding-right: 3px;
      object-fit: contain;
      pointer-events: none;  /* クリックを通す（任意） */
      
    `;
        } else {
            topImgCss = `
      position: absolute;
      
      z-index: 20;  /* ← これが上のレイヤー */
      width: auto;
      max-width: 72vw;
     
      object-fit: contain;
      pointer-events: none;  /* クリックを通す（任意） */
      overflow: hidden;
    `;}

    topImg.style.cssText = topImgCss;

    overlay.appendChild(topImg);
    }

       // ---- 時計の追加（左上表示）----
    const clock = document.createElement("div");
    clock.id = "idle-clock";
     let clockCss = "";

        if (isMobile()) {
            clockCss = `
            max-width: 100dvw;
      max-height: 100dvh;
    margin:36px auto auto auto;
    line-height:35px;
        font-size: 1em;
        font-family: monospace;
        color: #f4f4f4ff;
        z-index: 30;
        font-family: "IBM Plex Serif", "IBM Plex Sans JP", sans-serif;
        font-weight:var(--fontw4);
        font-style: italic;
        pointer-events: none;
        letter-spacing: 0.5rem;
        transform: scale(1, 0.85);
    `;
    } else {
             clockCss = `
        
        top:60%;
    margin:0px auto auto auto;
    line-height:40px;
        font-size: 1em;
        font-family: monospace;
        color: var(--color);
        z-index: 30;
        font-family: "IBM Plex Serif", "IBM Plex Sans JP", sans-serif;
        font-weight:var(--fontw4);
        font-style: italic;
        pointer-events: none;
        letter-spacing: 0.5rem;
        transform: scale(1, 0.85);
    `;}

    clock.style.cssText = clockCss
    overlay.appendChild(clock);

    document.body.appendChild(overlay);

    return {
        overlay,
        frames: [...frameBox.querySelectorAll("img")],
        clock
    };
    }



    // ===========================================
    // ② 画像ループ（往復）
    // ===========================================
    function startLoop(frames, interval = 1000) {
        let max = frames.length;
        let index = 0;
        let direction = 1;

        frames.forEach(f => f.classList.remove("active"));
        frames[0].style.display = "block";

        return setInterval(() => {
            index += direction;

            if (index >= max - 1) direction = -1;
            else if (index <= 0) direction = 1;

            frames.forEach(f => (f.style.display = "none"));
            frames[index].style.display = "block";

        }, interval);
    }


function enableIdleOverlay(imagePaths, topImagePath, idleTime = 1000) {
    let overlayInfo = null;
    let overlay = null;
    let frames = null;

    let idleTimer = null;
    let loopTimer = null;
    let clockTimer = null; 

    // ==============================
    // overlay を生成して idle ループ開始
    // ==============================
    function showOverlay() {
        overlayInfo = createIdleOverlay(imagePaths, topImagePath);
        overlay = overlayInfo.overlay;
        frames = overlayInfo.frames;
         clock = overlayInfo.clock;  

        document.body.appendChild(overlay);
        overlay.style.display = "flex";

        loopTimer = startLoop(frames, 1000);
        clockTimer = startClock(clock);
    }

    // ==============================
    // overlay を完全削除 + 復活予約
    // ==============================
    function resetIdleState() {
        // ① ゼロに戻す（remove）
        if (overlay && document.body.contains(overlay)) {
            overlay.remove();
        }

        // ② タイマー停止
        if (loopTimer) clearInterval(loopTimer);
        if (clockTimer) clearInterval(clockTimer);
        if (idleTimer) clearTimeout(idleTimer);

        // ③ idleTime 後に overlay を再生成
        idleTimer = setTimeout(() => {
            showOverlay();
        }, idleTime);
    }

    // ==============================
    // ④ ユーザー操作を検知したら resetIdleState()
    // ==============================
    ["mousemove", "mousedown","wheel", "scroll", "touchstart", "touchmove"].forEach(ev => {
        window.addEventListener(ev, resetIdleState, { passive: true });
    });

    // 初回起動
    resetIdleState();
}



   


//    "img/window/mobile/1.png",
//         "img/window/mobile/2.png",
//         "img/window/mobile/3.png",
//         "img/window/mobile/4.png",
//         "img/window/mobile/5.png",
//         "img/window/mobile/6.png",
//         "img/window/mobile/7.png",
//         "img/window/mobile/8.png",
//         "img/window/mobile/9.png"