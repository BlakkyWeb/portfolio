const mobileNav = document.querySelector('.mobile-nav');
const menuBtn = document.querySelector('.menu-btn');


menuBtn.addEventListener('click', ()=>{
    if(menuBtn.src = "./images/menu.png"){
        menuBtn.src = "./images/close.png";
    }else{
        menuBtn.src = "./images/menu.png";
    }
});

menuBtn.addEventListener('click', ()=>{
    mobileNav.classList.toggle('hide');
})

window.onscroll = () =>{
    mobileNav.classList.remove('hide');
    menuBtn.src = "./images/menu.png"
}
