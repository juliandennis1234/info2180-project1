window.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector("#email");
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent page refresh

        const email = emailInput.value.trim();

        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.style.color = "white";  // readable on green background
        } else {
            messageDiv.innerHTML = 
                `Thank you! Your email address <strong>${email}</strong> has been added to our mailing list!`;
            messageDiv.style.color = "white";
        }
    });

});
