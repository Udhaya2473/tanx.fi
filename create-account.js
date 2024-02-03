function showAccountCreatedPopup() {
    const accountCreatedPopup = document.getElementById('accountCreatedPopup');
    accountCreatedPopup.style.display = 'block';
}

function closeAccountCreatedPopup() {
    const accountCreatedPopup = document.getElementById('accountCreatedPopup');
    accountCreatedPopup.style.display = 'none';
}

function validateForm() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Invalid email address.");
        return false;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
    showAccountCreatedPopup();
    return false;
}
