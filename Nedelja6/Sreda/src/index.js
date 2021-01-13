import def from './service.js'

const itemList = document.querySelector('.item-list')
const input = document.querySelector('#input')
const btnAdd = document.querySelector('.btn-add')

function change(text, id) {
    if (text.classList.contains('done')) {
        text.classList.remove('done')
        text.classList.add('undone')
        let noviItem = {
            desc: text.textContent,
            done: false
        }
        def.changeById(id, noviItem)
        console.log(def.data)
    } else {
        text.classList.remove('undone')
        text.classList.add('done')
        let noviItem = {
            desc: text.textContent,
            done: true
        }
        def.changeById(id, noviItem)
        console.log(def.data)
    }
}


const addToDOM = (item, idI) => {
    const divItem = document.createElement('div')
    divItem.classList.add('div-item')

    const itemText = document.createElement('p')
    itemText.classList.add('par')
    itemText.textContent = item.desc

    const check = document.createElement('input')
    check.type = 'checkbox'
    check.id = 'check'
    check.onchange = function () { change(itemText, idI) }
    if (item.done === true) {
        check.checked = true
        itemText.classList.add('done')
    }
    else {
        itemText.classList.add('undone')
    }

    const label = document.createElement('label')
    label.classList.add('label-item')
    label.textContent = 'Check here when this is done!'

    const btnChange = document.createElement('button')
    btnChange.classList.add('btn-change')
    btnChange.textContent = 'CHANGE'

    btnChange.addEventListener('click', () => {
        const changedItem = prompt('Change your ToDo item here:', `${itemText.innerHTML}`)
        itemText.innerHTML = changedItem
        let newItem = {
            desc: changedItem,
            done: item.done
        }
        def.changeById(idI, newItem)
        console.log(def.data)
    })

    const btnDel = document.createElement('button')
    btnDel.textContent = 'DELETE'
    btnDel.classList.add('btn-del')
    btnDel.addEventListener('click', () => {
        divItem.remove()
        def.deleteById(idI)
        console.log(def.data)
    })


    divItem.append(itemText, check, label, btnChange, btnDel)
    itemList.appendChild(divItem)

    input.value = ''
}

def.data.forEach(el => {
    addToDOM(el, el.id)
})

const makeItem = () => {
    let toDoItem = {
        desc: input.value,
        done: false
    }
    return toDoItem
}

// Napomena: ubacila sam u service.js u funkciju deleteById : return count - 1

btnAdd.addEventListener('click', () => {

    let newId = def.add(makeItem())
    addToDOM(makeItem(), newId)
    console.log(def.data)
})


