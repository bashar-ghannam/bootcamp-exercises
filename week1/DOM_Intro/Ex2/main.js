const changeColor = function (i) {
  const box = document.getElementById('container').children[i];
  box.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;
};

for (let i = 0; i < 5; i++) {
  let box = document.createElement('div');
  box.setAttribute('class', 'box');
  box.style.width = '100px';
  box.style.height = '100px';
  box.innerHTML = i;
  box.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(
    16
  )}`;
  box.onmouseover = () => changeColor(i);
  box.style.marginBottom = '10px';
  document.getElementById('container').appendChild(box);
}
