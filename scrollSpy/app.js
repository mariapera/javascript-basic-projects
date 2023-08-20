const navLinks = document.querySelectorAll('.nav-link')
const sections = document.querySelectorAll('.section')

navLinks.forEach(navLink => {
    navLink.addEventListener('click', (e) => {
        e.preventDefault()
        navLinks.forEach((navLink) => {
            navLink.classList.remove('active')
        })
        navLink.classList.add('active')

        const element = document.getElementById(navLink.getAttribute('href').slice(1))
        const topElement = element.offsetTop - 67
        window.scroll({
            top: topElement,
            left: 0,
            behavior: "smooth"
        })
    })
}) 

const interSectionCallback = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            navLinks.forEach((navLink) => {
                navLink.classList.remove('active')
            })
            const activeNavLink = document.querySelector(`a[href="#${entry.target.id}"]`)
            activeNavLink.classList.add('active')
        }
    })
    
}

const observer = new IntersectionObserver(interSectionCallback, {threshold: [0.5, 0.9 ]})

sections.forEach(section => {
    observer.observe(section)        
})