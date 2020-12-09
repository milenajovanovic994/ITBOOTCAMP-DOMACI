// Исписати првих 1000 бројева дељивих са 5

    let n = 0
    
     for(i = 1;; i++){
        if(i % 5 == 0){ 
        console.log(i)
         n++
        }
        if(n == 1000){
             break
        }
     }
     
