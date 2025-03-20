// Login Form
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem("token", data.token);
                Toastify({
                    text: "Logged in successfully",
                    background: "green",
                }).showToast();
                window.location.href = "products.html";
            } else {
                Toastify({
                    text: data.message || "Invalid credentials",
                    background: "red",
                }).showToast();
            }
        } catch (err) {
            Toastify({ text: "Error logging in", background: "red" }).showToast();
        }
    });
}

// Register Form
const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch("http://localhost:5000/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password }),
            });
            const data = await response.json();
            if (response.ok) {
                Toastify({
                    text: "Registered successfully! Please log in.",
                    background: "green",
                }).showToast();
                setTimeout(() => (window.location.href = "login.html"), 2000);
            } else {
                Toastify({
                    text: data.message || "Registration failed",
                    background: "red",
                }).showToast();
            }
        } catch (err) {
            Toastify({ text: "Error registering", background: "red" }).showToast();
        }
    });
}

// Forgot Password Form
const forgotPasswordForm = document.getElementById("forgotPasswordForm");
if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;

        try {
            const response = await fetch(
                "http://localhost:5000/auth/forgot-password",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email }),
                }
            );
            const data = await response.json();
            if (response.ok) {
                Toastify({
                    text: "Reset link sent to your email",
                    background: "green",
                }).showToast();
            } else {
                Toastify({
                    text: data.message || "Error sending reset link",
                    background: "red",
                }).showToast();
            }
        } catch (err) {
            Toastify({
                text: "Error sending reset link",
                background: "red",
            }).showToast();
        }
    });
}

// Reset Password Form
const resetPasswordForm = document.getElementById("resetPasswordForm");
if (resetPasswordForm) {
    resetPasswordForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const password = document.getElementById("password").value;
        const token =
            new URLSearchParams(window.location.search).get("token") ||
            window.location.pathname.split("/").pop();

        try {
            const response = await fetch(
                `http://localhost:5000/auth/reset-password/${token}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ password }),
                }
            );
            const data = await response.json();
            if (response.ok) {
                Toastify({
                    text: "Password reset successfully! Please log in.",
                    background: "green",
                }).showToast();
                setTimeout(() => (window.location.href = "login.html"), 2000);
            } else {
                Toastify({
                    text: data.message || "Error resetting password",
                    background: "red",
                }).showToast();
            }
        } catch (err) {
            Toastify({
                text: "Error resetting password",
                background: "red",
            }).showToast();
        }
    });
}
