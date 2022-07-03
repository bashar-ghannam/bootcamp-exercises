const playingField = document.getElementById('ball');
console.log(playingField.style.backgroundColor);
playingField.style.backgroundColor = 'yellow';

const moveRight = function () {
  const ball = document.getElementById('ball');
  let left = parseInt(ball.style.left) || 0;
  left += 15;
  ball.style.left = left + 'px';
};

const moveDown = function () {
  const ball = document.getElementById('ball');
  let left = parseInt(ball.style.top) || 0;
  left += 15;
  ball.style.top = left + 'px';
};

const moveLeft = function () {
  const ball = document.getElementById('ball');
  let left = parseInt(ball.style.right) || 0;
  left += 15;
  ball.style.right = left + 'px';
};

const moveUp = function () {
  const ball = document.getElementById('ball');
  let left = parseInt(ball.style.bottom) || 0;
  left += 15;
  ball.style.bottom = left + 'px';
};

const header = document.createElement('h1');

header.innerHTML = 'The Best Game Ever';
header.style.color = '#c0392b';
header.style.fontFamily = 'Helvetica';
document.body.appendChild(header);

const subHeader = document.createElement('h2');
subHeader.innerHTML = 'Game by : Bashar Ghannam,';
subHeader.setAttribute('class', 'subHeader');
document.body.appendChild(subHeader);
