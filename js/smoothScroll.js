const linkHead = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelector('.main__scroll')
const newArray = [...linkHead, mainScroll]
const titles = document.querySelectorAll('.design__title')
const titlesArr = [...titles]


titles.forEach((item) => {
  item.addEventListener('click', () => {
        titles.forEach((subItem, index) => {
          if (item === subItem){
            console.log('hello1')
            subItem.classList.toggle('hidden') } 
            else {
            console.log('hello')
            subItem.classList.remove('hidden')
          }
          })
        })
})

newArray.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault()

    const ID = event.target.getattribute('href').substr(1);

    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})

