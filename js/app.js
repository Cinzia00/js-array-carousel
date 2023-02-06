let slideElement = [
    './img1.jpg',
    './img2.jpg',
    './img3.jpg',
    './img4.jpg'
]

let slideAttiva = 0;

let elementJs = ''


for (let i = 0; i < slideElement.length; i++) {
    let activeClass = ''
    if (i === 0) {
        activeClass = 'active'
    }
    let img = `
    <div class="slide ${activeClass}">
        <img src="${slideElement[i]}" alt="">
    </div>
    `
    elementJs += img
}
console.log('elemento', elementJs)
document.getElementById('carosello').innerHTML += elementJs


const rightArrowElement = document.getElementById("arrow-right-element");
const leftArrowElement = document.getElementById("arrow-left-element");
console.log(rightArrowElement, 'right-arrow');
let slideList = document.getElementsByClassName('slide');
console.log(slideList);


rightArrowElement.addEventListener('click', function() {
    console.log(slideAttiva, 'slide attiva')
    if (slideAttiva < slideList.length - 1) {
        let slideCorrente = slideList[slideAttiva];
        console.log(slideCorrente);
        slideCorrente.classList.remove('active');
        slideAttiva += 1;

        let prossimaslide = slideList[slideAttiva]
        prossimaslide.classList.add('active')
        console.log(prossimaslide)
    }
})


console.log('left-arrow', slideAttiva)
leftArrowElement.addEventListener('click', function () {
    if (slideAttiva > 0) {
        let slideCorrente = slideList[slideAttiva];
        console.log(slideCorrente, 'ciaone');
        slideCorrente.classList.remove('active');
        slideAttiva -= 1;
        let prossimaslide = slideList[slideAttiva]
        prossimaslide.classList.add('active')
        console.log(prossimaslide)
    }
})


