document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const reportPortal = document.getElementById('report-portal');
    const loginContainer = document.querySelector('.container');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Add your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        
        // Example: Simple validation
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            loginContainer.style.display = 'none';
            reportPortal.style.display = 'flex';
        } else {
            alert('Invalid username or password.');
        }
    });
});
