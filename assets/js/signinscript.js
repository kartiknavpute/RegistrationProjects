document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const errorElement = document.getElementById('error');

    // Simple validation for demonstration (replace with actual validation logic)
    //if (email === '' || password === '') {
    //    errorElement.textContent = 'Please enter both email and password!';
    //    return;
    //} else {
    //    errorElement.textContent = '';
    //}

    // Here you can add code to send the form data to a server or handle it as needed

    //console.log(`Email: ${email}`);
    //console.log(`Password: ${password}`);

    // Redirect to the next page (e.g., a dashboard page)
    //window.location.href = 'next.html';
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error(await response.text());
        }

        window.location.href = 'dashboard.html';
    } catch (err) {
        errorElement.textContent = err.message;
    }

});
