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
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    threshold: [0.25, 0.3, 0.4, 0.5],
    rootMargin: '-150px 0px -150px 0px'
}
const navcheck = (entries) => {
    entries.forEach(entry => {
        const className = entry.target.className;
        // console.log(className);
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        // console.log(entry.isIntersecting);

        if (!entry.isIntersecting) {
            activeAnchor.classList.remove('active');
            return;
        }

        if (entry.isIntersecting) {
            console.log('activeAnchor: ' + activeAnchor);
            activeAnchor.classList.add('active');
            // activeAnchor.classList.toggle('active');
        }
    })
}
// let observer = new IntersectionObserver(navcheck, options);
let observer = new IntersectionObserver(navcheck, options)
sections.forEach(section => {
    observer.observe(section);

})



//event listener when toggler is clicked
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
    // console.log(viewPortInnerHeight)
    if (window.scrollY > viewPortInnerHeight) {
        navbar.classList.add('colored');
        // console.log('color added')
    } else {
        navbar.classList.remove('colored');
        // console.log('color removed')

    }
});

////////////////////////////
////// flip card to original position
const cardsBack = document.querySelectorAll('.card__side--back');
const cardsFront = document.querySelectorAll('.card__side--front');


window.addEventListener('resize', () => {
    //flip card with a click only on mobiles
    console.log(window.innerWidth);
    if (window.innerWidth < 500) {
        const nonFlipped = (event) => {
            const card = event.currentTarget.parentElement;
            // console.log(card)
            const front = card.children[0];
            const back = card.children[1];
            back.style.transform = 'rotateY(180deg)';
            front.style.transform = 'rotateY(0)';
        }
    
        const flipped = (event) => {
            const card = event.currentTarget.parentElement;
            const front = card.children[0];
            const back = card.children[1];
            back.style.transform = 'rotateY(0deg)';
            front.style.transform = 'rotateY(-180deg)';
        }
    
        cardsBack.forEach(el => {
            el.addEventListener('click', nonFlipped)
        });
    
        cardsFront.forEach(el => {
            el.addEventListener('click', flipped)
        });  

    }

});






