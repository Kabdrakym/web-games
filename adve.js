const characters = ["рыцарь", "маг", "вор", "паладин", "друид"];
const locations = ["тёмный лес", "заброшенный замок", "подводное царство", "вулканическая пещера", "летающий остров"];
const villains = ["дракон", "колдун", "гоблин", "нежить", "гигантский паук"];

const adventureText = document.getElementById("adventureText");
const generateBtn = document.getElementById("generateBtn");
const historyList = document.getElementById("historyList");

function loadHistory() {
    const saved = JSON.parse(localStorage.getItem("adventureHistory")) || [];
    saved.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        historyList.appendChild(li);
    });
}

function saveAdventure(text) {
    let history = JSON.parse(localStorage.getItem("adventureHistory")) || [];
    history.push(text);
    localStorage.setItem("adventureHistory", JSON.stringify(history));
}

function generateAdventure() {
    const character = characters[Math.floor(Math.random() * characters.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const villain = villains[Math.floor(Math.random() * villains.length)];

    const result = `Ваш персонаж - ${character} находится в ${location} и сражается с ${villain}.`;
    adventureText.textContent = result;

    const li = document.createElement("li");
    li.textContent = result;
    historyList.appendChild(li);
    saveAdventure(result);
}

generateBtn.addEventListener("click", generateAdventure);

loadHistory();