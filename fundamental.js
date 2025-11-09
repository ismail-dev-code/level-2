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

// console.log(bestScorer);

const postArray = [
  { id: "p-10", title: "intro to sql", author: "abul", serial: 1 },
  { id: "p-11", title: "intro to js", author: "jamal", serial: 2 },
  { id: "p-12", title: "intro to python", author: "babul", serial: 3 },
];

const lookupTable = postArray.reduce((table, post) => {
  table[post.id] = post;
  return table;
});
// console.log(lookupTable);

const postArray = [
  {
    id: "p-11",
    title: "intro to sql",
    author: "abul",
    serial: 1,
    id: "p-12",
    title: "intro to js",
    author: "farul",
    serial: 2,
    id: "p-13",
    title: "intro to python",
    author: "binod",
    serial: 3,
    id: "p-14",
    title: "intro to js",
    author: "zakir",
    serial: 4,
    id: "p-15",
    title: "intro to htmll",
    author: "babul",
    serial: 5,
  },
];
const lookupTable2 = postArray.reduce((table, post));

console.log(postArray);
