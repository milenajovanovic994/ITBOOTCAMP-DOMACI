// 1. Направити објекат покемон који садржи следеће информације: (Направите макар 4 различита покемона)

// Име
// Врста
// Способности (низ способности покемона)
// Карактеристике (објекат са информацијама : напад (број), одбрана (број), брзина (број))
// Даље, направити низ од ових објеката

// пикачу:
// име: пикачу
// врста: електрични
// способности: Статички електрицитет,...
// карактеристике: напад: 55, одбрана: 30, брзина: 90

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

console.log(pokemon)

// Направити функцију која прима низ горе направљених објеката и враћа један низ способности свих покемона

// [<...>,...]

// prvi nacin

const pokeAbilities = function (arr) {
    return arr.map(el => el.abilities).flat()
}
console.log(pokeAbilities(pokemon))

// drugi nacin (bez map-a i flat-a)

const pokeAbilities2 = (arr) => {
    let arr2 = []
    arr.forEach(el => {
        el.abilities.forEach(el1 => arr2.push(el1))
    })
    return arr2
}
console.log(pokeAbilities2(pokemon))

// Сортирати покемоне по брзини, растуће.

const sortedPokemon = pokemon.sort(function (a, b) {
    if (a.stats.speed > b.stats.speed) {
        return 1
    }
    else {
        return -1
    }
})
console.log(sortedPokemon)
