document.addEventListener('DOMContentLoaded', function() {    
    // slider automático
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    
    if (sliderWrapper && dots.length > 0) {
      const totalSlides = dots.length;
      
      // ancho del wrapper
      const images = sliderWrapper.querySelectorAll('img');
      if (images.length > 0) {
        sliderWrapper.style.width = `${images.length * 100}%`;
        
        // Distribuir las imágenes
        Array.from(images).forEach(img => {
          img.style.width = `${100 / images.length}%`;
        });
      }
      
      //mover el slider
      function moveSlider(index) {
        currentIndex = index;
        sliderWrapper.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
        
        // Actualizar los dots
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
      }
      
      // Agregar eventos a los dots
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          moveSlider(index);
        });
      });
      
      // slider automático
      function autoSlide() {
        let nextIndex = (currentIndex + 1) % totalSlides;
        moveSlider(nextIndex);
      }
      
      // Cambiar slide cada 4 segundos
      const slideInterval = setInterval(autoSlide, 4000);
      
      // Detener intervalo 
      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          clearInterval(slideInterval);
          // Reiniciar el intervalo después de 10 segundos
          setTimeout(() => {
            setInterval(autoSlide, 4000);
          }, 10000);
        });
      });
    }
  });
  // ventana modal de comentarios
document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.modal-overlay')) {
        const modalHTML = `
            <div class="modal-overlay" id="modal-comentarios-overlay">
                <div class="modal-comentarios">
                    <div class="modal-header">
                        <h2 class="modal-title">150 reseñas</h2>
                        <button class="close-modal">&times;</button>
                    </div>
                    <div class="filtro-comentarios">
                        <div class="filtro-dropdown">
                            <img src="../img/Iconos/filtrar.png" alt="Filtrar">
                            <span>Filtrar por</span>
                        </div>
                    </div>
                    <div class="list-comentarios">
                        <!-- Aquí se mostrarán los comentarios -->
                    </div>
                    <div class="comentario-input">
                        <div class="user-icon">
                            <img src="../img/Iconos/usuario-header.png" alt="Usuario">
                        </div>
                        <button class="comentar-btn">Comentar</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    //elementos del DOM
    const comentarBtn = document.querySelector('.accion-btn.comentar');
    const modalOverlay = document.getElementById('modal-comentarios-overlay');
    const closeModalBtn = modalOverlay.querySelector('.close-modal');
    const comentarModalBtn = modalOverlay.querySelector('.comentar-btn');

    //para abrir y cerrar la modal
    function openModal() {
        modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = ''; 
    }

    // Event listeners
    comentarBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    
    // Cerrar modal al hacer clic fuera de ella
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Evitar cierre de modal al hacer clic dentro de ella
    modalOverlay.querySelector('.modal-comentarios').addEventListener('click', function(e) {
        e.stopPropagation();
    });

    //botón de comentar dentro de la modal
    comentarModalBtn.addEventListener('click', function() {
        alert('Aquí se abriría la segunda ventana para escribir el comentario');
        
    });
});
//ventana modal de escribir comentario
document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.modal-escribir-overlay')) {
        const escribirModalHTML = `
            <div class="modal-escribir-overlay" id="modal-escribir-overlay">
                <div class="modal-escribir">
                    <div class="escribir-header">
                        <div class="user-info">
                            <div class="profile-pic">
                                <img src="../img/Iconos/usuario-header.png" alt="Usuario">
                            </div>
                            <span class="username">Usuario</span>
                        </div>
                    </div>
                    <div class="rating-stars">
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                        <span class="star">★</span>
                    </div>
                    <div class="escribir-area">
                        <div class="textarea-container">
                            <textarea placeholder="Escribir"></textarea>
                        </div>
                    </div>
                    <div class="actions-bar">
                        <div class="buttons-container">
                            <button class="cancel-btn">Cancelar</button>
                            <button class="publish-btn">Publicar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', escribirModalHTML);
    }

    // comentarios
    const comentarBtn = document.querySelector('.accion-btn.comentar');
    const modalComentariosOverlay = document.getElementById('modal-comentarios-overlay');
    const closeComentariosBtn = modalComentariosOverlay.querySelector('.close-modal');
    const comentarModalBtn = modalComentariosOverlay.querySelector('.comentar-btn');

    //escribir comentario
    const modalEscribirOverlay = document.getElementById('modal-escribir-overlay');
    const cancelEscribirBtn = modalEscribirOverlay.querySelector('.cancel-btn');
    const publishEscribirBtn = modalEscribirOverlay.querySelector('.publish-btn');
    const stars = modalEscribirOverlay.querySelectorAll('.star');

    // Funciones para abrir y cerrar modales
    function openComentariosModal() {
        modalComentariosOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    }

    function closeComentariosModal() {
        modalComentariosOverlay.style.display = 'none';
        document.body.style.overflow = '';
    }

    function openEscribirModal() {
        // Cerrar la primera modal
        modalComentariosOverlay.style.display = 'none';
        
        // Abrir la modal de escribir comentario
        modalEscribirOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    }

    function closeEscribirModal() {
        modalEscribirOverlay.style.display = 'none';
        document.body.style.overflow = ''; 
    }

    // Event listeners
    comentarBtn.addEventListener('click', openComentariosModal);
    closeComentariosBtn.addEventListener('click', closeComentariosModal);
    comentarModalBtn.addEventListener('click', openEscribirModal);
    cancelEscribirBtn.addEventListener('click', function() {
        closeEscribirModal();
        openComentariosModal(); 
    });
    publishEscribirBtn.addEventListener('click', function() {
        alert('¡Comentario publicado con éxito!');
        closeEscribirModal();
    });

    // Cerrar modales al hacer clic fuera de ellas
    modalComentariosOverlay.addEventListener('click', function(e) {
        if (e.target === modalComentariosOverlay) {
            closeComentariosModal();
        }
    });

    modalEscribirOverlay.addEventListener('click', function(e) {
        if (e.target === modalEscribirOverlay) {
            closeEscribirModal();
        }
    });

    modalComentariosOverlay.querySelector('.modal-comentarios').addEventListener('click', function(e) {
        e.stopPropagation();
    });

    modalEscribirOverlay.querySelector('.modal-escribir').addEventListener('click', function(e) {
        e.stopPropagation();
    });

    //alificación de estrellas
    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            // Resetear todas las estrellas
            stars.forEach(s => s.classList.remove('active'));
            
            // Activar estrellas hasta la que se hizo clic
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('active');
            }
        });
    });
});

//ventana de notificaciones
document.getElementById('notif-toggle').addEventListener('click', function(e) {
    e.preventDefault();
    const panel = document.getElementById('notif-panel');
    panel.classList.toggle('hidden');
    });
    
    