// Función para mostrar/ocultar contraseña
function togglePassword() {
    const passwordInput = document.getElementById('password');
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
}

// Cargar usuarios desde el JSON
async function loadUsers() {
    try {
        const response = await fetch('data/users.json');
        if (!response.ok) {
            throw new Error('Error al cargar usuarios');
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

// Evento de submit del formulario
document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = "Verificando...";
    messageDiv.className = "message";
    
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    try {
        const users = await loadUsers();
        const user = users.find(u => 
            u.username.toLowerCase() === username.toLowerCase() && 
            u.password === password
        );
        
        if (user) {
            window.location.href = `plataforma.html?user=${encodeURIComponent(user.username)}`;
        } else {
            messageDiv.textContent = "✗ Error: Usuario o contraseña incorrectos";
            messageDiv.className = "message error";
        }
    } catch (error) {
        messageDiv.textContent = "⚠️ Error en el sistema. Intente nuevamente.";
        messageDiv.className = "message error";
        console.error("Error en login:", error);
    }
});