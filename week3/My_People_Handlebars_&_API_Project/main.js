const render = function (results) {
  const source = $('#MyPeople-template').html();
  const template = Handlebars.compile(source);
  let newHTML = template(results);
  $('.grid-container').empty();
  $('.grid-container').append(newHTML);
};

$.ajax({
  method: 'GET',
  url: 'https://randomuser.me/api/?results=10',
  success: render,
  error: function (xhr, text, error) {
    console.log(text);
  },
});
