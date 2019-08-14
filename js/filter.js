
// TOGGLE BUTTON CLASS

var buttons = document.getElementsByClassName('buttons')[0];
var buttonArray = Array.from(buttons.querySelectorAll('button'));
var allItems = document.querySelectorAll('.item');
console.log(buttonArray);

const toggleActiveClass = (active) => {
    buttonArray.forEach(button => {
      button.classList.remove('active');
    })
    active.classList.add('active');
}
 
function toggleItems(dataClass){
    if(dataClass === 'all'){
        for(let i = 0; i<allItems.length; i++){
            allItems[i].style.display = 'block';
        }
    }else{
        for(let i = 0; i<allItems.length; i++)
            allItems[i].dataset.class === dataClass ? allItems[i].style.display = 'block' : allItems[i].style.display = 'none';
    }
}
 
buttonArray.forEach((button) => {
    button.addEventListener('click', function(){
        toggleActiveClass(button);
        toggleItems(button.dataset.class);
    })
});

