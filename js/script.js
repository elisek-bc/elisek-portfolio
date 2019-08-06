document.addEventListener('DOMContentLoaded', function() {
    let wrapper = document.querySelector(".wrapper");
    let topLayer = wrapper.querySelector(".top");
    let bottomLayer = wrapper.querySelector(".bottom");
    let handle = wrapper.querySelector(".handle");

    wrapper.addEventListener("mousemove", function(e){
    let calcOppWidth = window.innerWidth-(e.clientX - (window.innerWidth/2 - e.clientX)) + 'px'
    handle.style.left = calcOppWidth;
    topLayer.style.width = calcOppWidth;

    if (e.clientX + 'px' < calcOppWidth) {
        bottomLayer.style.filter = "grayscale(1)";
        topLayer.style.filter = "none";
    } else if (e.clientX + 'px' > calcOppWidth){
        topLayer.style.filter = "grayscale(1)";
        bottomLayer.style.filter = "none";
    } 
    });
});