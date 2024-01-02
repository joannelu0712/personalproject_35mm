let all_data = {
    '淑女鳥': {
        'img': '../img/02buyTicket/buyTicket/buyTicket_movie_01.jpg',
    },
    '天堂之日': {
        'img': '../img/02buyTicket/buyTicket/buyTicket_movie_02.jpg',
    },
    '藍絲絨': {
        'img': '../img/02buyTicket/buyTicket/buyTicket_movie_03.jpg',
    },
    '在車上': {
        'img': '../img/02buyTicket/buyTicket/buyTicket_movie_04.jpg',
    },
    '從海底出擊': {
        'img': '../img/02buyTicket/buyTicket/buyTicket_movie_05.jpg',
    },
    '烈血大風暴': {
        'img': '../img/02buyTicket/buyTicket/buyTicket_movie_06.jpg',
    },
    '最後一場電影': {
        'img': '../img/02buyTicket/buyTicket/buyTicket_movie_07.jpg',
    },
    '站在我這邊': {
        'img': '../img/02buyTicket/buyTicket/buyTicket_movie_08.jpg',
    },
    '銀翼殺手：終極版': {
        'img': '../img/02buyTicket/buyTicket/buyTicket_movie_09.jpg',
    }

}


$(function () {
    let ticket_info_t = JSON.parse(localStorage.getItem("ticket_info"));
    $('h3.title').text(ticket_info_t.film_name)
    $('.ticket .whitebgc:nth-child(3)>p:first-child').text(ticket_info_t.theater);

    document.querySelector('.mini_ticket .img_title').setAttribute('src', all_data[ticket_info_t.film_name].img)

    // switch (ticket_info_t.film_name) {
    //     case "淑女鳥":
    //         $('.mini_ticket .img_title').attr('src', "../img/02buyTicket/buyTicket/buyTicket_movie_01.jpg");
    //         break;
    //     case "天堂之日":
    //         $('.mini_ticket .img_title').attr('src', "../img/02buyTicket/buyTicket/buyTicket_movie_02.jpg");
    //         break;
    //     case "藍絲絨":
    //         $('.mini_ticket .img_title').attr('src', "../img/02buyTicket/buyTicket/buyTicket_movie_03.jpg");
    //         break;
    //     case "在車上":
    //         $('.mini_ticket .img_title').attr('src', "../img/02buyTicket/buyTicket/buyTicket_movie_04.jpg");
    //         break;
    //     case "從海底出擊":
    //         $('.mini_ticket .img_title').attr('src', "../img/02buyTicket/buyTicket/buyTicket_movie_05.jpg");
    //         break;
    //     case "烈血大風暴":
    //         $('.mini_ticket .img_title').attr('src', "../img/02buyTicket/buyTicket/buyTicket_movie_06.jpg");
    //         break;
    //     case "最後一場電影":
    //         $('.mini_ticket .img_title').attr('src', "../img/02buyTicket/buyTicket/buyTicket_movie_07.jpg");
    //         break;
    //     case "站在我這邊":
    //         $('.mini_ticket .img_title').attr('src', "../img/02buyTicket/buyTicket/buyTicket_movie_08.jpg");
    //         break;
    //     case "銀翼殺手：終極版":
    //         $('.mini_ticket .img_title').attr('src', "../img/02buyTicket/buyTicket/buyTicket_movie_09.jpg");
    //         break;
    // }


})