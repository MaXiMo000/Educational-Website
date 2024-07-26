// change navbar style on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 50)
})

// open para in faq answer

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', ()=> {
        faq.classList.toggle('open')

        // change icon

        const icon = faq.querySelector('.faq__icon i')

        if (icon.className == 'uil uil-plus'){
            icon.className = 'uil uil-minus'
        }
        else{
            icon.className = 'uil uil-plus'
        }
    })
})


// open navbar

const menu = document.querySelector('.nav__menu');
const menubtn = document.querySelector('#open-menu-btn');
const closebtn = document.querySelector('#close-menu-btn');

menubtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closebtn.style.display = 'inline-block';
    menubtn.style.display = 'none'
})

// close nav menu

const closenav = () => {
    menu.style.display = 'none';
    closebtn.style.display = 'none';
    menubtn.style.display = 'inline-block'
}

closebtn.addEventListener('click', closenav)

// 