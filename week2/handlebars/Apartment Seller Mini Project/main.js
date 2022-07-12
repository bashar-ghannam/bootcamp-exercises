$('button').on('click', function () {
  let address = $('#addr-input').val();
  let minPrice = $('#min-p-input').val();
  let maxPrice = $('#max-p-input').val();
  let minRooms = $('#min-r-input').val();
  let maxRooms = $('#max-r-input').val();
  let immediate = $('#immed-y');
  let parking = $('#park-y');

  let relevantApts = findRelevantApts(
    address,
    minPrice,
    maxPrice,
    minRooms,
    maxRooms,
    immediate,
    parking
  );
  renderApts(relevantApts);
});

const renderApts = function (items) {
  $('#results').empty();
  const source = $('#apartments-template').html();
  const template = Handlebars.compile(source);
  $('#results').append(template({ apartments: items }));
};

renderApts(apartments); //renders apartments when page loads
