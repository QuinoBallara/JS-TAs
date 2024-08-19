function changeVisibility() {
    const p = document.getElementById("text");
    if (p.style.display === "none") {
        p.style.display = "block";
    } else {
        p.style.display = "none"
    }
}

const button = document.getElementById("button");
button.addEventListener("click", changeVisibility);