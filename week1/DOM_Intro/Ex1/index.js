const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const printMsg = function (msg) {
  document.getElementById('validation').innerHTML = msg;
  setTimeout(function () {
    document.getElementById('validation').innerHTML = '';
  }, 2000);
};

const checkReservation = function () {
  let name = document.getElementById('name').value;
  if (name.trim() == '') {
    printMsg('Please enter reservation name.');
  } else {
    let flag = false;
    for (const [key, value] of Object.entries(reservations)) {
      if (reservations.hasOwnProperty(key)) {
        if (key.toLowerCase() == name.toLowerCase()) {
          if (value.claimed == false) {
            printMsg('Welcome,' + key);
          } else {
            printMsg('Hmm, someone already claimed this reservation');
          }
          flag = true;
        }
      }
    }
    if (!flag) {
      printMsg('You have no reservation');
    }
  }
  document.getElementById('name').value = '';
};
