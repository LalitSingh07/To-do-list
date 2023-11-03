// Sample user data (in-memory database)
const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

// Login form
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
        showMessage("Login successful!");
    } else {
        showMessage("Invalid username or password.", "error");
    }
    loginForm.reset();
});

// Register form
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;

    if (users.some((u) => u.username === username)) {
        showMessage("Username already exists.", "error");
    } else {
        users.push({ username, password });
        showMessage("Registration successful!");
    }
    registerForm.reset();
});

function showMessage(message, type = "success") {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
    messageDiv.className = type;
}
