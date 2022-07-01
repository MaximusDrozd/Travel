const popupContainer = document.querySelector('.popup-container')

const loginButton = document.querySelector('#login')
loginButton.addEventListener('click', () => {
    
    popupContainer.classList.remove('closed')
})
popupContainer.addEventListener('click', (event) => {
    if (event.target === popupContainer) {
        popupContainer.classList.add('closed') 
    }
   
})
