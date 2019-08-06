document.addEventListener('DOMContentLoaded', function() {
    let wrapper = document.querySelector(".wrapper");
    let topLayer = wrapper.querySelector(".top");
    let bottomLayer = wrapper.querySelector(".bottom");
    let handle = wrapper.querySelector(".handle");

    wrapper.addEventListener("mousemove", function(e){
    handle.style.left = (e.clientX + window.innerWidth/2 - e.clientX) + 'px';
    topLayer.style.width = (e.clientX + window.innerWidth/2 - e.clientX) + 'px';

    if (e.clientX < document.innerWidth/2) {
        bottomLayer.style.filter = "grayscale(1)";
        topLayer.style.filter = "none";
    } else {
        topLayer.style.filter = "grayscale(1)";
        bottomLayer.style.filter = "none";
    };
    });
});