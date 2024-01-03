// index.html
$(function () {
    // 依據網頁寬度不同，Top鍵出現時機不同
    if (window.innerWidth <= 550) {
        $('.go_top').addClass('-off')
    } else
        if (window.innerWidth <= 700) {
            $(window).scroll(function () {
                if ($(document).scrollTop() >= 200) {
                    $('.go_top').removeClass('-off')
                }
                else (
                    $('.go_top').addClass('-off')
                )
            })
        } else
            if (window.innerWidth <= 1000) {
                $(window).scroll(function () {
                    if ($(document).scrollTop() >= 400) {
                        $('.go_top').removeClass('-off')
                    }
                    else (
                        $('.go_top').addClass('-off')
                    )
                })

            } else {
                $(window).scroll(function () {
                    if ($(document).scrollTop() >= 500) {
                        $('.go_top').removeClass('-off')
                    }
                    else (
                        $('.go_top').addClass('-off')
                    )
                })
            }
    // 網頁回頂端的動畫
    $('.go_top').click(function (e) {
        e.preventDefault();
        $("html,body").animate(
            {
                scrollTop: 0,
            },
            600
        );
        console.log($(document).scrollTop());
    })

})