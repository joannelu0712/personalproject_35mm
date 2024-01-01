//   首頁lightbox
$(function () {
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



    let film_name = ['淑女鳥', '天堂之日', '藍絲絨', '在車上', '從海底出擊', '烈血大風暴', '最後一場電影', '站在我這邊', '銀翼殺手：終極版'];
    for (let i = 0; i < film_name.length; i++) {
        $(`.banner:eq(${i})`).click(function (e) {
            e.preventDefault();
            $(this).removeClass('-filter');
            $(`.banner`).not(this).addClass('-filter');
            $('#film_name').text(film_name[i]);


        })

    }










});
