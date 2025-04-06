// Datos de usuarios
const users = [
    { username: "Benjamin", password: "benjamin_01" },
    { username: "Alejandro", password: "alejandro_02" }
];

// Login
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    const user = users.find(u => 
        u.username.toLowerCase() === username.toLowerCase() && 
        u.password === password
    );
    
    if (user) {
        localStorage.setItem('currentUser', user.username);
        window.location.href = 'plataforma.html';
    } else {
        messageDiv.textContent = "✗ Usuario o contraseña incorrectos";
        messageDiv.className = "message error";
    }
});

// Mostrar/ocultar contraseña
document.querySelector('.toggle-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    this.textContent = this.textContent === '👁️' ? '🙈' : '👁️';
});