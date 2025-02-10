document.addEventListener("DOMContentLoaded", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Update Cart Count
    function updateCartCount() {
        document.getElementById("cart-count").innerText = cart.length;
    }

    // Add to Cart Function
    function addToCart(event) {
        event.preventDefault();
        let button = event.target;
        let productCard = button.closest(".product-card");
        let title = productCard.querySelector(".card-title").innerText;
        let price = productCard.querySelector(".text-success").innerText;
        let imgSrc = productCard.querySelector("img").src;

        let product = { title, price, imgSrc };
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        
    }

    // Attach Click Event to All "Add to Cart" Buttons
    document.querySelectorAll(".btn-buy").forEach(button => {
        button.addEventListener("click", addToCart);
    });

    // Update Cart Count on Load
    updateCartCount();
});
