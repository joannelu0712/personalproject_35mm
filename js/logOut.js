// profile.html
// 登出成功lightbox 
$(function () {
    $('.info_pool+.btn').click(function (e) {
        e.preventDefault();
        localStorage.removeItem("login_info")
        $('.lb_login').removeClass('none');
    })
    let lightbox_el = document.getElementsByClassName("lightbox")[1];
    lightbox_el.addEventListener('click', function () {
        lightbox_el.classList.add('none');
        window.location.assign('../webPage/member.html') //點擊視窗外強制前往登入頁
    })
    lightbox_el.querySelector('.popup').addEventListener('click', function (e) {
        e.stopPropagation();
    })
})