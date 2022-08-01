const API_KEY = 'RUzNaymWvDEGHc7vcQQnV8YVUMTB7afr';

let p = $.get('/randomWord');

p.then(function (word) {
  let book = $.get(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
  );
  let gif = $.get(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=1&q=${word}`
  );
  Promise.all([book, gif]).then(function (results) {
    $('.book').append(`<div> ${results[0].items[0].volumeInfo.title} </div>`);
    render(results[1]);
  });
});

const render = function (res) {
  $('.img').empty();
  let fig = document.createElement('figure');
  let img = document.createElement('img');
  let fc = document.createElement('figcaption');
  img.src = res.data[0].images.downsized.url;
  img.alt = res.data[0].title;
  fc.textContent = res.data[0].title;
  fig.appendChild(img);
  fig.appendChild(fc);
  $('.img').append(fig);
};
