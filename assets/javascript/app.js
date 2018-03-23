window.onload = (function() {

$(".giphyButtons").on('click',function(){
//console.log("this on click is working")
//console.log($(this).attr("data-emotions"))
var emotions=$(this).attr("data-emotions")
console.log(emotions)
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    emotions + "&api_key=GC4TiZqDPoMgUqQM6xKHmkTZnEec2Sdh&limit=10";

$.ajax({
    url: queryURL,
    method:"GET"

}).done(function(response){
    console.log(response.data)
    console.log(response.data[0].images.fixed_height.url)
})
})


})