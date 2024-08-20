const people = [
    `Lamine Yamal`,
    `Alejandro Balde`,
    `Pau Cubarsi`,
    `Ronald Araujo`,
    `Andreas Christensen`,
    `Jules Kounde`,
    `Pedri`,
    `Gavi`,
    `Frenkie de Jong`,
    `Robert Lewandowski`,
    `Raphinha`,
    `Dani Olmo`,
    `Vitor Roque`,
    `Ansu Fati`,
    `Fermin Lopez`,
    `Ilkay Gundogan`,
    `Marc-Andre ter Stegen`,
    `Eric Garcia`
]
const list = document.getElementById("list");
for (let i = 0; i < people.length; i++) {
    const elem = document.createElement("li");
    elem.textContent = people[i];
    list.appendChild(elem);
}

const input = document.getElementById("input");
input.addEventListener("input", search);

function search() {
    const searchText = document.getElementById("input").value;
    for (const child of list.children) {
        if (!child.textContent.startsWith(searchText)) {
            child.style.display = "none";
        } else {
            child.style.display = "list-item";
        }
    }
}
