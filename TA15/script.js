function addElementToList() {
    const ul = document.getElementById("list");
    const input = document.getElementById("input");
    const listElement = document.createElement("li");
    listElement.textContent = input.value;
    ul.appendChild(listElement);
    input.value = "";
}

function deleteLastElementList() {
    const ul = document.getElementById("list");
    ul.removeChild(ul.lastChild);
}

const addButton = document.getElementById("add");
addButton.addEventListener("click", addElementToList);
const removeButton = document.getElementById("delete");
removeButton.addEventListener("click", deleteLastElementList);