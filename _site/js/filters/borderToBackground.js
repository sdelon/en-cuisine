module.exports = function(el) {
    el = document.querySelectorAll(".recette-span");
    el.forEach(link => link.addEventListener("mouseover", function(e) {
        let item = e.target;
        console.log(item);
        //item.style.backgroundColor = "#ffdb58";
        //item.texContent = "Hello";
    }))
};