// Homepage - show & hide img modal
const recetteHome = document.querySelectorAll('[data-titre]');
const imgModal = document.querySelectorAll('#js-imgModal');


const showImgModal = e => {
    const item = e.target.dataset.titre;
    Array.from(imgModal).filter(el => {
        if(el.dataset.img === item) {
            el.classList.remove("hidden");
        }
    })
};

const hideImgModal = e => {
    const item = e.target.dataset.titre;
    Array.from(imgModal).filter(el => {
        if(el.dataset.img === item) {
            el.classList.add("hidden");
        }
    })
}

recetteHome.forEach(el => el.addEventListener("mouseenter", showImgModal));
recetteHome.forEach(el => el.addEventListener("mouseleave", hideImgModal));


// Modify color according to category
const catSpan = document.querySelectorAll("span.card-cat");

catSpan.forEach(item => {
    let category = item.textContent;
    switch(category) {
        case " | entrée" :
        item.style.color = "#FD5F11";
            break;
        case " | plat" :
        item.style.color = "#34887C";
            break;
        case " | dessert" :
        item.style.color = "#ffdb58";
            break;
        default :
        console.log("not a category");
    }
});