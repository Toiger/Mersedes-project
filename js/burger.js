const burger = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')
const list = document.querySelector('.menu-list')

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active')
  burger.classList.toggle('humburger-menu-active')
}

burger.addEventListener('click', () => toggleMenu())

list.addEventListener('click', (event) => {
    const target = event.target
    if (target.classList.contains('menu-list__link'))
    menuElem.classList.remove('menu-active')
    burger.classList.remove('humburger-menu-active')
})