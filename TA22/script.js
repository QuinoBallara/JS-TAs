const width = document.getElementById("width");
const height = document.getElementById("height");

width.textContent = window.innerWidth;
height.textContent = window.innerHeight;

addEventListener("resize", function () {
    width.textContent = this.window.innerWidth;
    height.textContent = this.window.innerHeight;
})