const render = function ({ items }) {
  $('#container').empty();
  for (const item of items) {
    $('#container').append(`
    <div>Title : ${item.volumeInfo.title}</div>
    <div>Author : ${item.volumeInfo.authors[0]}</div>
    <div>ISBN : ${item.volumeInfo.industryIdentifiers[1].identifier}</div>
    <br>
    `);
  }
};

$.ajax({
  method: 'GET',
  url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:9782806269171',
  success: render,
  error: function (xhr, text, error) {
    console.log(text);
  },
});
