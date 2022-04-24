// ---------------------------- header scroll effect
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("changedheader", window.scrollY > 0);
});

// ---------------------------- mobile header scroll effect
let header2 = document.querySelector(".header2");
window.addEventListener("scroll", () => {
    header2.classList.toggle("changedheader2", window.scrollY > 0);
});

// ---------------------------- jumpToTop
let jumpToTop = document.querySelector(".jumpToTop");
window.addEventListener("scroll", () => {
    jumpToTop.classList.toggle("jumpToTopChanged", window.scrollY > 0);
});

//-------------------------- Language dropdown
let ddMenu = document.querySelector("#ddMenu"),
    ddObject = document.querySelector("#ddObject"),
    ddIcon = document.querySelector("#icon"),
    ddPoint = 0;
ddMenu.onclick = function(){
    if(ddPoint === 0){
        ddObject.style.display = "flex";
        ddPoint = 1;
        ddIcon.classList.toggle("fa-caret-up");
        ddIcon.classList.remove( "fa-caret-down");
    }else{
        ddObject.style.display = "none";
        ddPoint = 0;
        ddIcon.classList.toggle( "fa-caret-down");
        ddIcon.classList.remove("fa-caret-up");
    }
}

//--------------------------- Menu Media
let menuBar = document.querySelector("#MenuBar"),
      menuBarButton = document.querySelector("#MenuBarButton"),
      menuBarPoint = 0,
      menuHeader = document.querySelector(".header2");

menuBarButton.onclick = function(){
    if(menuBarPoint === 0){
        menuBar.style.display = "flex";
        menuBar.style.width = "100%";
        menuBarPoint = 1;
    }else{
        menuBar.style.display = "none";
        menuBarPoint = 0;
    }
}