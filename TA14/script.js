function addElementToList() {
    const ul = document.getElementById("list");
    const input = document.getElementById("input");
    const listElement = document.createElement("li");
    listElement.textContent = input.value;
    ul.appendChild(listElement);
    input.value = "";
}

const button = document.getElementById("button");
button.addEventListener("click", addElementToList);