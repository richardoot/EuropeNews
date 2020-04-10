function show_main_article(){
    console.log("Hello");    
    var country = "fr";
    var url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=156ffe4db7584cecaa460f9c19a03a9e`;
    var request = new XMLHttpRequest();
    request.responseType = 'text';
    request.open('GET', url);
    request.onload = function() {
        var objectJson = JSON.parse(request.response);
        //Logs
        console.log("Nombre d'articles : " + objectJson.totalResults); 

        //Text
        var main_title = document.getElementsByClassName('top-news-title')[0];
        main_title.innerHTML = objectJson.articles[0].title;

        //Image 
        var image = objectJson.articles[0].urlToImage;
        var container_main_article = document.getElementsByClassName('top-news-div')[0];
        container_main_article.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)),url(${image})`;
        
      };
    request.send();
}
window.onload=show_main_article;