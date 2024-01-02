//   首頁lightbox
$(function () {
    localStorage.clear();
    $('input[name=theater]').each(function () {
        this.checked = false;
    })



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
    $('.lightbox .btn_submit').attr('disabled', true).css({
        'pointer-events': 'none',
        'background-color': '#666',
        'border': '4px solid #666'
    });


    let isChecked = false;
    $('.lightbox table').click(function () {
        $('input[name=theater]').each(function () {
            if (this.checked == true) {
                isChecked = true;
                $('.lightbox .btn_submit').attr('disabled', false).css({
                    'pointer-events': 'auto',
                    'background-color': 'var(--kv_orange)',
                    'border': '4px solid var(--kv_orange)'
                });
            }
        })

    })
    // 將訂票資訊存入localStorage
    $('.lightbox .btn_submit').click(function (e) {
        // e.preventDefault();

        let film_name_s = $('#film_name').text();
        let theater_s = $('input[name=theater]:checked').next().text();

        let ticket_info = {
            "film_name": film_name_s,
            "theater": theater_s
        };
        localStorage.setItem("ticket_info", JSON.stringify(ticket_info));
    })











});
