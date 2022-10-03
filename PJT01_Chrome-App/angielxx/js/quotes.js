const quote_text = document.querySelector('#quote p')
const quote_author = document.querySelector('#quote span')

// 0 ~ 1642
const length = 1643
let choice = Math.floor(Math.random() * length)

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let text = data[choice]['text']
    let author = data[choice]['author']
    quote_text.innerText = text
    quote_author.innerText = author
  });