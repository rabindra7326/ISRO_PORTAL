// SIGNUP FUNCTION
function signup() {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    // Validation
    if (username === "" || email === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }

    // Check if user already exists
    if (localStorage.getItem(email)) {
        alert("User already exists! Please login.");
        return;
    }

    // Store user data
    let user = {
        username: username,
        email: email,
        password: password
    };

    localStorage.setItem(email, JSON.stringify(user));

    alert("Signup successful!");
    window.location.href = "login.html";
}


// LOGIN FUNCTION
function login() {
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let userData = localStorage.getItem(email);

    if (!userData) {
        alert("User not found! Please signup first.");
        return;
    }

    let user = JSON.parse(userData);

    if (user.password === password) {
        alert("Login successful!");

        // Save logged-in session
        localStorage.setItem("loggedInUser", email);

        window.location.href = "index.html";
    } else {
        alert("Incorrect password!");
    }
}


// LOGOUT FUNCTION
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    window.location.href = "login.html";
}