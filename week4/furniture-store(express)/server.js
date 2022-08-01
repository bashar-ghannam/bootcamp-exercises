const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));

let store = [
  { name: 'table', inventory: 3, price: 800 },
  { name: 'chair', inventory: 16, price: 120 },
  { name: 'couch', inventory: 1, price: 1200 },
  { name: 'picture frame', inventory: 31, price: 70 },
];

// app.get('/', function (request, response) {
//   response.send({ Text: 'Server is up and running smoothly' });
// });

// app.get('/priceCheck/:name', function (request, response) {
//   const name = request.params.name;
//   let s = store.find((element) => element.name == name);
//   response.send({ price: s.price });
// });

// app.get('/buy/:name', function (request, response) {
//   const name = request.params.name;
//   let storeItem = null;
//   store = store.map((element) => {
//     if (element.name == name) {
//       element.inventory--;
//       storeItem = element;
//     }
//   });
//   console.log(storeItem);
//   response.send({ inventory: storeItem.inventory });
// });

app.get('/buy/:name', function (request, response) {
  const name = request.params.name;
  let storeItem = null;
  store = store.map((element) => {
    if (element.name == name) {
      element.inventory--;
      storeItem = element;
    }
  });
  response.send(storeItem);
});

app.get('/sale', function (request, response) {
  const isAdmin = request.query.admin;
  let str = '';
  if (isAdmin === 'true') {
    store = store.map((element) => {
      if (element.inventory > 10) {
        element.price -= element.price * 0.5;
        str += element.price + ' ';
      }
    });
  }
  response.send(str);
});

const port = 3000;
app.listen(port, function () {
  console.log(`Running server on port ${port}`);
});
