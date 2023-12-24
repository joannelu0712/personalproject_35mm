/*----------------topSelect------------------- */

// let nnn = document.querySelector('.header>img');
// nnn.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log(window.innerWidth);
// });

let i_bar = document.querySelector('.header>i');
let moving = document.querySelector('.header>ul');


i_bar.addEventListener("click", function (e) {
    e.stopPropagation();
    if (moving.getAttribute('data-move') == null) {
        moving.setAttribute('data-move', true);
        moving.classList.remove('-off');
        moving.classList.add('-on');
    } else {
        moving.removeAttribute('data-move');
        moving.classList.remove('-on');
        moving.classList.add('-off');
    }

});


document.addEventListener("scroll", function (e) {
    if (e.isTrusted == true && moving.getAttribute('data-move') !== null) {
        moving.removeAttribute('data-move');
        moving.classList.remove('-on');
        moving.classList.add('-off');
    }
});






if (window.innerWidth <= 980) {
    let btn_bar = document.querySelectorAll('.header ul li a');
    let li_hidden = `<li class='li_hidden'><a href="./webPage/movies.html">All Movies</a></li>
                 <li class='li_hidden'><a href="./webPage/pond.html">Wishing Pond</a></li>`;
    for (i = 0; i < btn_bar.length; i++)
        btn_bar[i].addEventListener('click', function (e) {
            e.preventDefault();
            if (e.target.getAttribute('data-open') == null) {
                if (e.target.innerText == "Movies") {
                    e.target.setAttribute('data-open', true);
                    this.closest('li').insertAdjacentHTML('afterend', li_hidden);
                }
            } else {
                e.target.removeAttribute('data-open');
                this.closest('ul').querySelector('.li_hidden').remove();
                this.closest('ul').querySelector('.li_hidden').remove();
            }
        });

}