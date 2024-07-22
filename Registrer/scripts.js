document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirm-password').value;
    const errorElement = document.getElementById('error');

    if (password !== confirmpassword) {
        errorElement.textContent = 'Passwords do not match!';
        return;
    } else {
        errorElement.textContent = '';
    }
    // Here you can add code to send the form data to a server or handle it as needed

    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Password: ${confirmpassword}`);

    // Redirect to the next page (e.g., a welcome page)
    window.location.href = '../signin/signinpage.html';
});
