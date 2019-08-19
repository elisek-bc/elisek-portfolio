var allItems = Array.from(document.querySelectorAll('.item'));

allItems.forEach((item) => {
    const itemContainer = item.querySelector('item-container');
    switch (item.classList.contains()) {
        case logo:
            itemContainer.style.background = "$beige";
        break;
        case branding:
            itemContainer.style.background = "lighten($beige,25%)";
        break;
        case illustration:
            itemContainer.style.background = "lighten($beige,50%)";
        break;
        case web:
            itemContainer.style.background = "lighten($beige,75%)";
        break;
        case photography:
            itemContainer.style.background = "darken($beige,25%)";
        break;
    }
})