// Selecciona un elemento en el documento que tenga la clase 'rubik'
const rubik = document.querySelector('.rubik');

// Inicializa dos variables para rastrear la rotación en los ejes X e Y
let rotateX = 0;
let rotateY = 0;

// Agrega un evento 'mousedown' al elemento 'rubik' que se activa cuando el botón del ratón se presiona
rubik.addEventListener('mousedown', (e) => {
  // Almacena la posición inicial del ratón cuando se hace clic en el elemento
  let startX = e.clientX;
  let startY = e.clientY;

  // Agrega un event listener para el evento 'mousemove' en todo el documento
  document.addEventListener('mousemove', onMouseMove);

  // Agrega un event listener para el evento 'mouseup' en todo el documento
  document.addEventListener('mouseup', () => {
    // Cuando se suelta el botón del ratón, elimina el event listener 'mousemove' para detener la rotación
  document.removeEventListener('mousemove', onMouseMove);
  });

  // Esta función se ejecuta cuando el ratón se mueve
  function onMouseMove(e) {
    // Calcula la diferencia en la posición del ratón desde el inicio del movimiento
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    // Actualiza las variables de rotación en los ejes X e Y en función del movimiento del ratón
    rotateY += deltaX;
    rotateX -= deltaY;

    // Aplica la rotación al elemento 'rubik' mediante la propiedad 'transform' del estilo CSS
    rubik.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;

    // Actualiza las posiciones iniciales para el siguiente ciclo del movimiento del ratón
    startX = e.clientX;
    startY = e.clientY;
  }
});
