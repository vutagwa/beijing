let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "flex";
}


// Define a global variable to store the cart items
let cart = [];

function addToCart(button) {
    // Get the price of the item from the data-price attribute
    const price = parseInt(button.getAttribute('data-price'));
    const quantity = prompt("Enter quantity:", "1");
    if (quantity !== null && !isNaN(quantity) && parseInt(quantity) > 0) {
        const totalPrice = price * parseInt(quantity);
        const item = {
            name: "Item Name", 
            price: price,
            quantity: parseInt(quantity),
            total: totalPrice
        };
        cart.push(item);
        displayCart();
    } else {
        alert("Invalid quantity!");
    }
}

function displayCart() {
    let cartContent = "Cart Contents:\n";
    let totalCost = 0;
    cart.forEach((item, index) => {
        cartContent += `${index + 1}. ${item.name} - Quantity: ${item.quantity}, Price: KES ${item.price}, Total: KES ${item.total}\n`;
        totalCost += item.total;
    });
    cartContent += `Total Cost: KES ${totalCost}`;
    alert(cartContent);
}

function calculateTotal() {
    const deliveryMethod = prompt("Select delivery method: Enter 'self pick' or 'delivery'");
    let deliveryCost = 0;

    // Validate delivery method and set delivery cost
    if (deliveryMethod.toLowerCase() === 'delivery') {
        deliveryCost = 200;
    } else if (deliveryMethod.toLowerCase() !== 'self pick') {
        alert("Invalid delivery method!");
        return; // Exit the function if delivery method is invalid
    }

    // Sum up the prices of all items in the cart
    let total = 0;
    cart.forEach(item => {
        total += item.total;
    });

    // Add the delivery cost to the total
    total += deliveryCost;

    // Display a popup with the total amount paid
    alert('You have paid KES ' + total);

    // Display a thank you message
    alert('Thank you for shopping with G&C');

    // Clear the cart after checkout
    cart = [];
    localStorage.removeItem('cart'); // Remove cart items from localStorage
    // Update the cart display in the checkout page
    displayCart();
}
