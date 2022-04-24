//------------------------ Gallery show hy
let showButton = document.querySelector("#showMore"),
    showPoints = 0;

showButton.onclick = function(){
    if(showPoints === 0){
        showPoints = 1;
        document.querySelector("#gallery .galleryContainer").style.position = "static";
        document.querySelector("#gallery .galleryContainer").style.height = "auto";
        document.querySelector("#gallery .galleryContainer").style.boxShadow = " inset 0 0px 50px -50px #fff";
        showButton.innerHTML = "Դիտել ավելի քիչ";
    }else{
        showPoints = 0;
        document.querySelector("#gallery .galleryContainer").style.position = "relative"; 
        document.querySelector("#gallery .galleryContainer").style.height = "800px";
        document.querySelector("#gallery .galleryContainer").style.boxShadow = "inset 0 -150px 50px -50px #fff";
        showButton.innerHTML = "Դիտել ավելին"
    }
}