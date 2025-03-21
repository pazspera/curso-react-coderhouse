// escribir una función que encuentre el número más grande de un array

const findMaxNumber = (array) => {
  let tempMax = null;

  array.forEach(element => {
    if (element > tempMax) {
      tempMax = element;
    }
  });

  return tempMax;
}

console.log(findMaxNumber([2,405,3,88,0,-104,12,1]));
