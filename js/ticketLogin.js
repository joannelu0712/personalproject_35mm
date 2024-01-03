// addFood.html
/*---------ticket login lightbox----------*/
$(function () {
    //判斷是否已登入會員，如已登入則略過lightbox，直接跳轉到付款頁面
    $('.Tbtn_bar .btn_submit').click(function (e) {
        // let login_info_t = localStorage.getItem('login_info')
        if (localStorage.getItem('login_info') == null) {
            console.log('asdad')
            e.preventDefault()
            $('.lightbox').removeClass('none');
        }
    })

    let lightbox_el = document.getElementsByClassName("lightbox")[0];
    lightbox_el.addEventListener('click', function () {
        lightbox_el.classList.add('none');//點擊視窗外就關掉lightbox
    })
    lightbox_el.querySelector('.popup').addEventListener('click', function (e) {
        e.stopPropagation();
    })
    // 帳號、密碼皆須輸入才能送出
    $('.lightbox .btn_submit').attr('disabled', true).css({
        'pointer-events': 'none',
        'background-color': '#666',
        'border': '4px solid #666'
    });
    $('input').keyup(function () {
        let user_info = $('#user').val();
        let pd_info = $('#pd').val();
        if (user_info !== '' && pd_info !== '') {
            $('.lightbox .btn_submit').attr('disabled', false).css({
                'pointer-events': 'auto',
                'background-color': 'var(--kv_orange)',
                'border': '4px solid var(--kv_orange)'
            });
        } else {
            $('.lightbox .btn_submit').attr('disabled', true).css({
                'pointer-events': 'none',
                'background-color': '#666',
                'border': '4px solid #666'
            });
        }
    })
    //如果在此會員登入，則儲存到local storage
    $('.lightbox .btn_submit').click(function () {
        let login_info = {
            'is_login': true
        };
        localStorage.setItem("login_info", JSON.stringify(login_info));
    })

})
