// Сачувати у променљиве цену и пречник пице
// Израчунати која је цена пице по цм² (пазити на то да се површина рачуна са полупречником)
// Исписати тај резултат у конзолу

    let cena = 2000
    let precnik = 30 
    let povrsina = Math.pow((precnik / 2), 2) * Math.PI  
    let cenaPoCmKv = cena / povrsina
    console.log('Cena pice po cm² je', cenaPoCmKv, 'dinara.')