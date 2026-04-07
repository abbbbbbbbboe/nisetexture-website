// const PASSWORD = "2026";
// let input;

// do {
//   input = prompt("Enter password")
// } while(input !== PASSWORD);



const PASSWORD = "0328";
const MAX_ATTEMPTS = 10;

let input;

for (let i = 1; i <= MAX_ATTEMPTS; i++) {

  input = prompt(`Enter password (${i}/${MAX_ATTEMPTS})`);

  // キャンセルした場合
  if (input === null) {
    break;
  }

  // 正解なら終了
  if (input === PASSWORD) {
    break;
  }

  // 最後の試行で失敗した場合
  if (i === MAX_ATTEMPTS) {
    document.body.innerHTML = `
      <div style="
        display:flex;
        height:100vh;
        align-items:center;
        justify-content:center;
        font-family:sans-serif;
      ">
        <div>
          <h2>Access denied</h2>
          <p>Too many failed attempts.</p>
        </div>
      </div>
    `;
  }
}


