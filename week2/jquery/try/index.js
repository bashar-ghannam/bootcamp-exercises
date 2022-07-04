$('.feedme').on('click', function () {
  $('body').append(`<div class=feedme> ${$(this).text()} </div>`); //use template literals and $(this)
});
