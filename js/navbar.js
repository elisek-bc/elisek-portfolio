var icon = document.querySelector('.navbar-toggler');

icon.addEventListener('click', () => {
    if(icon.querySelector('.navbar-toggler-icon').classList.contains('clicked')){
        icon.querySelector('.navbar-toggler-icon').classList.remove('clicked');
    } else {
        icon.querySelector('.navbar-toggler-icon').classList.add('clicked');
    }
})
