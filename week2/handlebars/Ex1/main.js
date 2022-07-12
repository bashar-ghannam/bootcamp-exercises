const classmates = [
  {
    name: 'That on gal',
    description: 'Always has the ansswer',
    socialNetwork: true,
  },
  {
    name: 'The weird dude',
    description: 'Quick with a smile',
    socialNetwork: false,
  },
  { name: 'Taylor', description: 'Just Taylor', socialNetwork: true },
];

const source = $('#classmates-template').html();
const template = Handlebars.compile(source);
let classmatesHtml = template({ classmates });
$('#classmates').append(classmatesHtml);

//Ex2 : Multiple Templates
const animals = [
  'Rabbit',
  'Giraffe',
  'Kangaroo',
  'Whale',
  'Seagull',
  'Caterpie',
];

const languages = ['French', 'Spanish', 'Togolese', 'Javascript', 'Uruk'];

const render = function (items, htmlSupplier) {
  const source = $('#multi-template').html();
  const template = Handlebars.compile(source);
  let newHTML = template({ items });
  htmlSupplier.append(newHTML);
};

render(animals, $('#animals'));
render(languages, $('#languages'));
