// some

// const numbers = [1, 9, 3, 7, 5];
// const hasEvenNumber = numbers.some((number) => number % 2 === 0);
// console.log(hasEvenNumber);

// const currentUserRoles = ["user", "editor", "admin"];
// const featuresAccessRoles = ["admin", "manager"];

// const canAccessFeature = currentUserRoles.some((role) => featuresAccessRoles.includes(role));
// console.log(canAccessFeature);



// Array from()

// const arr = Array.from([1, 2, 3, 4], (value, i) => value * value);
// console.log(arr);


const range = (start, stop, step) => Array.from({ length: Math.ceil((stop - start) / step) }, (_, i) => start + i * step);

console.log(range(1, 11, 1));
