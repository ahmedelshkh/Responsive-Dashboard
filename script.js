// Show The Menu ON The Mobile

const menuIcon = document.querySelector(".content header .menu-icon");
const sidebar = document.querySelector(".sidebar");
let menuClicked = false;

menuIcon.addEventListener("click", function(){
    if(menuClicked) {
        sidebar.style.cssText = "left: -400px;";
        menuClicked = false;
    }else {
        sidebar.classList.remove("hide-mobile");
        sidebar.style.cssText = "left: 0;";
        menuClicked = true;
    }
});