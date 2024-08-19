function changeText() {
    const p = document.getElementById("text")
    p.textContent = "Texto cambiado";
}

const button = document.getElementById("button");
button.addEventListener("click", changeText);


