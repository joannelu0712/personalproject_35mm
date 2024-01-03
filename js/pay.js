// payment.html
// 判斷是否為會員購票，決定可以使用的付款方式
$(function () {
    $('.money a').click(function (e) {
        e.preventDefault();
    })

    let member = JSON.parse(localStorage.getItem("member"));
    if (member.is_member == false) {
        $('.money a:nth-child(1)').removeClass('btn_on').addClass('btn_ban')
        $('.money a:nth-child(2)').removeClass('btn_off').addClass('btn_on')
        $('.money a:nth-child(3)').removeClass('btn_off').addClass('btn_off')
        $('.money a:nth-child(4)').removeClass('btn_off').addClass('btn_ban')

        $('.cal').toggleClass('-off')
        $('.card').toggleClass('-off')
    } else {
        alert('您已成功登入');
        $('.money a:nth-child(1)').click(function () {
            $('.cal').removeClass('-off')
            $('.card').addClass('-off')
            $(this).removeClass('btn_off').addClass('btn_on')
            $(this).next().addClass('btn_off').removeClass('btn_on')
        })
        $('.money a:nth-child(2)').click(function () {
            $('.cal').addClass('-off')
            $('.card').removeClass('-off')
            $(this).removeClass('btn_off').addClass('btn_on')
            $(this).prev().addClass('btn_off').removeClass('btn_on')
        })
    }
})