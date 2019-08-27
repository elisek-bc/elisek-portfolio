//HOMEPAGE SLIDER

document.addEventListener('DOMContentLoaded', function() {
    let wrapper = document.querySelector(".wrapper");
    let topLayer = wrapper.querySelector(".top");
    let bottomLayer = wrapper.querySelector(".bottom");
    let handle = wrapper.querySelector(".handle");

    wrapper.addEventListener("mousemove", function(e){
        console.log(e.clientX);
    if (e.clientY > 80){
        let calcOppWidth = window.innerWidth - e.clientX + 'px';
        handle.style.left = calcOppWidth;
        topLayer.style.width = calcOppWidth;
        if (e.clientX < window.innerWidth - e.clientX) {
            console.log(calcOppWidth);
            bottomLayer.style.filter = "grayscale(1)";
            topLayer.style.filter = "none";
        } else if (e.clientX > window.innerWidth - e.clientX){
            console.log(calcOppWidth);
            
            topLayer.style.filter = "grayscale(1)";
            bottomLayer.style.filter = "none";
        }
    } else {
        handle.style.left = 50+'%';
        topLayer.style.width = 50+'%';
        bottomLayer.style.filter = "none";
        topLayer.style.filter = "none";
    };
    });
    
});


if( e.clientX === window.innerWidth / 2 ){

}else{

}