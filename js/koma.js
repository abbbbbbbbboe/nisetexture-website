document.addEventListener("DOMContentLoaded", () => {
    adjustKomaBlocks()
  const configs = [
    {
      id: "komaimageContainer1",
      folder: "ni",
      mobileFolder: "mobile_ni",
      frames: 9,
      frameRatios: [15,12,10,9,8,9,10,12,15] 
    },
    {
      id: "komaimageContainer2",
      folder: "se",
      mobileFolder: "mobile_se",
      frames: 9,
      frameRatios: [15.5,12,10,8.5,8,8.5,10,12,15.5]
    },
    {
      id: "komaimageContainer3",
      folder: "te",
      mobileFolder: "mobile_te",
      frames: 9,
      frameRatios: [18,15,8,5,8,5,8,15,18]
    },
    {
      id: "komaimageContainer4",
      folder: "ku",
      mobileFolder: "mobile_ku",
      frames: 9,
      frameRatios: [14.5,12,10.5,9,8,9,10.5,12,14.5]
    },
    {
      id: "komaimageContainer5",
      folder: "su",
      mobileFolder: "mobile_su",
      frames: 9,
      frameRatios: [17,13,9,7,8,7,9,13,17]
    },
    {
      id: "komaimageContainer6",
      folder: "ti",
      mobileFolder: "mobile_ti",
      frames: 9,
      frameRatios: [16.5,11,10,8.5,8,8.5,10,11,16.5]
    },
    {
      id: "komaimageContainer7",
      folder: "ya",
      mobileFolder: "mobile_ya",
      frames: 9,
      frameRatios: [16,12,10,8,8,8,10,12,16]
    }
  ];
let totalImages = 0;   
let loadedImages = 0;  
const allFrames = {}; 

// まず総画像数を計算
configs.forEach(cfg => {
  totalImages += cfg.frames;
});

configs.forEach(cfg => {
  const container = document.getElementById(cfg.id);
  const frames = [];
  allFrames[cfg.id] = frames; 
  let currentIndex = 0;

  
  const folderToUse = isMobile() && cfg.mobileFolder ? cfg.mobileFolder : cfg.folder;
  const parentFolder = isMobile() ? "mobile_title_koma" : "title_koma";


  for (let i = 1; i <= cfg.frames; i++) {
    const img = new Image();
    img.src = `img/${parentFolder}/${folderToUse}/${i}.png`;
    img.classList.add("frame");

    img.onload = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        initAll(); 
      }
    };

    frames.push(img);
    container.appendChild(img);
  }
});

// --------------------------
// 全コンテナ一斉初期化
// --------------------------
function initAll() {
  configs.forEach(cfg => {
    const frames = allFrames[cfg.id];
    let currentIndex = 0;
    let pendingIndex = -1;

    
    frames[0].classList.add("active");

    
    if (isMobile()) {
      startMobileLoop(frames, 500);
      return;
    }

    
    const totalRatio = cfg.frameRatios.reduce((a, b) => a + b, 0);
    const normalizedRanges = [];
    let acc = 0;
    for (let r of cfg.frameRatios) {
      normalizedRanges.push([acc / totalRatio, (acc + r) / totalRatio]);
      acc += r;
    }

    
    window.addEventListener("mousemove", e => {
      const xRatio = e.clientX / window.innerWidth;
      let index = cfg.frames - 1;

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
  });
}


});


// ===============================
// モバイル専用：フレーム往復アニメーション
// ===============================
function startMobileLoop(frames, interval = 1000) {
  if (!frames || frames.length === 0) return;

  let max = frames.length; 
  let index = 0;
  let direction = 1; 

 
  frames.forEach(f => f.classList.remove("active"));
  frames[0].classList.add("active");

  setInterval(() => {
    
    index += direction;

    
    if (index >= max - 1) direction = -1;
    else if (index <= 0) direction = 1;

  
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

 
  let rawSize = (usableWidth - 30) / 4;

 
  let finalSize = Math.floor(rawSize / 40) * 40;
  if (finalSize < 40) finalSize = 40;

  komas.forEach(koma => {
    koma.style.width = `${finalSize}px`;
    koma.style.height = `${finalSize}px`;
    koma.style.display = "inline-block"; 
    koma.style.position = "relative";

    
    const img = koma.querySelector('img');
    if (img) {
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "cover"; 
      img.style.display = "block";
    }
  });
}


function updateAllFrameShadows(e) {
    if (isMobile()) return;

  const frames = document.querySelectorAll(".frame");
  if (!frames.length) return;

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  frames.forEach(frame => {
   
    const rect = frame.getBoundingClientRect();

  
    const boxCenterX = rect.left + rect.width / 2;
    const boxCenterY = rect.top + rect.height / 2;

   
    const offsetX = mouseX - boxCenterX;
    const offsetY = mouseY - boxCenterY;

  
    const baseOffsetX = 35;   
    const dynamicOffsetX = -offsetY * 0.02; 

    const shadowOffsetX = baseOffsetX + dynamicOffsetX;

   const baseOffsetY = 20;  
    const dynamicOffsetY = -offsetY * 0.03;  

    const shadowOffsetY = baseOffsetY + dynamicOffsetY;

    const distance = Math.sqrt(offsetX ** 2 + offsetY ** 2);
    const maxDistance = Math.max(window.innerWidth, window.innerHeight);

    const maxBlur = 20;
    const minBlur = 8;

    const maxOpacity = 0.5;
    const minOpacity = 0.3;

    const blur = Math.min(maxBlur, minBlur + (maxBlur - minBlur) * (distance / maxDistance));
    const opacity = Math.max(minOpacity, maxOpacity - (maxOpacity - minOpacity) * (distance / maxDistance));

    frame.style.filter = `
      drop-shadow(${shadowOffsetX}px ${shadowOffsetY}px ${blur}px rgba(51,51,51, ${opacity}))
    `;
  });
}

window.addEventListener("mousemove", updateAllFrameShadows);



