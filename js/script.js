"use strict";

var quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
var tweetLink = "https://twitter.com/intent/tweet?text=";
var paragraph = document.getElementById("joke");
var button = document.getElementById("random-joke");

button.addEventListener("click", function() {
  getJoke();
});

// Get quote function
function getQuote() {
  fetch(quoteUrl, {cache: "no-store"})
    .then(function(resp) {
      return resp.json();
    })
    .then(createTweet);
}

// Create tweet
function createTweet(input) {
  var data = input[0];
  var dataElement = document.createElement("div");
  dataElement.innerHTML = data.content;
  var quoteText = dataElement.innerText.trim();
  var quoteAuthor = data.title;

  if (!quoteAuthor.length) {
    quoteAuthor = "Unknow author";
  }

  var tweetText = "Quote of the day - " + quoteText + ". Author: " + quoteAuthor;
}

window.onload = getJoke();