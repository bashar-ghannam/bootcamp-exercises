const render = function (section) {
  const About = document.getElementById('About');
  const Products = document.getElementById('Products');
  const Cart = document.getElementById('Cart');
  if (section == 'About') {
    About.style.display = 'block';
    Products.style.display = 'none';
    Cart.style.display = 'none';
  } else if (section == 'Products') {
    About.style.display = 'none';
    Products.style.display = 'block';
    Cart.style.display = 'none';
  } else if (section == 'Cart') {
    About.style.display = 'none';
    Products.style.display = 'none';
    Cart.style.display = 'block';
  }
};

function renderProduycts() {
  const products = JSON.parse(localStorage.getItem('products'));
  const Products = document.getElementById('Products');
  const content = products.map((product) => {
    return `

    `;
  });
  Products.innerHTML += content;
}

renderProduycts();
