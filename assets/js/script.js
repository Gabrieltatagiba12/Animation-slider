let buttonNext = document.querySelector('.next')
let buttonBack = document.querySelector('.back')

let container = document.querySelector('.container')
let list = document.querySelector('.container .list')
let thumb = document.querySelector('.container .thumb')

buttonNext.onclick = () => moveItemOnClick('next')
buttonBack.onclick = () => moveItemOnClick('back')

function moveItemOnClick(type){
    let listItems = document.querySelectorAll('.list .list_item')
    let thumbItems = document.querySelectorAll('.thumb .thumb_item')

    if(type === 'next'){
        list.appendChild(listItems[0])
        thumb.appendChild(thumbItems[0])
        container.classList.add('next')
    } else{
        list.prepend(listItems[listItems.length -1])
        thumb.prepend(thumbItems[thumbItems.length -1])
        container.classList.add('back')
    }

    setTimeout(() => {
        container.classList.remove('next')
        container.classList.remove('back')
    }, 3000);
}