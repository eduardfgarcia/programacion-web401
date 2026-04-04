// Obtener referencias a los elementos
const formulario = document.querySelector('.formulario');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const resultDiv = document.querySelector('.result');

// Manejar evento de envío del formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    if (password.value !== confirmPassword.value) {
        resultDiv.style.color = "red";
        resultDiv.textContent = "❌ Las contraseñas no coinciden. Inténtalo de nuevo.";
        return; 
    }

    const nombre = document.getElementById('nombre').value;
    
    resultDiv.style.color = "green"; 
    resultDiv.textContent = `¡Gracias por registrarte, ${nombre}! Hemos recibido tu mensaje correctamente.`;

   
});

confirmPassword.addEventListener('input', function() {
    if (password.value !== confirmPassword.value) {
        confirmPassword.style.borderColor = "red";
    } else {
        confirmPassword.style.borderColor = "green";
    }
});
