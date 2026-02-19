const PASSWORD = "nisete_2026";

let input = prompt("Enter password");

if (input !== PASSWORD) {
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
      </div>
    </div>
  `;
}