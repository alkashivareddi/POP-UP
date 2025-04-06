const button = document.querySelector('button')
const popup = document.querySelector('.popup-container')
const closeicon = document.querySelector('.close-icon')
const overlay = document.querySelector('.overlay')


button.addEventListener('click', () =>{
    popup.classList.add('popup-open')
})


closeicon.addEventListener('click',()=>{
    popup.classList.remove('popup-open')

    
})
overlay.addEventListener('click',()=>{
    popup.classList.remove('popup-open')

    
})





 


















