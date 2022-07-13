const render = function (res) {
  let fig = document.createElement('figure');
  let img = document.createElement('img');
  let fc = document.createElement('figcaption');
  img.src = res.data[0].images.downsized.url;
  img.alt = res.data[0].title;
  fc.textContent = res.data[0].title;
  fig.appendChild(img);
  fig.appendChild(fc);
  document.querySelector('#container').insertAdjacentElement('afterbegin', fig);
};

$.ajax({
  method: 'GET',
  url: 'https://api.giphy.com/v1/gifs/search?api_key=RUzNaymWvDEGHc7vcQQnV8YVUMTB7afr&limit=1&q=cat',
  success: render,
  error: function (xhr, text, error) {
    console.log(text);
  },
});
