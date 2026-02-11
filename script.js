function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation (demo purpose)
    if (username === "admin" && password === "1234") {
        document.getElementById("message").style.color = "green";
        document.getElementById("message").innerText = "Login successful!";
    } else {
        document.getElementById("message").style.color = "red";
        document.getElementById("message").innerText = "Invalid username or password!";
    }
}
