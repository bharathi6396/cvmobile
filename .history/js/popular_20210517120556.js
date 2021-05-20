const URL_POPULAR ="https://api.themoviedb.org/3/movie/popular?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1e";
const URL_POPULAR_STREAMING ="https://api.themoviedb.org/3/movie/popular/streaming?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1e";
const URL_POPULAR_TV ="https://api.themoviedb.org/3/movie/popular/tv?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1e";
const URL_POPULAR_RENT ="https://api.themoviedb.org/3/movie/popular/tv?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1e";
const URL_POPULAR_THEATERS ="https://api.themoviedb.org/3/movie/popular/tv?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US&page=1e";
$(function(){
    $.ajax({
        url:URL_POPULAR,
        success: function (data, status, response) {
            console.log("movies-popular", data.results);
            let popularFilms = data.results;
            popularFilms.forEach(element => { 
                let addBack = `<img src="${URL_IMAGE_PREFIX + element.poster_path}">`;
                let addh2 = `<h2 ="${ element.name}">`;
                let addDate = `<p ="${ element.release_date}">`;
                $(".scrollmenu").append(addBack);
                $(".scrollmenu").append(addh2);
                $(".scrollmenu").append(addDate);

            });
            
        }

    });
});