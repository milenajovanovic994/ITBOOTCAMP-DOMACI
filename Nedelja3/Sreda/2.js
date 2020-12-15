// Написати функцију која израчунава цену пице по квадратном центиметру 
// (параметри функције су полупречник у цм, и цена пице)

function cenaPoCmKv(r, cenaPice) {
    if (r >= 0 && cenaPice >= 0)
        return cenaPice / (r ** 2 * Math.PI)
}

let test = cenaPoCmKv(5, 1500)
console.log(test)
let test2 = cenaPoCmKv(-10, -1500)
console.log(test2)
let test3 = cenaPoCmKv(-5, 3000)
console.log(test3)
let test4 = cenaPoCmKv(28, -2500)
console.log(test4)

