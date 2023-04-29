
const letters = document.getElementById("alphabets");
const animalCategory = document.getElementById("animals-category");
const countriesCategory = document.getElementById("countries-category");
const fruitCategory = document.getElementById("fruits-category");
const resetButton = document.getElementById("reset-game");
const hint = document.getElementById("hint");

const selectCategory = categories.map((category) =>
 {
    animalCategory = category==='animals'
    countriesCategory = category==='countries'
    fruitCategory = category==='fruits'
 }
)

let categories = {
  fruits: [
    "Apple",
    "Blueberry",
    "Mandarin",
    "Pineapple",
    "Pomegranate",
    "Watermelon",
  ],
  animals: ["Hedgehog", "Rhinoceros", "Squirrel", "Panther", "Walrus", "Zebra"],
  countries: [
    "India",
    "Hungary",
    "Kyrgyzstan",
    "Switzerland",
    "Zimbabwe",
    "Dominica",
  ],
};
const lives = 10;

function resetGame() {}
