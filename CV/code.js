document.addEventListener('DOMContentLoaded', e => {

    alert(' Bienvenido');

    // Foto
    const foto = document.querySelector('.profile-img');
    foto.onclick = function() {
        alert('📸 Foto de perfil');
    }

    // Habilidades
    const habilidades = document.querySelectorAll('p');
    for (let i = 0; i < habilidades.length; i++) {
        habilidades[i].onclick = function() {
            alert('💡 ' + this.textContent);
        }
    }

});
