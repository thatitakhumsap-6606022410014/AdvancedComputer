let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 3, 'Apple'];

function findApple(arrays) {
    arrays.forEach((array, index) => {
        array.forEach(value => {
            if (value === 'Apple') {
                console.log(`'Apple' found in array values${index + 1}`);
            }
        });
    });
}

let allArrays = [values1, values2, values3];
findApple(allArrays);
