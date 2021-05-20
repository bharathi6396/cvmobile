const URL_POPULAR ="https://api.themoviedb.org/3/movie/popular?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1e";
const URL_POPULAR_STREAMING ="https://api.themoviedb.org/3/movie/popular/streaming?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1e";
const URL_POPULAR_TV ="https://api.themoviedb.org/3/movie/popular/tv?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1e";
const URL_POPULAR_RENT ="https://api.themoviedb.org/3/movie/popular/tv?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1e";
const URL_POPULAR_THEATERS ="https://api.themoviedb.org/3/movie/popular/tv?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1e";
$(function(){
    $.ajax({
        url:URL_POPULAR,
        success: function (data, status, response) {
            console.log("films-popular", data.results);
            let filmsPopular = data.results;
            filmsPopular.forEach(element => { 
                let addBack = `<a href="film.html?filmId=${element.id}" class="movie-item"> <img src="${URL_IMAGE_PREFIX + element.poster_path}"><div id="flexbox"><div class="change"> ${element.original_title}  </div> <p> ${element.release_date}</p> </div> </a>`;
                $(".scrollmenu-popular-streaming").append(addBack);
            });    
        },
    });
    $(".tv").click(function () {
        $(".scrollmenu-popular-streaming").empty();
        $.ajax({ 
          url: URL_POPULAR_TV,
          success: function (data, statuts, response) {
            console.log("movies-s", data.results);
            let moviesStreaming = data.results;
            moviesSt.forEach(function (element) {
                let moviesTendanceToAdd = `<a href="#" class="movie-item"><img src="${URL_IMAGE_PREFIX + element.poster_path}"> <div><div> "${element.original_title}"  </div> <p> "${element.release_date}"</> </div ></a>`;
                $(".scrollmenu-tendance-week").append(moviesTendanceToAdd);
            });
        },
    });
    });

});