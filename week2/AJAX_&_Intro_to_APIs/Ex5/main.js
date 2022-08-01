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
  $('input').val('');
};

$('button').click(function () {
  const gifName = $('input').val();
  const API_KEY = 'RUzNaymWvDEGHc7vcQQnV8YVUMTB7afr';
  $.ajax({
    method: 'GET',
    url: `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=1&q=${gifName}`,
    success: render,
    error: function (xhr, text, error) {
      console.log(text);
    },
  });
});


