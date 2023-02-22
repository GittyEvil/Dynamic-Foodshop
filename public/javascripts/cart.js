async function postData(data = {}) {
    var url = '/cart';
    
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
        
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });
    return response.json(); 
}

async function getCart() {
  const response = await fetch("/api/cart");
  return response.json(); 
}

async function clearCart() {
  await fetch("/api/cart/clear");
  document.location.reload()
}

function fetchCart() {
  getCart()
    .then((data) => {
      var cartElement = document.getElementById("cart");

      cartElement.textContent = `Cart (${data.length})`
    });
}

function addToCart(data) {
    console.log(data);

    postData(data)
    .then((data) => {
      console.log(data); 
    });

    fetchCart();
}