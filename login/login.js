// Simulación de usuarios raíz y listas importadas
const usuarioRaiz = { usuario: 'Root', contrasena: 'Root', rol: 'admin' };

// Simulación: importar listas de trabajadores y admins (en producción usaría almacenamiento persistente)
// Aquí solo para ejemplo, deberías sincronizar con las listas reales
let trabajadores = [
    // Ejemplo: { usuario: 'trabajador1', contrasena: '1234', rol: 'trabajador', ...otrosDatos }
];
let admins = [usuarioRaiz];

function login(usuario, contrasena) {
    // Buscar en admins
    const admin = admins.find(u => u.usuario === usuario && u.contrasena === contrasena);
    if (admin) {
        window.location.href = '../menu_admin/admin-index.html';
        return;
    }
    // Buscar en trabajadores
    const trabajador = trabajadores.find(u => u.usuario === usuario && u.contrasena === contrasena);
    if (trabajador) {
        window.location.href = '../menu_colaborador/colaborador-panel.html';
        return;
    }
    alert('Usuario o contraseña incorrectos');
}

// Evento para el formulario
window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const usuario = document.getElementById('usuario').value;
            const contrasena = document.getElementById('contrasena').value;
            login(usuario, contrasena);
        });
    }
});
