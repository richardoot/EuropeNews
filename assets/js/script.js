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

        //// Head news
        //Text
        var main_title = document.getElementsByClassName('top-news-title')[0];
        main_title.innerHTML = objectJson.articles[0].title;

        //Image 
        var image = objectJson.articles[0].urlToImage;
        var container_main_article = document.getElementsByClassName('top-news-div')[0];
        container_main_article.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)),url(${image})`;
        

        ////Others news
        var news_container = document.getElementsByClassName('news-container')[0];
        var number_rows = news_container.childNodes.length;
        console.log('nb elements' + number_rows);
        
        //Effacer les démos
        for(let i = 0 ; i < number_rows ; i++){
            news_container.removeChild(news_container.childNodes[i]);
        }

        //Créer les nouveaux
        var row_new = document.createElement('div');
        row_new.style.marginBottom = '15';
        row_new.setAttribute('class','row');

        for(let j=1 ; j < 4 ; j++){

            var column_news= document.createElement('div');
            column_news.setAttribute('class','col-sm-12 col-lg-6 col-xl-4');

            var card_news= document.createElement('div');
            card_news.setAttribute('class','card');
            card_news.setAttribute('style','position: static;z-index: -1;');

            var image_news= document.createElement('div');
            image_news.setAttribute('class','news-top-image');
            image_news.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.3)),url(${objectJson.articles[j].urlToImage})`;

            var card_body_news= document.createElement('div');
            card_body_news.setAttribute('style','position: static;');

            var card_title_news= document.createElement('h4');
            card_title_news.setAttribute('class','card-title');
            card_title_news.innerHTML = objectJson.articles[j].title;

            var card_subtitle_news= document.createElement('h6');
            card_subtitle_news.setAttribute('class','text-muted card-subtitle mb-2');
            card_subtitle_news.innerHTML = objectJson.articles[j].author;

            var card_text_news= document.createElement('p');
            card_text_news.setAttribute('class','card-text');
            card_text_news.innerHTML = objectJson.articles[j].description;

            card_body_news.appendChild(card_title_news);
            card_body_news.appendChild(card_subtitle_news);
            card_body_news.appendChild(card_text_news);

            card_news.appendChild(image_news);
            card_news.appendChild(card_body_news);
    
            column_news.appendChild(card_news);

            row_new.appendChild(column_news);
            news_container.appendChild(row_new);
        }

      };
    request.send();
}
window.onload=show_main_article;