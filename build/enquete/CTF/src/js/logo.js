var logo = document.getElementById("pi-logo");
var network = document.getElementById("network");

// Utilisation de anime.js pour animer le logo
anime({
  targets: logo,
  rotate: '1turn',
  duration: 2000,
  direction: 'alternate',
  loop: true,
  easing: 'easeOutElastic',
  complete: function(
) {
    // Réinitialiser la rotation pour une animation continue
logo.style.transform = 'rotate(0turn)';
  }
});
