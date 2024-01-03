// index.html
// showtimes.html
// movies.html
// pond.html
// theaters.html
// member.html
// profile.html
//------------------------------------
//  see a movie lightbox
$(function () {
    // 刪除local storage中既有的訂票資料
    if (localStorage.getItem('ticket_info') !== null) {
        localStorage.removeItem('ticket_info')
    }
    if (localStorage.getItem('member') !== null) {
        localStorage.removeItem('member')
    }
    // 取消勾選所有radio
    $('input[name=theater]').each(function () {
        this.checked = false;
    })

    // lightbox
    let lightbox_el = document.getElementsByClassName("lightbox")[0];
    let ticket_rel = document.querySelector(".header .ticket");
    ticket_rel.addEventListener('click', function (e) {
        e.preventDefault();
        lightbox_el.classList.remove('none');
    })
    lightbox_el.addEventListener('click', function () {
        lightbox_el.classList.add('none');//點擊視窗外就關掉lightbox
    })
    lightbox_el.querySelector('.popup').addEventListener('click', function (e) {
        e.stopPropagation();
    })


    // lightbox左方－電影選擇視覺效果
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

    // 如未勾選任一radio，無法點選btn_submit
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
        let film_name_s = $('#film_name').text();
        let theater_s = $('input[name=theater]:checked').next().text();
        let ticket_info = {
            "film_name": film_name_s,
            "theater": theater_s
        };
        localStorage.setItem("ticket_info", JSON.stringify(ticket_info));
    })











});
