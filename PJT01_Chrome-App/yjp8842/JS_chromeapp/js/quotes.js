const quotes = [
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    author: "Albert Einstein",
  },
  {
    quote: "Life is what happens to us while we are making other plans.",
    author: "Allen Saunders",
  },
  {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
];

const quote = document.querySelector("#quote samp:first-child");
const author = document.querySelector("#quote samp:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;