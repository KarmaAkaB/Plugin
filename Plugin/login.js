// Basic form validation
function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
        return false; // Prevent form submission
    }

    // Add further validation if needed (e.g., checking username length or password strength)

    // If validation passes, clear any previous error messages
    errorMessage.textContent = "";
    return true; // Allow form submission
}
