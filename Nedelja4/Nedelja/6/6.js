// На страници постоје 2 дугмета за наручивање (као на страници пицерије, ORDER) И постоје 2 дугмета за наручивање одмах

// Дугмићи за 'наручивање' повећавају бројач
// Дугмићи за 'наручивање одмах' ресетују бројач на нула и исписују додатну поруку (Порука у облику: Наручили сте [X] пица, [ danasnji datum i vreme ]) Напомена: X је бројач, проверити да ли је бројач 0, и ако јесте кликом на наручивање одмах избацује одговарајућу поруку за грешку

const message = document.querySelector('.message')
const btnOrder1 = document.querySelector('.order1')
const btnOrder2 = document.querySelector('.order2')
const btnOrderNow1 = document.querySelector('.order-now1')
const btnOrderNow2 = document.querySelector('.order-now2')
var count = 0
let newDate = new Date()
let date = `[${newDate.getFullYear()}-${newDate.getMonth()}-${newDate.getDate()}]`
let time = `[${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}]`


btnOrder1.addEventListener('click', () => {
    count++
    console.log(count)
})
btnOrder2.addEventListener('click', () => {
    count++
    console.log(count)
})
btnOrderNow1.addEventListener('click', () => {
    if(count == 0){
        message.textContent = `Nema porudzbina za sada!`
    }
    else if(count == 1){
        message.textContent = `Narucili ste 1 picu.\n ${date} \n ${time}`
        count = 0
    }
    else if(count > 1 && count <= 4){
        message.textContent = `Narucili ste ${count} pice.\n ${date} \n ${time}`
        count = 0
    }
    else{
        message.textContent = `Narucili ste ${count} pica.\n ${date} \n ${time}`
        count = 0
    }
})
btnOrderNow2.addEventListener('click', () => {
    if(count == 0){
        message.textContent = `Nema porudzbina za sada!`
    }
    else if(count == 1){
        message.textContent = `Narucili ste 1 picu.\n ${date} \n ${time}`
        count = 0
    }
    else if(count > 1 && count <= 4){
        message.textContent = `Narucili ste ${count} pice.\n ${date} \n ${time}`
        count = 0
    }
    else{
        message.textContent = `Narucili ste ${count} pica.\n ${date} \n ${time}`
        count = 0
    }
})
