// for 所有頁面
/*----------------topSelect------------------- */

$(function () {
    // 判斷是否已登入，改寫header
    if (localStorage.getItem('login_info') !== null) {
        let login_info_t = JSON.parse(localStorage.getItem("login_info"));
        if (login_info_t.isLogin == false) {
            $('.header li:last-child a').text('Login');
        } else {
            $('.header li:last-child a').text('Profile');
            $('.header li:last-child a').click(function (e) {
                e.preventDefault();
                window.location.assign('../webPage/profile.html')
            })
        }
    }
    // header變形為側邊選單
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
    // 如果滾動頁面，則側邊選單收合
    document.addEventListener("scroll", function (e) {
        if (e.isTrusted == true && moving.getAttribute('data-move') !== null) {
            moving.removeAttribute('data-move');
            moving.classList.remove('-on');
            moving.classList.add('-off');
        }
    });
    //當螢幕寬度小於980，出現漢堡
    if (window.innerWidth <= 980) {
        let btn_bar = document.querySelectorAll('.header ul li a');
        $(btn_bar).click(function (e) {
            if (e.target.innerText == "Movies") {
                e.preventDefault();
            }
        })
        // 側邊選單點擊後才會出現的子選單
        // (首頁)
        if ($('.header ul a').attr('class') !== 'page_home') {
            let li_hidden = `<li class='li_hidden'><a href="./webPage/movies.html">All Movies</a></li>
                     <li class='li_hidden'><a href="./webPage/pond.html">Wishing Pond</a></li>`;
            for (i = 0; i < btn_bar.length; i++)
                btn_bar[i].addEventListener('click', function (e) {
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
            // (非首頁)
        } else {
            let li_hidden = `<li class='li_hidden'><a href="../webPage/movies.html">All Movies</a></li>
            <li class='li_hidden'><a href="../webPage/pond.html">Wishing Pond</a></li>`;
            for (i = 0; i < btn_bar.length; i++)
                btn_bar[i].addEventListener('click', function (e) {
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

    }
});

