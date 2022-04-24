//------------------------ Gallery show En
let showButtonEn = document.querySelector("#showMoreEn"),
    showPointsEn = 0;

 showButtonEn.onclick = function(){
    if(showPointsEn === 0){
        showPointsEn = 1;
        document.querySelector("#gallery .galleryContainerEn").style.position = "static";
        document.querySelector("#gallery .galleryContainerEn").style.height = "auto";
        document.querySelector("#gallery .galleryContainerEn").style.boxShadow = " inset 0 0px 50px -50px #fff";
        showButtonEn.innerHTML = "Show less";
    }else{
        showPointsEn = 0;
        document.querySelector("#gallery .galleryContainerEn").style.position = "relative"; 
        document.querySelector("#gallery .galleryContainerEn").style.height = "800px";
        document.querySelector("#gallery .galleryContainerEn").style.boxShadow = "inset 0 -150px 50px -50px #fff";
        showButtonEn.innerHTML = "Show more"
    }
}