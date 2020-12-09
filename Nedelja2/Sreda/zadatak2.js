// Направити променљиву која представља цену производа коју купац жели да купи
// Направити променљиву која представља количину новца коју купац има
// Ако купац нема довољно новца, исписати поруку: 
//"Немате довољно новца", а затим написати тренутно стање (остаје исто)
// Ако има довољно новца, исписати: 
//"Успешно сте купили производ", а затим исписати тренутно стање (сада измењено)

let cena = 200
let kolicinaNovca = 1000

if(kolicinaNovca < cena){
    console.log('Nemate dovoljno novca.', 'Trenutno stanje je', kolicinaNovca)
}
else{
    console.log('Uspesno ste kupili proizvod.', 'Trenutno stanje je', kolicinaNovca - cena)
}