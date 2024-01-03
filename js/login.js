// member.html
// 登入成功lightbox
$(function () {
    $('.login .btn_submit').click(function (e) {
        e.preventDefault();
        $('.lb_login').removeClass('none');
        // 將登入與否存入storage
        let login_info = {
            'isLogin': true
        };
        localStorage.setItem("login_info", JSON.stringify(login_info));
    })

    let lightbox_el = document.getElementsByClassName("lightbox")[1];
    lightbox_el.addEventListener('click', function () {
        lightbox_el.classList.add('none');
        window.location.assign('../webPage/profile.html') //點擊視窗外強制前往會員中心
    })
    lightbox_el.querySelector('.popup').addEventListener('click', function (e) {
        e.stopPropagation();
    })
})