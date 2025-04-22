// Example product data (use real API or DB in production)
const products = [
    {
      name: "Yonex Astrox 99 Pro",
      price: 189.99,
      image: "https://example.com/astrox99.jpg"
    },
    {
      name: "Victor Jetspeed S12",
      price: 159.99,
      image: "https://example.com/jetspeed12.jpg"
    },
    {
      name: "Li-Ning Turbo Charging 75",
      price: 139.99,
      image: "https://example.com/turbo75.jpg"
    }
  ];

  const container = document.getElementById('productContainer');

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>$${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    `;
    container.appendChild(card);
  });
