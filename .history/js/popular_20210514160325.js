const URL_POPULAR ="https://api.themoviedb.org/3/movie/popular?api_key=b8e16ff25f44004fe2ab5dedc9e0453e";
$(function(){
    console.log();
    $.ajax({
        url:URL_POPULAR,
        success: function (data, status, response) {
            console.log
            
        }

    })
}