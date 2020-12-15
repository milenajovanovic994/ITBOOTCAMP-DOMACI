// Написати функцију која за параметар прима број сати (0-24) и у зависности од доба 
// дана исписује поруке: Добро јутро , Добар дан или Добро вече.

// 1. nacin

{
    function dobaDana(sat) {
        if (sat < 0 || sat > 24)
            console.log('Pogresno ste uneli broj, broj mora biti od 0 do 24!')
        else if (sat >= 4 && sat < 12)
            console.log('Dobro jutro!')
        else if (sat >= 12 && sat < 20)
            console.log('Dobar dan!')
        else
            console.log('Dobro vece!')
    }

    dobaDana(3)
    dobaDana(21)
    dobaDana(0)
    dobaDana(24)
    dobaDana(11)
    dobaDana(16)
    dobaDana(12)
    dobaDana(4)
}

console.log('--------------------')

// 2. nacin

{
    function dobaDana(sat) {
        if (sat >= 4 && sat < 12)
            console.log('Dobro jutro!')
        else if (sat >= 12 && sat < 20)
            console.log('Dobar dan!')
        else if (sat >= 20 || sat < 4)
            console.log('Dobro vece!')
    }

    dobaDana(3)
    dobaDana(21)
    dobaDana(0)
    dobaDana(24)
    dobaDana(11)
    dobaDana(16)
    dobaDana(12)
    dobaDana(4)
}


