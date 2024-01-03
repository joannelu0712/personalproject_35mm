// payment.html
// 判斷是否為會員購票，決定可以使用的付款方式
$(function () {
    $('.money a').click(function (e) {
        e.preventDefault();
    })
    // 如已會員登入，會跳過前面的lightbox，故於此補值以幫助後續付款方式的判斷
    if (localStorage.getItem('member') == null) {
        let member = {
            is_member: true
        };
        localStorage.setItem("member", JSON.stringify(member));
    }
    // 判斷是否以會員方式購票
    let member = JSON.parse(localStorage.getItem("member"));
    // 非會員購票，只能信用卡or第三方支付
    if (member.is_member == false) {
        // 因為非會員，要把會員票改掉
        $('.ticket div:first-child h3').text('一般票')
        $('.check section:nth-child(2) p:first-child').text('普通廳－一般票 * 1')
        $('.check section:nth-child(2) p:last-child').text('$ 300')
        $('.check h3:last-child').text('總計：$ 470')
        $('.lightbox .container h3').html('取票條碼與取餐序號<br>已寄送至您的email信箱')
        $('.money a:nth-child(1)').removeClass('btn_on').addClass('btn_ban')
        $('.money a:nth-child(2)').removeClass('btn_off').addClass('btn_on')
        $('.money a:nth-child(3)').removeClass('btn_off').addClass('btn_off')
        $('.money a:nth-child(4)').removeClass('btn_off').addClass('btn_ban')
        $('.cal').addClass('-off')
        $('.card').removeClass('-off')
    } else {// 會員購票，所有支付皆支援
        $('#email').val('iamyourmember@gmail.com')
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