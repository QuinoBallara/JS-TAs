const input = document.getElementById("input");
input.addEventListener("focus", function () {
    input.style.borderColor = "black";
    input.style.outline = 0;
})
input.addEventListener("blur", function () {
    input.style.borderColor = "lightgray"
})
input.style.borderColor = "lightgray"