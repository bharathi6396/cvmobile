const URL_TRAILERS = "https://api.themoviedb.org/3/movie/cat/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";
const URL_TRAILERS_STREAMING = "https://api.themoviedb.org/3/movie/popular/streaming?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1e";
const URL_TRAILERS_TV = "https://api.themoviedb.org/3/movie/popular/tv?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1e";
const URL_TRAILERS_RENT = "https://api.themoviedb.org/3/movie/popular/tv?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1e";
const URL_TRAILERS_THEATERS = "https://api.themoviedb.org/3/movie/popular/tv?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1e";
$(function () {
    $.ajax({
        url: URL_TRAILERS,
        success: function (data, status, response) {
            console.log("films-trailers", data.results);
            let filmstrailers = data.results;
            filmstrailers.forEach(element => {
                let addBack = `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${URL_IMAGE_PREFIX + element.poster_path}"><div id="flexbox"><div class="change"> ${element.original_title}  </div> <p> ${element.release_date}</p> </div> </a>`;
                $(".scrollside-trailers-streaming ").append(addBack);
            });
        },
    });
    $(".tv").click(function () {
        $(".scrollmenu-popular-streaming").empty();
        $.ajax({
            url: URL_POPULAR_TV,
            success: function (data, statuts, response) {
                console.log("movies-ontv", data.results);
                let moviesOntv = data.results;
                moviesOntv.forEach(function (element) {
                    let ToAdd = `<a href="#" class="movie-item"><img src="${URL_IMAGE_PREFIX + element.poster_path}"> <div><div> "${element.original_title}"  </div> <p> "${element.release_date}"</> </div ></a>`;
                    $(".scrollmenu-popular-onTV").append(ToAdd);
                });
            },
        });
    });
    $(".rent").click(function () {
        $(".scrollmenu-popular-onTV").empty();
        $.ajax({
            url: URL_POPULAR_RENT,
            success: function (data, statuts, response) {
                console.log("movies-onrent", data.results);
                let moviesRent = data.results;
                moviesRent.forEach(function (element) {
                    let ToAdd = `<a href="#" class="movie-item"><img src="${URL_IMAGE_PREFIX + element.poster_path}"> <div><div> "${element.original_title}"  </div> <p> "${element.release_date}"</> </div ></a>`;
                    $(".scrollmenu-popular-forRent").append(ToAdd);
                });
            },
        });
    });
    $(".theatres").click(function () {
        $(".scrollmenu-popular-forRent").empty();
        $.ajax({
            url: URL_POPULAR_THEATERS,
            success: function (data, statuts, response) {
                console.log("movies-ontheatres", data.results);
                let moviesTheatres = data.results;
                moviesTheatres.forEach(function (element) {
                    let ToAdd = `<a href="#" class="movie-item"><img src="${URL_IMAGE_PREFIX + element.poster_path}"> <div><div> "${element.original_title}"  </div> <p> "${element.release_date}"</> </div ></a>`;
                    $(".scrollmenu-popular-inTheaters").append(ToAdd);
                });
            },
        });
    });

});