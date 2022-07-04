const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
};

const name = prompt('Please enter the name for your reservation');

const arr = Object.keys(reservations).map((element) => {
  return element.toUpperCase();
});
if (arr.includes(name.toUpperCase()) == true) {
  for (const [key, value] of Object.entries(reservations)) {
    if (name.toUpperCase() == key.toUpperCase()) {
      if (value.claimed == false) {
        console.log('Welcome,' + key);
      } else {
        console.log('Hmm, someone already claimed this reservation');
      }
    }
  }
} else {
  console.log('You have no reservation');
  var element = {};
  element.claimed = true;
  reservations[name] = element;
  console.log(reservations);
}
