function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    // Obtener parámetro de la URL
    const urlParams = new URLSearchParams(window.location.search);
    let username = urlParams.get('user');
    
    // Si no viene en URL, intentar obtener de localStorage
    if (!username) {
        username = localStorage.getItem('currentUser') || 'Estudiante';
    }
    
    // Mostrar en la interfaz
    document.getElementById('username').textContent = username;
    document.getElementById('display-username').textContent = username;
    
    // Guardar para persistencia
    localStorage.setItem('currentUser', username);
});