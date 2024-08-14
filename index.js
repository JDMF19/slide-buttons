

const elements = document.querySelectorAll('.button');
const nav = document.querySelector('.nav');

elements.forEach((button)=>{

    button.addEventListener('click', ()=>{

        elements.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        const buttonRect = button.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        const positionX = buttonRect.left - navRect.left;
        const color = button.getAttribute('data-color');

        document.documentElement.style.setProperty('--position-x', `${positionX}px`);
        document.documentElement.style.setProperty('--track-shadow-width', `${buttonRect.width}px`);
        document.documentElement.style.setProperty('--border-button-width', `${buttonRect.width - 30}px`);
        document.documentElement.style.setProperty('--border-button-color', color);


    })

})