const NEWS_API = globalVariable.NEWS_API;

var newsURL = 'https://newsapi.org/v2/top-headlines?' + 'country=kr&' + `apiKey=${NEWS_API}`;
var req = new Request(newsURL);

console.log(newsURL);
console.log(req);

fetch(req)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const newsContent = document.querySelector(".news__content");
        const newsList = document.createElement("ul");
        newsContent.appendChild(newsList);
        const articleOne = document.createElement("li");
        newsList.appendChild(articleOne);
        articleOne.innerText = data.articles[0].title;
        const articleTwo = document.createElement("li");
        newsList.appendChild(articleTwo);
        articleTwo.innerText = data.articles[1].title;
        const articleThree = document.createElement("li");
        newsList.appendChild(articleThree);
        articleThree.innerText = data.articles[2].title;
    })