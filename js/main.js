// Handle the nav menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);


function toggleMenu() {
    if(!showMenu){
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show"); 
        navItems.forEach(item => item.classList.add("show"));
        showMenu = true;
    }else{
        
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show"); 
        navItems.forEach(item => item.classList.remove("show"));
        showMenu = false;
    }
}


//Handle the tic tac toe game
const clearBtn = document.querySelector(".clear-btn");
const boxes = document.querySelectorAll(".box");
const turnIndicator = document.querySelector(".turn-indicator");

let counter = 0;

boxes.forEach(item => item.addEventListener("click", () => { boxClicked(item); }));
clearBtn.addEventListener("click", clear);
turnIndicator.classList.add("circles");

function boxClicked(box) {
    if(!box.classList.contains("circle") && !box.classList.contains("cross") && counter % 2 == 0){
        box.classList.add("circle");
        counter += 1;
    }else if (!box.classList.contains("circle") && !box.classList.contains("cross") && counter % 2 != 0){
        box.classList.add("cross");
        counter += 1;
    }
    if (counter % 2 == 0) {
        turnIndicator.classList.remove("crosses");
        turnIndicator.classList.add("circles");
    } else {
        turnIndicator.classList.remove("circles");
        turnIndicator.classList.add("crosses");
    }

}

function clear(){
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].classList.contains("cross")) {
            boxes[i].classList.remove("cross")
        }else if (boxes[i].classList.contains("circle")) {
            boxes[i].classList.remove("circle")
        }
        counter = 0;
        if (turnIndicator.classList.contains("crosses")){
            turnIndicator.classList.remove("crosses");
            turnIndicator.classList.add("circles");
        }
    }
}
