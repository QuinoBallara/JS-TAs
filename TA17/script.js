const button = document.getElementById("button");
button.addEventListener("click", function () {
    const counter = document.getElementById("counter");
    counter.textContent = parseInt(counter.textContent) + 1;
})