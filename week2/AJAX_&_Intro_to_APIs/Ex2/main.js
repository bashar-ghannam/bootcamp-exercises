const render = function (data) {
  $('#container .render').empty();
  $('#container .render').append(
    `<div>book by ${data.items[0].volumeInfo.authors[0]}</div>`
  );
  $('#value').val('');
  $('input[name=Type]').prop('checked', false);
};

const fetch = function () {
  const queryValue = $('#value').val();
  const queryType = $('input[name="Type"]:checked').val();
  if (queryValue && queryType) {
    $.ajax({
      method: 'GET',
      url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
      success: render,
      error: function (xhr, text, error) {
        console.log(text);
      },
    });
  } else {
    $('#container .render').empty();
    $('#container .render').append(
      `<div style=color:red;>Enter value ot type !!</div>`
    );
    setTimeout(function () {
      $('#container .render').empty();
    }, 1000);
  }
};
