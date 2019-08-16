
// TOGGLE BUTTON CLASS

var buttons = document.getElementsByClassName('buttons')[0];
var buttonArray = Array.from(buttons.querySelectorAll('button'));
var allItems = Array.from(document.querySelectorAll('.item'));
console.log(allItems);

const toggleActiveClass = (active) => {
    buttonArray.forEach(button => {
      button.classList.remove('active');
    })
    active.classList.add('active');
}
 
function toggleItems(dataClass){
    if(dataClass === 'all'){
        for(let i = 0; i<allItems.length; i++){
            allItems[i].style.display = 'flex';
        }
    }else{
        for(let i = 0; i<allItems.length; i++){
            allItems[i].classList.contains(dataClass) ? allItems[i].style.display = 'flex' : allItems[i].style.display = 'none';
        }
    }
}
 
buttonArray.forEach((button) => {
    button.addEventListener('click', function(){
        toggleActiveClass(button);
        toggleItems(button.dataset.filter);
        console.log(button.dataset.filter);
    })
});

// SIZING 

const setImageHeight = () => {
    allItems.forEach((item) => {
    const image = item.querySelector('.portfolio-image');
    const text = item.querySelector('.portfolio-text');
    console.log(text.clientHeight)
    image.style.height = text.clientHeight + 200 + "px";
    })
}

setImageHeight()
window.addEventListener('resize', setImageHeight);