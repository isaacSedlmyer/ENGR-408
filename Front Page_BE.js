// Function to handle button click and redirect
function redirectTo(page) {
    window.location.href = page; // Redirect to the specified page
}

// Add event listeners to the buttons after the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button1").addEventListener("click", () => redirectTo("makerSpace.html"));
    document.getElementById("button2").addEventListener("click", () => redirectTo("woodShop.html"));
    document.getElementById("button3").addEventListener("click", () => redirectTo("eeIot.html"));
    document.getElementById("button4").addEventListener("click", () => redirectTo("metalShop.html"));
});
