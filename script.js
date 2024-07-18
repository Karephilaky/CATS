let catX = localStorage.getItem('catX') ? parseFloat(localStorage.getItem('catX')) : 0;
let catY = localStorage.getItem('catY') ? parseFloat(localStorage.getItem('catY')) : 0;
let mouseX = 0;
let mouseY = 0;
let direction = 'right';

document.addEventListener('DOMContentLoaded', function() {
  const cat = document.getElementById('cat');

  if (!cat) {
    console.error('No se encontró el elemento del gato.');
    return;
  }

  cat.style.left = catX + 'px';
  cat.style.top = catY + 'px';

  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function moveCat() {
    const dx = mouseX - catX;
    const dy = mouseY - catY;

    catX += dx * 0.003; // Ajusta este valor para cambiar la velocidad de seguimiento
    catY += dy * 0.002;

    cat.style.left = catX + 'px';
    cat.style.top = catY + 'px';

    localStorage.setItem('catX', catX);
    localStorage.setItem('catY', catY);

    // Cambia la dirección del gato
    if (dx < 0 && direction === 'left') {
      direction = 'right';
      cat.style.transform = 'scaleX(1)'; // Mirar hacia la derecha
    } else if (dx > 0 && direction === 'right') {
      direction = 'left';
      cat.style.transform = 'scaleX(-1)'; // Mirar hacia la izquierda
    }

    requestAnimationFrame(moveCat);
  }

  moveCat();
});

