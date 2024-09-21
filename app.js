let main = document.querySelectorAll(".main");
let button = document.querySelector(".button"); // Using querySelector for a single button
function ghumao() {
  let random = Math.ceil(Math.random() * 6);
  switch (random) {
    case 1:
      main[0].innerHTML = `
        <div class="dice1 dice">
          <div class="round d1"></div>
        </div>`;
      break;
    case 2:
      main[0].innerHTML = `
        <div class="dice2 dice">
          <div class="round d1"></div>
          <div class="round d2"></div>
        </div>`;
      break;
    case 3:
      main[0].innerHTML = `
        <div class="dice3 dice">
          <div class="round d1"></div>
          <div class="round d2"></div>
          <div class="round d3"></div>
        </div>`;
      break;
    case 4:
      main[0].innerHTML = `
        <div class="dice4 dice">
          <div class="first-line">
            <div class="round"></div>
            <div class="round"></div>
          </div>
          <div class="last-line">
            <div class="round"></div>
            <div class="round"></div>
          </div>
        </div>`;
      break;
    case 5:
      main[0].innerHTML = `
        <div class="dice5 dice">
          <div class="first-line">
            <div class="round"></div>
            <div class="round"></div>
          </div>
          <div class="middle">
            <div class="round"></div>
          </div>
          <div class="last-line">
            <div class="round"></div>
            <div class="round"></div>
          </div>
        </div>`;
      break;
    case 6:
      main[0].innerHTML = `
        <div class="dice6 dice">
          <div class="first-line">
            <div class="round"></div>
            <div class="round"></div>
            <div class="round"></div>
          </div>
          <div class="last-line">
            <div class="round"></div>
            <div class="round"></div>
            <div class="round"></div>
          </div>
        </div>`;
      break;
  }
}
button.addEventListener("click", ghumao);