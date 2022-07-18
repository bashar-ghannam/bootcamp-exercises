let wisdoms = [];

const render = function (data) {
  $('.wisdoms').text('');
  if (!data || data.length == 0) {
    $('.wisdoms').append('no items !!');
  } else {
    data.map((item) => {
      $('.wisdoms').append(
        `
       <div>
        <button class=removeWisdom>X</button>
        <span> ${item.text}</span>
       </div>
      `
      );
    });
  }
};

$('.addBtn').click(function () {
  const wisdom = $('#wisdom').val();
  if (wisdom) {
    let data = JSON.parse(localStorage.wisdoms || '[]');
    let obj = { text: wisdom };
    data.push(obj);
    render(data);
    localStorage.wisdoms = JSON.stringify(data);
  } else {
    $('.msgError').text('empty input !!');
    setTimeout(function () {
      $('.msgError').text('');
    }, 1000);
  }
});

$('.deleteBtn').click(function () {
  localStorage.removeItem('wisdoms');
  render();
});

$('.wisdoms').on('click', '.removeWisdom', function () {
  const value = $(this).closest('div').find('span').text().trim();
  let data = JSON.parse(localStorage.wisdoms || '[]');
  data = data.filter((wisdom) => wisdom.text != value);
  render(data);
  localStorage.wisdoms = JSON.stringify(data);
});

localStorage.wisdoms = JSON.stringify(wisdoms);
render();
