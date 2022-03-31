const a = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "f",
];
const divArray = (array, divisor) => {
  const div = Math.trunc(array.length / divisor);
  let posicao = 0;
  const newArray = [];
  for (var i = 0; i < divisor; i++) {
    newArray.push(array.slice(posicao, posicao + div));
    posicao = posicao + div;
    if (array.length > posicao && i === divisor - 1)
      // pegar o resto da divisão
      newArray.push(array.slice(posicao, array.length));
  }
  return newArray;
};

console.log(divArray(a, 3));
