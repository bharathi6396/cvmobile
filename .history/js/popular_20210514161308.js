const URL_POPULAR ="https://api.themoviedb.org/3/movie/popular?api_key=b8e16ff25f44004fe2ab5dedc9e0453e";
$(function(){
    console.log();
    $.ajax({
        url:URL_POPULAR,
        success: function (data, status, response) {
            console.log(data.results);
            let popularFilms = data.results;
            popularFilms.forEach(element => { 
                let addImage = `<img src="${URL_IMAGE_PREFIX + element.poster_path}">`;
                let addName = `<h2 ="${URL_POPULAR + }`
            })
            
        }

    })
}