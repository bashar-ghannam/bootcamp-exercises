const fetch = function () {
  const ISBN = $('input').val();
  if (ISBN) {
    $.ajax({
      method: 'GET',
      url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${ISBN}`,
      success: function (data) {
        $('#container div').empty();
        $('#container div').append(
          `<div>${data.items[0].volumeInfo.title}</div>`
        );
        $('input').val('');
      },
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  } else {
    $('#container div').empty();
    $('#container div').append(`<div style=color:red;>Enter ISBN !!</div>`);
    setTimeout(function () {
      $('#container div').empty();
    }, 1000);
  }
};
