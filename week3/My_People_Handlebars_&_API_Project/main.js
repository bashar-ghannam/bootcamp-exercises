const render = function (results) {
  const source = $('#MyPeople-template').html();
  const template = Handlebars.compile(source);
  let newHTML = template({ results });
  $('.grid-container').empty();
  $('.grid-container').append(newHTML);
};

$.ajax({
  method: 'GET',
  url: 'https://randomuser.me/api/?results=5',
  success: render,
  error: function (xhr, text, error) {
    console.log(text);
  },
});

$('.grid-container').on('mouseover', '.grid-item', function () {
  $(this).css('background-color', 'rgb(63, 141, 211)');
  setTimeout(function () {
    $('.grid-item').css('background-color', 'rgba(212, 202, 202, 0.8)');
  }, 1000);
});
