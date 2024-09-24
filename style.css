let verificationCode = '';
const users = {};

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

function showVerify() {
    document.getElementById('register-container').style.display = 'none';
    document.getElementById('verify-container').style.display = 'block';
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    if (username && password.length >= 8) {
        verificationCode = generateVerificationCode();
        sendVerificationEmail(username, verificationCode);
        showVerify();
    } else {
        alert("Please fill in all fields and ensure the password is at least 8 characters long.");
    }
}

function verifyCode() {
    const enteredCode = document.getElementById('verification-code').value;
    if (enteredCode === verificationCode) {
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        localStorage.setItem(username, password);
        alert("Account created successfully!");
        showLogin();
    } else {
        alert("Invalid verification code. Please try again.");
    }
}

function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function sendVerificationEmail(email, code) {
    // Mock email sending function
    console.log(`Sending email to ${email} with verification code: ${code}`);
    alert(`Verification code sent to ${email}`);
}
