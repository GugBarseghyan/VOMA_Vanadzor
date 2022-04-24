//------------------------ Gallery show Ru
let showButtonRu = document.querySelector("#showMoreRu"),
    showPointsRu = 0;

 showButtonRu.onclick = function(){
    if(showPointsRu === 0){
        showPointsRu = 1;
        document.querySelector("#gallery .galleryContainerRu").style.position = "static";
        document.querySelector("#gallery .galleryContainerRu").style.height = "auto";
        document.querySelector("#gallery .galleryContainerRu").style.boxShadow = " inset 0 0px 50px -50px #fff";
        showButtonRu.innerHTML = "Показать меньше";
    }else{
        showPointsRu = 0;
        document.querySelector("#gallery .galleryContainerRu").style.position = "relative"; 
        document.querySelector("#gallery .galleryContainerRu").style.height = "800px";
        document.querySelector("#gallery .galleryContainerRu").style.boxShadow = "inset 0 -150px 50px -50px #fff";
        showButtonRu.innerHTML = "Показать больше"
    }
}