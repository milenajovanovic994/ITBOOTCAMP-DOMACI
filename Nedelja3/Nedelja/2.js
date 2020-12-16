// Написати функцију која враћа колико пице вам је довољно за доживотно снабдевање
// Уноси се колико пице поједете на месечном нивоу, и колико година имате (Рачуна се да је довољно достављати до стоте године)

// function lifeSupply(numPerMonth,age){
//     ...
// }

// lifeSupply(10,26) // Враћа 8880
// console.log(lifeSupply(10,26)) // Исписује 8880

function lifeSupply(numPerMonth, age) {
    return (100 - age) * 12 * numPerMonth
}

let test = lifeSupply(10, 26)
console.log(test)