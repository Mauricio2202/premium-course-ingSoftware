function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    let username = urlParams.get('user');
    
    if (!username) {
        username = localStorage.getItem('currentUser') || 'Estudiante';
    }
    
    document.getElementById('username').textContent = username;
    document.getElementById('display-username').textContent = username;
    
    localStorage.setItem('currentUser', username);
});