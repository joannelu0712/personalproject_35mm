/*---------other pages home button lightbox----------*/
let lightbox_el = document.getElementsByClassName("lightbox")[0];
let home_rel = document.getElementsByClassName("btn_blue")[0];
home_rel.addEventListener("click", function () {
    lightbox_el.classList.remove("none");
});

let remain_rel = document.getElementsByClassName("lightbox")[0].getElementsByClassName("btn_black")[0]

remain_rel.addEventListener("click", function () {
    console.log(lightbox_el);
    lightbox_el.classList.add("none");
});