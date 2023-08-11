const navLinkEls = document.querySelectorAll('.nav_link');
const navbar = document.querySelector('.navbar')
const windowPathname = window.location.pathname;

navbar.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    document.addEventListener('click', (e)=>{
        if(!e.composedPath().includes(navbar)){
            navbar.classList.remove('active');
        }
    })
})



let text = document.getElementById("text");
let left_item = document.getElementById("left_item");
let right_item = document.getElementById("right_item");
let whole_glitch = document.getElementById("whole_glitch");
let whyq = document.getElementById("whyq");

window.addEventListener("scroll", () => { 
    let value = window.scrollY
    text.style.marginTop = value * -2.5 + 'px';
    // left_item.style.left = value * -2.5 + 'px';  
    // right_item.style.left = value * 2.5 + 'px'; 
    summerglitch.style.left = value * -2.5 + 'px';
    glitch2023.style.left = value * 2.5 + 'px';
    // bg_1_2.style.marginTop = value * -2.5 + 'px';
    whyq.style.flexGrow = "2";
}


// let whyq = document.getElementById("whyq");

// window.addEventListener("scroll", () => { 
//     let value = window.scrollY
//     whyq.style.marginTop = value * -2.5 + 'px';
// }
);

