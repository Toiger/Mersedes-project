const linkHead = document.querySelectorAll('.menu-list__link')
const mainScroll = document.querySelectorAll('.main__scroll')
const newArray = [...linkHead, mainScroll]
const titles = document.querySelectorAll('.design__title')
const titlesArr = [...titles]

// titlesArr.forEach(item, () => {
//   item.addEventListener('click', (event) => item.classList.add('hidden'))
// })

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

newArray.forEach(link, () => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    const ID = event.target.getattribute('href').substr(1);

    document.getElementById(ID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
})


// for(item of titles){
//   item.addEventListener('click', () => {
//     // item.classList.add('hidden')
//     console.log('hello')
//     // titles.forEach(title, () => {
//     //   if (item === title){
//     //     title.classList.add('hidden')
//     //   } else {
//     //     title.classList.remove('hidden')
//     //   }
//     //   })
//     // })
//   })}
