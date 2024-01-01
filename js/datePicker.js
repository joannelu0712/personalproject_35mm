$(function () {


    $('.lightbox i').click(function (e) {
        console.log(e.target);
        $('.lightbox label+input').mouseover();

        // $('.lightbox label+input').focus(function () {
        //     console.log('wwww');
        // })
    })

})
// document.querySelector('.lightbox label+input').oninput = function () {
//     console.log(this.value)
// };