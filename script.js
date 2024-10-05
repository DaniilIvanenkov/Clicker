const counterEl = document.querySelector(".playarea__clicker")
const countereieiei = document.querySelector(".counter__current")
const powerup_1 = document.querySelector("#powerup-1");
let counter = 0;
let clickvalue=1;
counterEl.addEventListener("click", () => {
    counter +=clickvalue;

    countereieiei.innerHTML = counter;
})

powerup_1.addEventListener("click", () => {
    clickvalue += 1;
})

setInterval(()=>{
    localStorage.setItem("score", counter)
}, 1000)
