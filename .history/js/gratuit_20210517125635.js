const URL_GRATUIT="https://developers.themoviedb.org/3/discover/movie-discover";
const URL_GRATUIT_TV="https://developers.themoviedb.org/3/discover/movie-discover";
$(function () {
    $.ajax({
        method: "GET",
        url: URL_GRA,
        success: function (data, statuts, response) {
            console.log("movies-tendance", data.results);
            let moviesTendance = data.results;
            moviesTendance.forEach(function (element) {
                let moviesTendanceToAdd = `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${URL_IMAGE_PREFIX + element.poster_path}"> <div id="flexbox"><div class="change"> ${element.original_title}  </div> <p> ${element.release_date}</p> </div> </a>`;
                $(".scrollmenu-tendance-day").append(moviesTendanceToAdd);
            });
        },
    });
    $(".week").click(function () {
        $(".scrollmenu-tendance-day").empty();
        $.ajax({
            url: URL_TENDANCE_FILM_WEEK,
            success: function (data, statuts, response) {
                console.log("movies-tendance", data.results);
                let moviesTendance = data.results;
                moviesTendance.forEach(function (element) {
                    let moviesTendanceToAdd = `<a href="#" class="movie-item"><img src="${URL_IMAGE_PREFIX + element.poster_path}"> <div><div> "${element.original_title}"  </div> <p> "${element.release_date}"</> </div ></a>`;
                    $(".scrollmenu-tendance-week").append(moviesTendanceToAdd);
                });
            },
        });
    });
    $(".day").click(function () {
        //$(".scrollmenu-tendance-week").hide();
        $(".scrollmenu-tendance-week").empty();
        $.ajax({
            url: URL_TENDANCE_FILM,
            success: function (data, statuts, response) {
                console.log("movies-tendance", data.results);
                let moviesTendance = data.results;
                moviesTendance.forEach(function (element) {
                    let moviesTendanceToAdd = `<a href="#" class="movie-item"><img img src="${URL_IMAGE_PREFIX + element.poster_path}"> <div><div> ${element.original_title}  </div> <p> ${element.release_date}</> </div ></a>`;
                    $(".scrollmenu-tendance-day").append(moviesTendanceToAdd);
                });
            },
        });
        //$(".scrollmenu-tendance-day").show();
    });
});