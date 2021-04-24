let grid = document.querySelector(".grid");
let restart = document.querySelector("#restart");
let colors = ["orange", "blue", "purple", "black", "#EA2929"];
let score_card = document.querySelector("#score");
let timer = document.querySelector(".timer");
restart.addEventListener("click", () => {
  let score = 0;
  let time = 20;

  timer.innerHTML = 20;
  setInterval(() => {
    if (time > -1) {
      time--;
      timer.innerHTML = time == -1 ? 0 : time;
    }
  }, 1000);
  score_card.innerHTML = "0";
  grid.innerHTML = "";
  for (let i = 0; i < 110; i++) {
    let color = colors[Math.floor(Math.random() * colors.length)];
    grid.innerHTML += `
            <div style='background-color:${color}; border:2px solid yellow' class='item'></div>

    `;
  }
  let divs = Array.from(document.querySelectorAll(".item"));

  divs.forEach((item) => {
    item.addEventListener("click", (event) => {
      let color1 = event.target.previousElementSibling.style.backgroundColor;
      let color2 = event.target.style.backgroundColor;
      let color3 = event.target.nextElementSibling.style.backgroundColor;
      if (time > 0) {
        if (color1 != "white" && color2 != "white" && color3 != "white") {
          if ((color1 == color2) == color3) {
            score += 2;
            score_card.innerHTML = `${score}`;
          } else if (color1 == color2 || color2 == color3) {
            score_card.innerHTML = `${++score}`;
            if (color1 == color2) {
              event.target.previousElementSibling.style.backgroundColor =
                "white";
              event.target.style.backgroundColor = "white";
            }
            if (color2 == color3) {
              event.target.style.backgroundColor = "white";
              event.target.nextElementSibling.style.backgroundColor = "white";
            }
          }
        }
      }
    });
  });
});
