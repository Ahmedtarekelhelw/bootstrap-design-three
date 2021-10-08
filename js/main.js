//modify the height of carousel
let carousel = document.querySelector(".carousel")
let upperNav = document.querySelector('.upper-nav')
let mainNav = document.querySelector('.navbar')
let carouselItem = document.querySelectorAll(".carousel-item")

// carousel.style.height = `${window.innerHeight - (upperNav.offsetHeight + mainNav.offsetHeight)}px`
carouselItem.forEach(e => { e.style.height = `${window.innerHeight - (upperNav.offsetHeight + mainNav.offsetHeight)}px`})

window.onresize = function () {
    // carousel.style.height = `${window.innerHeight - (upperNav.offsetHeight + mainNav.offsetHeight)}px`
    carouselItem.forEach(e => { e.style.height = `${window.innerHeight - (upperNav.offsetHeight + mainNav.offsetHeight)}px`})
}


//work section

let li = document.querySelectorAll(".work ul li")
let img = document.querySelectorAll(".work-img img")

// remove and add class active to click li
li.forEach(e => e.addEventListener("click" , function(ele) {
    li.forEach(el => el.classList.remove("active"))
    ele.currentTarget.classList.add("active")

    // appear image that accociated with click li 
    let dataValue = document.querySelectorAll(ele.currentTarget.dataset.value)
    img.forEach(e => e.style.opacity ="0.1")
    dataValue.forEach(e => e.style.opacity = "1")
}))





