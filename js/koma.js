document.addEventListener("DOMContentLoaded", () => {
    adjustKomaBlocks()
  const configs = [
    {
      id: "komaimageContainer1",
      folder: "ni2",
      frames: 9,
      frameRatios: [15,12,10,9,8,9,10,12,15] // 横幅の割合
    },
    {
      id: "komaimageContainer2",
      folder: "se2",
      frames: 9,
      frameRatios: [15.5,12,10,8.5,8,8.5,10,12,15.5]
    },
    {
      id: "komaimageContainer3",
      folder: "te2",
      frames: 9,
      frameRatios: [18,15,8,5,8,5,8,15,18]
    },
    {
      id: "komaimageContainer4",
      folder: "ku2",
      frames: 9,
      frameRatios: [14.5,12,10.5,9,8,9,10.5,12,14.5]
    },
    {
      id: "komaimageContainer5",
      folder: "su2",
      frames: 9,
      frameRatios: [17,13,9,7,8,7,9,13,17]
    },
    {
      id: "komaimageContainer6",
      folder: "ti2",
      frames: 9,
      frameRatios: [16.5,11,10,8.5,8,8.5,10,11,16.5]
    },
    {
      id: "komaimageContainer7",
      folder: "ya2",
      frames: 9,
      frameRatios: [16,12,10,8,8,8,10,12,16]
    }
  ];

  configs.forEach(cfg => {
    const container = document.getElementById(cfg.id);
    const frames = [];
    let currentIndex = 0;
    let imagesLoaded = 0;

    // 画像プリロード
    for (let i = 1; i <= cfg.frames; i++) {
      const img = new Image();
      img.src = `img/${cfg.folder}/${i}.png`;
      img.classList.add("frame");
      img.onload = () => {
        imagesLoaded++;
        if (imagesLoaded === cfg.frames) init();
      };
      frames.push(img);
      container.appendChild(img);
    }

    // frames.reverse(); // 左端で最後のフレーム、右端で最初のフレーム表示

    function init() {
      frames[0].classList.add("active");
      let pendingIndex = -1;

        // -------------------------------
  // ★ モバイルなら自動ループに切り替え
  // -------------------------------
   if (isMobile()) {
    startMobileLoop(frames, 400); // 1秒ごと
    return; // ここでPC版の処理には進まない
  }

      // 区間を計算：frameRatiosを合計して0〜1に正規化
      const totalRatio = cfg.frameRatios.reduce((a, b) => a + b, 0);
      const normalizedRanges = [];
      let acc = 0;
      for (let r of cfg.frameRatios) {
        normalizedRanges.push([acc / totalRatio, (acc + r) / totalRatio]);
        acc += r;
      }

      window.addEventListener("mousemove", e => {
        const xRatio = e.clientX / window.innerWidth;

        // xRatioがどのフレームの範囲に入るか判定
        let index = cfg.frames - 1; // デフォルトは最後
        for (let i = 0; i < normalizedRanges.length; i++) {
          const [start, end] = normalizedRanges[i];
          if (xRatio >= start && xRatio <= end) {
            index = i;
            break;
          }
        }

        if (index !== currentIndex && index !== pendingIndex) {
          pendingIndex = index;
          requestAnimationFrame(() => {
            frames[currentIndex].classList.remove("active");
            frames[index].classList.add("active");
            currentIndex = index;
            pendingIndex = -1;
          });
        }
      }, { passive: true });
    }
  });
});


// ===============================
// モバイル専用：フレーム往復アニメーション
// 1-2-3-4-5-6-7-8-9-8-7-6-5-4-3-2-1
// ===============================
function startMobileLoop(frames, interval = 1000) {
  if (!frames || frames.length === 0) return;

  let max = frames.length; // 9
  let index = 0;
  let direction = 1; // 1なら進む、-1なら戻る

  // 最初の画像を表示
  frames.forEach(f => f.classList.remove("active"));
  frames[0].classList.add("active");

  setInterval(() => {
    // 次の index を決める
    index += direction;

    // 端に着いたら方向を反転
    if (index >= max - 1) direction = -1;
    else if (index <= 0) direction = 1;

    // 表示更新
    frames.forEach(f => f.classList.remove("active"));
    frames[index].classList.add("active");

  }, interval);
}


function adjustKomaBlocks() {
    if (isMobile()) return;
  const komas = imageContainer.querySelectorAll('.koma');
  if (komas.length === 0) return;

  const styles = getComputedStyle(imageContainer);
  const paddingLeft = parseFloat(styles.paddingLeft) || 0;
  const paddingRight = parseFloat(styles.paddingRight) || 0;
  const usableWidth = imageContainer.clientWidth - paddingLeft - paddingRight;

  // 横4つに並べるための最大サイズ
  let rawSize = (usableWidth - 30) / 4;

  // 40px の倍数に丸める
  let finalSize = Math.floor(rawSize / 40) * 40;
  if (finalSize < 40) finalSize = 40;

  komas.forEach(koma => {
    koma.style.width = `${finalSize}px`;
    koma.style.height = `${finalSize}px`;
    koma.style.display = "inline-block"; // 並ぶ
    koma.style.position = "relative";

    // 中の画像をフィットさせる
    const img = koma.querySelector('img');
    if (img) {
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover"; // 正方形に収まる
      img.style.display = "block";
    }
  });
}


function updateAllFrameShadows(e) {
    if (isMobile()) return;

  const frames = document.querySelectorAll(".frame");
  if (!frames.length) return;

  // カーソル位置（画面全体）
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  frames.forEach(frame => {
   
    const rect = frame.getBoundingClientRect();

    // 要素の中心位置
    const boxCenterX = rect.left + rect.width / 2;
    const boxCenterY = rect.top + rect.height / 2;

    // 中心からカーソルまでの距離
    const offsetX = mouseX - boxCenterX;
    const offsetY = mouseY - boxCenterY;

    // ⭐ 横は固定（動かさない → 0px）
    // const shadowOffsetX = 30;
    const baseOffsetX = 35;    // ← 最初から 40px
    const dynamicOffsetX = -offsetY * 0.02;  // ← カーソル距離による変化

    const shadowOffsetX = baseOffsetX + dynamicOffsetX;

   const baseOffsetY = 20;    // ← 最初から 40px
    const dynamicOffsetY = -offsetY * 0.03;  // ← カーソル距離による変化

    const shadowOffsetY = baseOffsetY + dynamicOffsetY;

    // 画面全体の距離を使って blur & opacity を計算
    const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);
    const maxDistance = Math.max(window.innerWidth, window.innerHeight);

    const maxBlur = 20;
    const minBlur = 8;

    const maxOpacity = 0.5;
    const minOpacity = 0.3;

    const blur = Math.min(maxBlur, minBlur + (maxBlur - minBlur) * (distance / maxDistance));
    const opacity = Math.max(minOpacity, maxOpacity - (maxOpacity - minOpacity) * (distance / maxDistance));

    // drop-shadow を適用（CSS filter）
    frame.style.filter = `
      drop-shadow(${shadowOffsetX}px ${shadowOffsetY}px ${blur}px rgba(51,51,51, ${opacity}))
    `;
  });
}

// 画面全体のカーソル移動を監視
window.addEventListener("mousemove", updateAllFrameShadows);



