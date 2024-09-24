function goBack() {
    alert("Going back!");
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedPassword = localStorage.getItem(username);
    if (storedPassword && storedPassword === password) {
        alert("Login successful!");
        window.location.href = "success.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
}

function showRegister() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('register-container').style.display = 'block';
}

function showLogin() {
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    if (username && password) {
        localStorage.setItem(username, password);
        alert("Account created successfully!");
        showLogin();
    } else {
        alert("Please fill in all fields.");
    }
}
