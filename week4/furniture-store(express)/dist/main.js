$('#search-but').on('click', function () {
  input = $('#search').val();
  $.get(`/priceCheck/${input}`, function (data) {
    $('#result1').append(`<div>price :${data.price}</div>`);
  });
  $('input').val('');
});

// $('#buy-but').on('click', function () {
//   input = $('#buy').val();
//   $.get(`/buy/${input}`, function (data) {
//     $('#result2').append(`<div>Inventory :${data.inventory}</div>`);
//   });
//   $('input').val('');
// });

$('#buy-but').on('click', function () {
  input = $('#buy').val();
  $.get(`buy/${input}`, function (data) {
    $('#result2').append(
      `<div>Congratulations, youve just bought ${data.name} for ${data.price}. There are
      ${data.inventory} left now in the store</div>`
    );
  });
  $('input').val('');
});
