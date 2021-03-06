import { v1 as uuidv1 } from 'uuid'
import axios from 'axios'

const app = document.querySelector('#app')
const divShow = document.querySelector('#show')
const select = document.querySelector('#select')
const btnSubmit = document.querySelector('#btn')
const overlay = document.querySelector('.overlay')


const showInfo = (link) => {
    const divInfo = document.createElement('div')
    divInfo.classList.add('info')

    const info = document.createElement('a')
    info.textContent = link ? link : 'There is no information about this item! But you can watch some funny cats!'
    info.href = link ? link : 'https://www.youtube.com/watch?v=hY7m5jjJ9mM'
    info.target = '_blank'
    info.classList.add('aInfo')

    overlay.classList.remove('hidden')

    const btnClose = document.createElement('button')
    btnClose.classList.add('btn-close')
    btnClose.textContent = 'CLOSE'
    btnClose.addEventListener('click', () => {
        divInfo.classList.add('hidden')
        overlay.classList.add('hidden')
    })

    overlay.addEventListener('click', () => {
        divInfo.classList.add('hidden')
        overlay.classList.add('hidden')
    })

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !divInfo.classList.contains('hidden')) {
            divInfo.classList.add('hidden')
            overlay.classList.add('hidden')
        }
    })

    divInfo.append(info, btnClose)
    app.appendChild(divInfo)
}

const addToDOM = (image, namE, link) => {
    const divItem = document.createElement('div')
    divItem.classList.add('div-item')

    const itemName = document.createElement('h4')
    itemName.textContent = namE
    itemName.classList.add('item-name')

    const img = document.createElement('img')
    img.src = image ? image : 'https://via.placeholder.com/150'
    img.classList.add('img')

    const btnInfo = document.createElement('button')
    btnInfo.textContent = 'Read more...'
    btnInfo.classList.add('btn-info')

    btnInfo.addEventListener('click', () => {
        showInfo(link)
    })

    divItem.append(itemName, img, btnInfo)
    divShow.appendChild(divItem)
}

btnSubmit.addEventListener('click', () => {

    if (select.value === 'ships') {
        axios.get('https://api.spacexdata.com/v3/ships')
            .then(res => {
                divShow.innerHTML = ''
                res.data.forEach(el => {
                    addToDOM(el.image, el.ship_name, el.url)
                })
            })
    }
    else {
        axios.get('https://api.spacexdata.com/v3/launches')
            .then(res => {
                divShow.innerHTML = ''
                res.data.forEach(el => {
                    addToDOM(el.links.mission_patch_small, el.mission_name, el.links.video_link)
                })
            })
    }
})
