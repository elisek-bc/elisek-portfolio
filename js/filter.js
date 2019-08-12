
var buttons = document.getElementsByClassName('buttons')[0];
var buttonArray = Array.from(buttons.querySelectorAll('button'));
console.log(buttonArray);

buttonArray.forEach((button) => {
    const handleClick = () => { 
        var buttonSpan = button.querySelector('span');  
        buttonSpan.classList.toggle('active');
        
    };

    button.addEventListener('click', handleClick);
});

    





