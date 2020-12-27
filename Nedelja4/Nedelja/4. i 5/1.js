// 4. Направити функцију која прима низ покемона, пореди покемоне по јачини и враћа као победника оног који има највећу јачину напада.

let bulbasaur = {
    name: 'Bulbasaur',
    id: 001,
    type: 'grass',
    abilities: ['overgrow', 'chlorophyll'],
    stats: {
        hp: 45,
        attack: 49,
        defense: 49,
        speed: 45
    },
    evolution: {
        evChart: ['Bulbasaur', 'Ivysaur', 'Venusaur']
    }
}
let charizard = {
    name: 'Charizard',
    id: 006,
    type: 'fire',
    abilities: ['blaze', 'solar power'],
    stats: {
        hp: 78,
        attack: 84,
        defense: 78,
        speed: 100
    },
    evolution: {
        evChart: ['Charmander', 'Charmeleon', 'Charizard']
    }
}
let golbat = {
    name: 'Golbat',
    id: 042,
    type: 'poison',
    abilities: ['inner focus', 'infiltrator'],
    stats: {
        hp: 75,
        attack: 80,
        defense: 70,
        speed: 90
    },
    evolution: {
        evChart: ['Zubat', 'Golbat', 'Crobat']
    }
}
let vulpix = {
    name: 'Vulpix',
    id: 037,
    type: 'fire',
    abilities: ['flash fire', 'drought'],
    stats: {
        hp: 38,
        attack: 41,
        defense: 40,
        speed: 65
    },
    evolution: {
        method: 'fire stone',
        evChart: ['Vulpix', 'Ninetales']
    }
}
let psyduck = {
    name: 'Psyduck',
    id: 054,
    type: 'water',
    abilities: ['damp', 'swift swim'],
    stats: {
        hp: 50,
        attack: 52,
        defense: 48,
        speed: 55
    },
    evolution: {
        evChart: ['Psyduck', 'Golduck']
    }
}
let golem = {
    name: 'Golem',
    id: 076,
    type: 'rock',
    abilities: ['rock head', 'sturdy'],
    stats: {
        hp: 80,
        attack: 120,
        defense: 130,
        speed: 45
    },
    evolution: {
        method: 'rock',
        evChart: ['Geodude', 'Graveler', 'Golem']
    }
}
let gastly = {
    name: 'Gastly',
    id: 092,
    type: 'ghost',
    abilities: ['levitate'],
    stats: {
        hp: 30,
        attack: 35,
        defense: 30,
        speed: 80
    },
    evolution: {
        evChart: ['Gastly', 'Haunter', 'Gengar']
    }
}
let weezing = {
    name: 'Weezing',
    id: 110,
    type: 'poison',
    abilities: ['levitate', 'neutralizing gas'],
    stats: {
        hp: 65,
        attack: 90,
        defense: 120,
        speed: 60
    },
    evolution: {
        evChart: ['Koffing', 'Weezing']
    }
}
let snorlax = {
    name: 'Snorlax',
    id: 143,
    type: 'normal',
    abilities: ['immunity', 'thick fat'],
    stats: {
        hp: 160,
        attack: 110,
        defense: 65,
        speed: 30
    },
    evolution: {
        method: 'via high Friendship',
        evChart: ['Munchlax', 'Snorlax']
    }
}

let pokemon = [bulbasaur, charizard, golbat, vulpix, psyduck, golem, gastly, weezing, snorlax]

const theStrongest = (arr) => {
    arr.sort(function (a, b) {
        if (a.stats.attack < b.stats.attack) {
            return 1
        }
        else {
            return -1
        }
    })
    return arr[0]
}

console.log(theStrongest(pokemon))

// 5. За дати html направити скрипту која:

// <div class="wrapper">
// 	<button id="prikaz">PRIKAZI POKEMONE</button>
// 	<button id="pobednik">PRIKAZI NAJJACEG POKEMONA</button>
// </div>
// *На клик на дугме прикажи покемоне приказује све покемоне из низа у формату :

//     <div>
//         <p>Opis pokemona</p>
//         <img src="slika odgovarajućeg pokemona">
//     </div>
// *На клик на дугме прикажи најјачег покемона приказује покемона који има најјачи напад (користити већ написану функцију иѕ 4. задатка) по истом формату.

const wrapper = document.querySelector('.wrapper')
const btnShow = document.querySelector('#prikaz')
const btnWinner = document.querySelector('#pobednik')
const itemWrapper = document.createElement('div')
itemWrapper.className = 'item-wrapper'
wrapper.appendChild(itemWrapper)

const addToDOM = (item) => {
    const divItem = document.createElement('div')
    divItem.className = 'div-item'
    const description = document.createElement('p')
    description.className = 'desc'
    description.textContent = `${item.name} #${item.id}\n Type:${item.type}\n Abilities:${item.abilities}\n Stats:\n hp:${item.stats.hp}\n attack:${item.stats.attack}\n defence:${item.stats.defence}\n speed:${item.stats.speed}`
    const image = document.createElement('img')
    image.className = 'img1'
    image.src = `img/${item.name}.png`



    divItem.append(description, image)
    itemWrapper.appendChild(divItem)
}

btnShow.addEventListener('click', () => {
    pokemon.forEach(poke => {
        addToDOM(poke)
    })
})

btnWinner.addEventListener('click', () => {
    itemWrapper.textContent = ''
    addToDOM(theStrongest(pokemon))
})