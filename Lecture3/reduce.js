const arrayOfNumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumlator, currentValue) => {
    return accumlator + currentValue;
});

console.log(sum); //10