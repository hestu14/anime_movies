var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/4/list/143529?api_key=7de13aede41e0e17a4104ffca73323da&page=1",
    "method": "GET",
    "headers": {
        "content-type": "application/json;charset=utf-8",
        "authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGUxM2FlZGU0MWUwZTE3YTQxMDRmZmNhNzMzMjNkYSIsInN1YiI6IjVlYzc0ZmFiZDIxNDdjMDAyM2JlYjA5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JCgsMXm5wbYGA6lcd7_Yq970YK-HZEsyec87wgiF-9c"
    },
    "processData": false,
    "data": "{}"
}

$.ajax(settings).done(function (response) {
    console.log(response);

    const film1_title = document.getElementById('film1');
    const title_japan1 = document.getElementById('japan_title1')
    film1_title.innerHTML = response.results[0].title + " (" + response.results[0].release_date.slice(0, 4) + ") <br>";
    title_japan1.innerHTML = response.results[0].original_title;

    const film2_title = document.getElementById('film2');
    const title_japan2 = document.getElementById('japan_title2')
    film2_title.innerHTML = response.results[1].title + " (" + response.results[1].release_date.slice(0, 4) + ") <br>";
    title_japan2.innerHTML = response.results[1].original_title;

    const film3_title = document.getElementById('film3');
    const title_japan3 = document.getElementById('japan_title3')
    film3_title.innerHTML = response.results[2].title + " (" + response.results[2].release_date.slice(0, 4) + ") <br>";
    title_japan3.innerHTML = response.results[2].original_title;

    const film4_title = document.getElementById('film4');
    const title_japan4 = document.getElementById('japan_title4')
    film4_title.innerHTML = response.results[3].title + " (" + response.results[3].release_date.slice(0, 4) + ") <br>";
    title_japan4.innerHTML = response.results[3].original_title;

    const film5_title = document.getElementById('film5');
    const title_japan5 = document.getElementById('japan_title5')
    film5_title.innerHTML = response.results[4].title + " (" + response.results[4].release_date.slice(0, 4) + ") <br>";
    title_japan5.innerHTML = response.results[4].original_title;

    const film6_title = document.getElementById('film6');
    const title_japan6 = document.getElementById('japan_title6')
    film6_title.innerHTML = response.results[5].title + " (" + response.results[5].release_date.slice(0, 4) + ") <br>";
    title_japan6.innerHTML = response.results[5].original_title;

    const film7_title = document.getElementById('film7');
    const title_japan7 = document.getElementById('japan_title7')
    film7_title.innerHTML = response.results[6].title + " (" + response.results[6].release_date.slice(0, 4) + ") <br>";
    title_japan7.innerHTML = response.results[6].original_title;

    const film8_title = document.getElementById('film8');
    const title_japan8 = document.getElementById('japan_title8')
    film8_title.innerHTML = response.results[7].title + " (" + response.results[7].release_date.slice(0, 4) + ") <br>";
    title_japan8.innerHTML = response.results[7].original_title;

    const film9_title = document.getElementById('film9');
    const title_japan9 = document.getElementById('japan_title9')
    film9_title.innerHTML = response.results[8].title + " (" + response.results[8].release_date.slice(0, 4) + ") <br>";
    title_japan9.innerHTML = response.results[8].original_title;

    const film10_title = document.getElementById('film10');
    const title_japan10 = document.getElementById('japan_title10')
    film10_title.innerHTML = response.results[9].title + " (" + response.results[9].release_date.slice(0, 4) + ") <br>";
    title_japan10.innerHTML = response.results[9].original_title;

    const img_default = "https://image.tmdb.org/t/p/w500/"
    const link_default = "https://www.themoviedb.org/movie/"

    var film_src1 = document.createElement("img");
    var film_src2 = document.createElement("img");
    var film_src3 = document.createElement("img");
    var film_src4 = document.createElement("img");
    var film_src5 = document.createElement("img");
    var film_src6 = document.createElement("img");
    var film_src7 = document.createElement("img");
    var film_src8 = document.createElement("img");
    var film_src9 = document.createElement("img");
    var film_src10 = document.createElement("img");

    film_src1.src = img_default + response.results[0].poster_path;
    film_src2.src = img_default + response.results[1].poster_path;
    film_src3.src = img_default + response.results[2].poster_path;
    film_src4.src = img_default + response.results[3].poster_path;
    film_src5.src = img_default + response.results[4].poster_path;
    film_src6.src = img_default + response.results[5].poster_path;
    film_src7.src = img_default + response.results[6].poster_path;
    film_src8.src = img_default + response.results[7].poster_path;
    film_src9.src = img_default + response.results[8].poster_path;
    film_src10.src = img_default + response.results[9].poster_path;



    film_src1.onclick = function() {
        window.open(link_default + response.results[0].id, '_blank')
    };

    film_src2.onclick = function() {
        window.open(link_default + response.results[1].id, '_blank')
    };

    film_src3.onclick = function() {
        window.open(link_default + response.results[2].id, '_blank')
    };

    film_src4.onclick = function() {
        window.open(link_default + response.results[3].id, '_blank')
    };

    film_src5.onclick = function() {
        window.open(link_default + response.results[4].id, '_blank')
    };

    film_src6.onclick = function() {
        window.open(link_default + response.results[5].id, '_blank')
    };

    film_src7.onclick = function() {
        window.open(link_default + response.results[6].id, '_blank')
    };

    film_src8.onclick = function() {
        window.open(link_default + response.results[7].id, '_blank')
    };

    film_src9.onclick = function() {
        window.open(link_default + response.results[8].id, '_blank')
    };

    film_src10.onclick = function() {
        window.open(link_default + response.results[9].id, '_blank')
    };


    film_src1.href = "https://www.themoviedb.org/movie/" + response.results[0].id;

    var film1_poster = document.getElementById("film1_img");
    var film2_poster = document.getElementById("film2_img");
    var film3_poster = document.getElementById("film3_img");
    var film4_poster = document.getElementById("film4_img");
    var film5_poster = document.getElementById("film5_img");
    var film6_poster = document.getElementById("film6_img");
    var film7_poster = document.getElementById("film7_img");
    var film8_poster = document.getElementById("film8_img");
    var film9_poster = document.getElementById("film9_img");
    var film10_poster = document.getElementById("film10_img");

    film1_poster.appendChild(film_src1);
    film2_poster.appendChild(film_src2);
    film3_poster.appendChild(film_src3);
    film4_poster.appendChild(film_src4);
    film5_poster.appendChild(film_src5);
    film6_poster.appendChild(film_src6);
    film7_poster.appendChild(film_src7);
    film8_poster.appendChild(film_src8);
    film9_poster.appendChild(film_src9);
    film10_poster.appendChild(film_src10);

    const deskripsi = document.getElementById('deskripsi');
    deskripsi.innerHTML = response.name;

    const deskripsi_header = document.getElementById('deskripsi_header');
    deskripsi_header.innerHTML = response.description;
});


