//   首頁lightbox

let lightbox_el = document.getElementsByClassName("lightbox")[0];
let ticket_rel = document.querySelector(".header .ticket");
ticket_rel.addEventListener('click', function (e) {
    e.preventDefault();
    lightbox_el.classList.remove('none');
})
lightbox_el.addEventListener('click', function () {
    lightbox_el.classList.add('none');
})

lightbox_el.querySelector('.popup').addEventListener('click', function (e) {
    e.stopPropagation();
})