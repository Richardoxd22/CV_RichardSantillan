/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header =document.getElementById('header')

    if(this.scrollY >=50) header.classList.add('scroll-header');else header
}
//window.addEventListener('scroll, scrollHeader')

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalClose =document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((mb, i)=> {
    mb.addEventListener('click', ()=>{
        modal(i)
    })
})

modalClose.forEach((mc)=>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv)=>{
            mv.classList.remove('active-modal')
        })
    })
})
        

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
/*efecto de transicion sobre el protafolio y cosas mias */
let mixerPersonal = mixitup(".work__container", {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(L=> L.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click',activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/
let swipertestimonial = new Swiper(".testimonial__container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== LIGHT DARK THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/

