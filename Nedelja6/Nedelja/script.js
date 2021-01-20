// ## Prodavnica

// 1. Korisnik unosi username i password i na klik Login dugmeta se kreira objekat klase Kupac.
// Klasa kupac sadrzi ime ,sifru i korpu .
// Div korpa se prikazuje tek kada se korisnik ulogovao.

// 2. Na stranici su sve vreme izlistani svi dostupni proizvodi iz niza proizvoda kreiranih klasom Proizvod

// jedan proizvod treba da sadrzi naziv , cenu , dostupnu kolicinu 

// proizvod moze biti prehrambeni ili bela tehnika

// ako je bela tehnika ima i garanciju

// ako je prehrambeni ima rok trajanja

// 3. Korisnik moze da doda proizvod u korpu , ako unese kolicinu manju od dostupne kolicine ispisati poruku o gresci 
// Proizvod iz korpe moze da se obrise klikom na dugme Obrisi iz korpe


// 4. Ako je korisnik admin moze da doda nov proizvod


const forma = document.querySelector('#forma')
const inputUsername = document.querySelector('#username')
const inputPassword = document.querySelector('#password')
const korpaKupca = document.querySelector('.korpa')
const divPrehrambeni = document.querySelector('.proizvodi-p')
const divTehnika = document.querySelector('.proizvodi-t')


class Kupac {
    username
    password
    korpa
    constructor(username, password) {
        this.username = username
        this.password = password
        this.korpa = []
    }
}


class Proizvod {
    naziv
    cena
    dostupno
    constructor(naziv, cena, dostupno) {
        this.naziv = naziv
        this.cena = cena
        this.dostupno = dostupno
    }
    add(item, arr) {
        arr.push(item)
    }
    delete(item, arr) {
        let index = arr.indexOf(item)
        arr.splice(index, 1)
    }
}

class PrehrambeniP extends Proizvod {
    rokTrajanja
    constructor(naziv, cena, dostupno, rokTrajanja) {
        super(naziv, cena, dostupno)
        this.rokTrajanja = rokTrajanja
    }
}

class TehnikaP extends Proizvod {
    garancija
    constructor(naziv, cena, dostupno, garancija) {
        super(naziv, cena, dostupno)
        this.garancija = garancija
    }
}

let registrovaniKupci = [new Kupac('Milena', '12345'), new Kupac('Ana', '5678'), new Kupac('Marko', '2468'), new Kupac('Tijana', '13579'), new Kupac('Gaga', '3333')]

let tehnikaProizvodi = [new TehnikaP('Sporet', '30000', '10', '5'), new TehnikaP('Frizider', '20000', '20', '6'), new TehnikaP('Masina za pranje sudova', '60000', '7', '3'), new TehnikaP('Masina za pranje vesa', '55000', '50', '3'), new TehnikaP('Mikser', '8000', '60', '5'), new TehnikaP('Usisivac', '12000', '23', '7')]

let prehrambeniProizvodi = [new PrehrambeniP('Mleko', '100', '50', '[25.02.2021]'), new PrehrambeniP('Sir', '80', '20', '[15.03.2021]'), new PrehrambeniP('Jogurt', '120', '35', '[15.02.2021]'), new PrehrambeniP('Cokolada sa lesnikom', '200', '15', '[18.07.2021]'), new PrehrambeniP('Sok od pomorandze', '140', '22', '[21.04.2021]'), new PrehrambeniP('Secer', '90', '60', '[03.12.2021]')]

let niz = []

const isValid = (kupac) => {
    return registrovaniKupci.some(k => k.username == kupac.username && k.password == kupac.password)
}

forma.addEventListener('submit', (e) => {
    e.preventDefault()

    let kupac1 = new Kupac(inputUsername.value, inputPassword.value)

    if (isValid(kupac1)) {
        let divKorpa = document.createElement('div')
        let h3 = document.createElement('h3')
        h3.textContent = `Vasa korpa: ${kupac1.username}`

        divKorpa.append(h3)
        korpaKupca.append(divKorpa)
    } else {
        window.alert('Pogresan e-mail ili password!')
    }

    kupac1.korpa = niz
    console.log(kupac1)

    inputUsername.value = ''
    inputPassword.value = ''

})

const addToDOM = (item) => {
    const divProizvod1 = document.createElement('div')
    const pNaziv = document.createElement('p')
    pNaziv.textContent = `Naziv: ${item.naziv}`
    const pCena = document.createElement('p')
    pCena.textContent = `Cena: ${item.cena} dinara`
    const divProizvod2 = document.createElement('div')
    const pDostupno = document.createElement('p')
    pDostupno.textContent = `Dostupno: ${item.dostupno} komada`

    const divInput = document.createElement('div')
    const input = document.createElement('input')
    input.classList.add('input-kolicina')
    input.type = 'number'
    const btnDodaj = document.createElement('button')
    btnDodaj.textContent = 'Dodaj u korpu'

    let trenutno = Number(item.dostupno)

    btnDodaj.addEventListener('click', () => {


        if (Number(trenutno) >= Number(input.value)) {
            item.add(item, niz)
            console.log(niz)

            const divProizvod1Copy = document.createElement('div')
            const pNazivCopy = document.createElement('p')
            pNazivCopy.textContent = `Naziv: ${item.naziv}`
            const pCenaCopy = document.createElement('p')
            pCenaCopy.textContent = `Cena: ${Number(item.cena) * Number(input.value)} dinara`


            const pKolicina = document.createElement('p')
            pKolicina.textContent = `Kolicina: ${input.value}`

            const btnDel = document.createElement('button')
            btnDel.textContent = 'Obrisi iz korpe'

            btnDel.addEventListener('click', () => {
                divProizvod1Copy.remove()
                btnDel.remove()
                item.delete(item, niz)
                console.log(niz)
            })
            divProizvod1Copy.append(pNazivCopy, pCenaCopy, pKolicina)
            korpaKupca.append(divProizvod1Copy, btnDel)



            pDostupno.textContent = `Dostupno: ${trenutno - Number(input.value)} komada`

            trenutno -= Number(input.value)


        } else {
            window.alert('Nema dovoljno na stanju!')
        }

        input.value = ''
    })

    if (item.hasOwnProperty('rokTrajanja')) {
        const pRok = document.createElement('p')
        pRok.textContent = `Rok trajanja: ${item.rokTrajanja}`

        divProizvod1.append(pNaziv, pCena)
        divProizvod2.append(pDostupno, pRok)
        divInput.append(input, btnDodaj)
        divPrehrambeni.append(divProizvod1, divProizvod2, divInput)
    } else {
        const pGarancija = document.createElement('p')
        pGarancija.textContent = `Garancija: ${item.garancija} godina`

        divProizvod1.append(pNaziv, pCena)
        divProizvod2.append(pDostupno, pGarancija)
        divInput.append(input, btnDodaj)
        divTehnika.append(divProizvod1, divProizvod2, divInput)
    }
}

prehrambeniProizvodi.forEach(proizvod => {
    addToDOM(proizvod)
})

tehnikaProizvodi.forEach(proizvod => {
    addToDOM(proizvod)
})