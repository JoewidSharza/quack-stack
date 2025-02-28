document.getElementById("bottomnav").innerText = "whoops!";

const names = [
  "AJ Zimmerman",
  "Max Girasol",
  "Faiq Ahmad",
  "joewid Sharza",
  "CMoney",
  "DJ Chrispy",
  "Stephen Thomas",
  "Ani Undrakonda",
  "Anish Ivaturi",
  "Joshua St. Laurent",
  "Matt Cheng",
  "Timothy Germano",
  "Dev Patel",
  "Hilarion Wilkenson",
  "Lavanya Goel",
  "Robin Pan",
  "Henry Daley",
  "Tia Nguyen",
  "Ben Baiel",
  "weiting Huang",
  "Chris Park",
  "Kacey Simmons",
  "Nate Notermann",
];

const duckWins = {};
names.forEach((name) => {
  duckWins[name] = 0;
});

function getRandomName(namesArray) {
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * namesArray.length);
  // Select the name at the random index
  return namesArray[randomIndex];
}

function pickRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  const randomName = names[randomIndex];
  document.getElementById(
    "randomName"
  ).innerText = `Duck Winner: ${randomName}!!!`;
  updateDuckWins(randomName);
  displayDuckStats();
}

function updateDuckWins(duckName) {
  if (duckWins.hasOwnProperty(duckName)) {
    duckWins[duckName]++;
  }
}

function displayDuckStats() {
  const duckStatsElement = document.getElementById("duckStats");
  duckStatsElement.innerHTML = "";
  const entries = Object.entries(duckWins);
  for (let i = 0; i < entries.length; i += 3) {
    const row = document.createElement("tr");
    for (let j = 0; j < 3; j++) {
      if (i + j < entries.length) {
        const [duckName, wins] = entries[i + j];
        const nameCell = document.createElement("td");
        const winsCell = document.createElement("td");
        nameCell.innerText = duckName;
        winsCell.innerText = wins;
        row.appendChild(nameCell);
        row.appendChild(winsCell);
      } else {
        const emptyCell1 = document.createElement("td");
        const emptyCell2 = document.createElement("td");
        row.appendChild(emptyCell1);
        row.appendChild(emptyCell2);
      }
    }
    duckStatsElement.appendChild(row);
  }
}

// Initial display of stats
displayDuckStats();
