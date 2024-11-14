// Définition des phases pour le Gantt chart
const phases = [
    { title: "Acte 1 : La Situation", duration: 13, startTime: 0 },
    { title: "Acte 2 : La Commission d'Enquête", duration: 8, startTime: 13 },
    { title: "Acte 3 : La Transformation", duration: 15, startTime: 21 },
    { title: "Acte 4 : Le Jugement", duration: 8, startTime: 36 },
    { title: "Acte 5 : De l'Élysée à la Prison", duration: 10, startTime: 44 }
  ];
  
  // Gestion de l'affichage des actes
  function startScene(actNumber) {
    const actElement = document.getElementById(`act-${actNumber}`);
    actElement.querySelector('.overlay').style.display = 'none';
    
    // Ajout d'effets sonores et visuels pour chaque acte
    if (actNumber === 1) {
      playAct1();
    }
  }
  
  function playAct1() {
    // Charger et jouer les sons spécifiques de l'acte 1
    const audio = new Audio('sounds/protest.mp3');
    audio.play();
  
    // Ajouter des effets visuels (par exemple, des animations de fumée, de manifestations)
    document.getElementById('act-1').classList.add('active-scene');
  
    // Avancer à la phase suivante après la durée
    setTimeout(() => {
      startScene(2);
    }, phases[0].duration * 1000);
  }
  
  // Afficher le modèle Gantt
  function drawGantt() {
    const canvas = document.getElementById('ganttCanvas');
    const ctx = canvas.getContext('2d');
  
    // Dimensions du canvas
    const width = canvas.width = 800;
    const height = canvas.height = 200;
  
    // Calculer la largeur totale pour chaque phase en fonction de la durée
    phases.forEach((phase, index) => {
      const x = (phase.startTime / 68) * width;
      const w = (phase.duration / 68) * width;
  
      ctx.fillStyle = 'rgba(255,0,0,0.6)';
      ctx.fillRect(x, index * 30 + 20, w, 20);
      ctx.strokeRect(x, index * 30 + 20, w, 20);
  
      ctx.fillStyle = 'black';
      ctx.fillText(phase.title, x + 5, index * 30 + 35);
    });
  }
  
  // Charger le Gantt chart au démarrage
  window.onload = drawGantt;
  