try {
    const btnMenu = document.querySelector('.menu-button')
    const menuBar = document.querySelector('.menu-bar')

    btnMenu.addEventListener('click', () => {
        if (btnMenu.classList.contains('close')){
            menuBar.style.left = "-310px"
            btnMenu.classList.remove('close')   
        }else{
            menuBar.style.left = 0
            btnMenu.classList.add('close')   
        }
        
    })
} catch (error) {
    
}