/*Interruptores */
document.addEventListener('DOMContentLoaded', function() {
    const notificacionesGeneralesSwitch = document.getElementById('notificaciones-generales');
    const subNotificacionesSwitches = document.querySelectorAll('.sub-notificacion');
    const notificacionItems = document.querySelectorAll('.notificacion-item');

    notificacionesGeneralesSwitch.addEventListener('change', function() {
        const generalActivado = this.checked;

        subNotificacionesSwitches.forEach((subSwitch, index) => {
            subSwitch.disabled = !generalActivado;
            const notificacionItem = notificacionItems[index + 1]; 
            if (!generalActivado) {
                notificacionItem.classList.add('desactivado');
                subSwitch.checked = false; // Desmarca los interruptores secundarios
            } else {
                notificacionItem.classList.remove('desactivado');
            }
        });

        console.log(`Notificaciones generales ${generalActivado ? 'activadas' : 'desactivadas'}.`);
    });

    subNotificacionesSwitches.forEach(switchElement => {
        switchElement.addEventListener('change', function() {
            const tipo = this.dataset.tipo;
            const estado = this.checked ? 'activadas' : 'desactivadas';
            console.log(`Notificaciones para ${tipo} ${estado}.`);
        });
    });
});


//cerrar sesion
document.addEventListener('DOMContentLoaded', function() {
    const cerrarSesionBtn = document.querySelector('.logout');
    
    if (cerrarSesionBtn) {
      cerrarSesionBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Crear la ventana modal
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        
        const modalContainer = document.createElement('div');
        modalContainer.className = 'modal-container';
        
        const modalTitle = document.createElement('div');
        modalTitle.className = 'modal-title';
        modalTitle.textContent = '¿Cerrar sección?';
        
        const modalMessage = document.createElement('div');
        modalMessage.className = 'modal-message';
        modalMessage.textContent = '¿Estas seguro de cerrar sección?';
        
        const modalButtons = document.createElement('div');
        modalButtons.className = 'modal-buttons';
        
        const noButton = document.createElement('button');
        noButton.className = 'modal-button button-no';
        noButton.textContent = 'No';
        
        const siButton = document.createElement('button');
        siButton.className = 'modal-button button-si';
        siButton.textContent = 'Si';
        
        //evento al botón No
        noButton.addEventListener('click', function() {
          document.body.removeChild(modalOverlay);
        });
        
        //evento al botón Si
        siButton.addEventListener('click', function() {
          // Redirigir a la página principal
          window.location.href = '#'; 
        });
        
        //estructura modal
        modalButtons.appendChild(noButton);
        modalButtons.appendChild(siButton);
        
        modalContainer.appendChild(modalTitle);
        modalContainer.appendChild(modalMessage);
        modalContainer.appendChild(modalButtons);
        
        modalOverlay.appendChild(modalContainer);
        
        document.body.appendChild(modalOverlay);
      });
    }
  });
