const yearSpan = document.getElementById('currentyear');
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = `Last Modified: ${document.lastModified}`;



const games = [
    { id: "g01", name: "Elden Ring" },
    { id: "g02", name: "Stardew Valley" },
    { id: "g03", name: "Fortnite" },
    { id: "g04", name: "Minecraft" },
    { id: "g05", name: "Baldur's Gate 3" },
    { id: "g06", name: "Legend of Zelda: Tears of the Kingdom" }
];

const gameSelect = document.getElementById('game');
games.forEach(game => {
    const option = document.createElement('option');
    option.value = game.name;
    option.textContent = game.name;
    gameSelect.appendChild(option);
});

document.getElementById('lastModified').textContent = document.lastModified;