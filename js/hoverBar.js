$(function () {
    const movieName = ["Days of Heaven (1978)", "Blue Velvet (1986)", "Drive My Car (2021)", "Das Boot (1981)", "Mississipi Burning (1988)", "The Last Picture Show (1971)", "Stand By Me (1986)", "Blade Runner: The Final Cut (1982)"];
    const movieText = ["天堂之日", "藍絲絨", "在車上", "從海底出擊", "烈血大風暴", "最後一場電影", "站在我這邊", "銀翼殺手: 終極版"];
    let changeTop = document.getElementsByClassName('top')[0];
    let changeName = document.getElementsByClassName('additional')[0].firstElementChild;
    let changeText = document.getElementsByClassName('additional')[0].lastElementChild;
    let hover_relDefault = document.getElementsByClassName('index')[0];
    hover_relDefault.addEventListener('mouseover', function () {
        changeTop.setAttribute("style", "background-image: url(img/01mainpage/main_top/main_fullscreen_00.jpg);");
        changeName.innerText = "Lady Bird (2017)";
        changeText.innerText = "淑女鳥";
    })
    for (let i = 0; i < 8; i++) {
        let hover_rel = document.getElementsByClassName("hover_bar")[0].getElementsByTagName("a")[i];
        hover_rel.addEventListener('mouseover', function () {
            let n = i + 1;
            // console.log(this);
            changeTop.setAttribute("style", `background-image: url(img/01mainpage/main_top/main_top_0${n}_B.jpg);`);
            changeName.innerText = movieName[i];
            changeText.innerText = movieText[i];
        });
    }



})

