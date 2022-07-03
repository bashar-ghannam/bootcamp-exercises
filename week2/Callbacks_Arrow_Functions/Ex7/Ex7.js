const explode = (lightFunc, soundFunc, sound) => {
  lightFunc();
  soundFunc(sound);
};

const shineLight = () =>
  (document.getElementById('box').style.backgroundColor = 'yellow');

const makeSound = (sound) => alert(sound);

explode(shineLight, makeSound, 'BOOM');
