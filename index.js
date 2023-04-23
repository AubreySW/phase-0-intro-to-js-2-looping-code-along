
function writeCards(names, event) {
  let cards = [];

  for (let i = 0; i < names.length; i++) {
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    cards.push(message);
  }
  return cards;
}

names(["Charlie", "Samip", "Ali"], "birthday");

function countDown(number) {
  let i = number;
while (i >= 0) {
  console.log(i--);
  }
}

countDown(10)
