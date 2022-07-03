const printMsg = function (msg) {
  document.getElementById('result').innerHTML = msg;
  setTimeout(function () {
    document.getElementById('result').innerHTML = '';
  }, 2000);
};

const print = function () {
  const name = document.getElementById('name').value;
  const salary = document.getElementById('salary').value;
  const birthday = document.getElementById('birthday').value;
  const phone = document.getElementById('phone').value;
  if (name.trim() == '') {
    printMsg('name is missing');
  } else if (name.trim().length < 2) {
    printMsg('name length must more than 2 chars');
  } else if (salary.trim() == '') {
    printMsg('salary is missing');
  } else if (parseInt(salary) < 10000 || parseInt(salary) > 16000) {
    printMsg('Salary must be greater than 10,000 but less than 16,000');
  } else if (birthday.trim() == '') {
    printMsg('birthday is missing');
  } else if (phone.trim() == '') {
    printMsg('phone is missing');
  } else if (phone.length < 10) {
    printMsg('Phone must be 10 digits long');
  } else {
    document.getElementById('form').style.display = 'none';
    var z = document.createElement('h1');
    z.innerHTML = 'welcome';
    document.body.appendChild(z);
  }
};
