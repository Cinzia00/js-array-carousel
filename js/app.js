// const slideElement: []
let slideAttiva = 0;
let slideList = document.getElementsByClassName('slide');
console.log(slideList);

const rightArrowElement = document.getElementById("arrow-right-element");
const leftArrowElement = document.getElementById("arrow-left-element");
console.log(rightArrowElement, 'right-arrow');

rightArrowElement.addEventListener('click', function() {
    console.log(slideAttiva, 'slide attiva')

    let slideCorrente = slideList[slideAttiva];
    console.log(slideCorrente);
    slideCorrente.classList.remove('active');
    slideAttiva += 1;

    let prossimaslide = slideList[slideAttiva]
    prossimaslide.classList.add('active')
    console.log(prossimaslide)
    
    if (slideAttiva === slideList[4]) {
        prossimaslide = slideList[1]
    }
})


console.log('left-arrow', slideAttiva)
leftArrowElement.addEventListener('click', function() {

    let slideCorrente = slideList[slideAttiva];
    console.log(slideCorrente);
    slideCorrente.classList.remove('active');
    slideAttiva += 1;

    let prossimaslide = slideList[slideAttiva]
    prossimaslide.classList.add('active')
    console.log(prossimaslide)
})


