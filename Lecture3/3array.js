let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 3, 'Apple'];

// Function to find common elements in multiple arrays
function findCommonElements(arrays) {
    let commonElements = arrays[0];

    for (let i = 1; i < arrays.length; i++) {
        commonElements = commonElements.filter(element => arrays[i].includes(element));
    }

    return commonElements;
}

let commonValues = findCommonElements([values1, values2, values3]);

console.log("Common values:", commonValues);
