const onekData = [
  {
    name: "abul",
    age: 2,
    rating: 4,
    language: "english",
  },
  {
    name: "kamal",
    age: 4,
    rating: 2,
    language: "bengali",
  },
  {
    name: "jamal",
    age: 7,
    rating: 4,
    language: "hindi",
  },
];

// console.log(onekData[2].age);

const numbers = [23, 3, 53, 5, 5];
const fruits = ["apple, Banana, orange, Tomato"];
fruits.sort();
// console.log(fruits);

const hasEvenNumbers = numbers.some((number) => number % 2 == 0);
// console.log(hasEvenNumbers);

const players = [
  { name: "jamal bhuiyan", score: 89 },
  { name: "kamal bhuiyan", score: 70 },
  { name: "abul bhuiyan", score: 50 },
];

const bestScorer = players.reduce((bestPlayer, player) => {
  if (bestPlayer.score > player.score) {
    return bestPlayer;
  }
  return player;
}, players[0]);

console.log(bestScorer);
