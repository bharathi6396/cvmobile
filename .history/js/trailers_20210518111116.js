const URL_YOUTUBE = "https://www.youtube.com/embed/";
const URL_TRAILERS = "https://api.themoviedb.org/3/movie/35/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";
const URL_TRAILERS = "https://api.themoviedb.org/3/movie/35/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";
const URL_TRAILERS = "https://api.themoviedb.org/3/movie/35/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";
const URL_TRAILERS = "https://api.themoviedb.org/3/movie/35/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";
const URL_TRAILERS = "https://api.themoviedb.org/3/movie/35/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";
const URL_TRAILERS = "https://api.themoviedb.org/3/movie/35/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";
const URL_TRAILERS = "https://api.themoviedb.org/3/movie/35/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";
const URL_TRAILERS = "https://api.themoviedb.org/3/movie/35/videos?api_key=b8e16ff25f44004fe2ab5dedc9e0453e&language=en-US";

$(function () {
    $.ajax({
        url: URL_TRAILERS,
        success: function (data, status, response) {
            console.log("films-trailers", data);
            let filmstrailers = data.results;
            filmstrailers.forEach(element => {
                let addBack = `<a href="#" class="movie-item"><iframe src="${URL_YOUTUBE + element.key}"frameborder="1" allowfullscreen></iframe><div><div> "${element.name}"  </div> <p> "${element.site}"</p> p> "${element.type}"</p> </div ></a>`;
                $(".scrollside-trailers").append(addBack);
            });
        },
    });
    

});