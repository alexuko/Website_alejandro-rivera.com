/////////////////////
// HEADER HEXAGONS BACKGROUND
const hexagonsBox = document.querySelector('.hexagons-box');
for (let i = 0; i < 40; i++) {
    hexagonsBox.innerHTML += '<div class="row"></div>';

}

const rows = document.querySelectorAll('.row');
rows.forEach((row) => {
    for (let j = 0; j < 75; j++) {
        row.innerHTML += '<div class="hex-shape hexagon"></div>';

    }
})



////////////////////
// NAVIGATION BAR 
const navbar = document.querySelector('.nav');
const toggler = document.querySelector('.nav__toggler');
const linksList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__item');

toggler.addEventListener('click', () => {
    linksList.classList.toggle('open');
    links.forEach(link => {
        //add fade class 
        link.classList.toggle('fade');
        //close list when link is clicked
        link.addEventListener('click', () => {
            linksList.classList.remove('open');
            //remove fade class 
            links.forEach(li => {
                li.classList.remove('fade');
            });

        });

    });

});
// change navigation bar color when scrolling more than the header section 
window.addEventListener('scroll', () => {
    const offset = 110;
    const viewPortInnerHeight = window.innerHeight - offset;
    console.log(viewPortInnerHeight)
    if (window.scrollY > viewPortInnerHeight) {
        navbar.classList.add('colored');
        console.log('color added')
    } else {
        navbar.classList.remove('colored');
        console.log('color removed')

    }
});