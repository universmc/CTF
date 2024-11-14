// Chargement du synopsis JSON
const synopsis = {
    "title": "MetaFiction Politique - 68 secondes",
    "duration": 68,
    "acts": [
      {
        "number": 1,
        "title": "La Situation",
        "duration": 13,
        "description": "La scène s'ouvre sur des images de manifestations réprimées violemment par les forces de l'ordre...",
        "visual": {
          "prompt": "An image depicting a chaotic street scene...",
          "colors": ["dark grey", "bright red"],
          "elements": ["tear gas", "banners", "protesters", "police"]
        },
        "sound": {
          "ambient": "protesters shouting, police sirens, tear gas explosions",
          "music": "intense, fast-paced to match the urgency of the scene"
        }
      },
      {
        "number": 2,
        "title": "La Commission d'Enquête",
        "duration": 8,
        "description": "Le parti politique mène une enquête sur la corruption et la répression...",
        "visual": {
          "prompt": "A dimly lit room with political figures reviewing documents...",
          "colors": ["dark", "blue highlights", "monochrome screens"],
          "elements": ["documents", "photos", "video footage", "serious expressions"]
        },
        "sound": {
          "ambient": "paper rustling, video playback, voices murmuring",
          "music": "suspenseful, building tension"
        }
      },
      {
        "number": 3,
        "title": "La Transformation de l'Élysée en Tribunal",
        "duration": 15,
        "description": "L'Élysée est transformé symboliquement en un tribunal de justice républicain. Juges, experts et représentants sont présents, mettant en place un procès historique dans le palais présidentiel.",
        "visual": {
          "prompt": "The Élysée Palace transformed into a grand courtroom. Bright lights illuminate the courtroom setting, with judges, forensic experts, and political figures present, surrounded by cameras recording the event.",
          "colors": ["bright white", "golden accents", "blue highlights"],
          "elements": ["judges", "forensic experts", "bright lights", "courtroom setup"]
        },
        "sound": {
          "ambient": "camera clicks, quiet discussions, footsteps",
          "music": "dramatic, conveying importance and justice"
        }
      },
      {
        "number": 4,
        "title": "Le Jugement Contraire aux Prévenus Absents",
        "duration": 8,
        "description": "Le jugement est rendu contre les prévenus absents, déclarés coupables de crimes financiers et de répression. Le tribunal, représenté par des membres du parti politique, se lève pour applaudir le verdict.",
        "visual": {
          "prompt": "An empty defendant's stand in a courtroom with a judge delivering the verdict. Members of the political party are standing in the background, applauding the decision. The focus is on the absence of the accused.",
          "colors": ["dark", "gold", "shadows"],
          "elements": ["empty stand", "judge", "applauding political members"]
        },
        "sound": {
          "ambient": "judge's gavel, faint applause",
          "music": "solemn, reinforcing the gravity of the judgment"
        }
      },
      {
        "number": 5,
        "title": "De l'Élysée à la Prison",
        "duration": 10,
        "description": "La scène montre une procession de véhicules de police quittant l'Élysée, symbolisant la justice rendue contre le pouvoir corrompu. Les condamnés sont escortés en prison.",
        "visual": {
          "prompt": "A solemn procession of law enforcement vehicles leaving the Élysée Palace, with blue and red police lights illuminating the dark surroundings. The scene represents the fall from power to incarceration.",
          "colors": ["dark", "blue and red police lights", "shadows"],
          "elements": ["police cars", "lights", "Élysée Palace in shadows"]
        },
        "sound": {
          "ambient": "police sirens,'ACAB', quiet rumble of car engines",
          "music": "slow, final, symbolizing closure"
        }
      }
    ]
  };
  
  // Fonction principale pour afficher le synopsis et les actes sur la page HTML
  function displaySynopsis() {
    const container = document.getElementById('timeline');
    const titleElement = document.createElement('h1');
    titleElement.textContent = synopsis.title;
    container.appendChild(titleElement);
  
    synopsis.acts.forEach((act) => {
      const actElement = document.createElement('div');
      actElement.classList.add('act');
      actElement.innerHTML = `
        <h2>${act.title}</h2>
        <p>${act.description}</p>
        <p><strong>Durée :</strong> ${act.duration} secondes</p>
        <div class="visual">
          <p><strong>Visuel :</strong> ${act.visual.prompt}</p>
          <p><strong>Éléments Visuels :</strong> ${act.visual.elements.join(', ')}</p>
          <p><strong>Couleurs :</strong> ${act.visual.colors.join(', ')}</p>
        </div>
        <div class="sound">
          <p><strong>Ambiance Sonore :</strong> ${act.sound.ambient}</p>
          <p><strong>Musique :</strong> ${act.sound.music}</p>
        </div>
        <button onclick="playAct(${act.number})">Démarrer Acte ${act.number}</button>
      `;
      container.appendChild(actElement);
    });
  }
  
  // Fonction pour jouer l'acte correspondant
  function playAct(actNumber) {
    const act = synopsis.acts.find(a => a.number === actNumber);
    if (act) {
      console.log(`🎬 Acte ${actNumber}: ${act.title}`);
      
      // Simulation de lecture de musique ou sons d'ambiance
      console.log(`🔊 Ambiance: ${act.sound.ambient}`);
      console.log(`🎵 Musique: ${act.sound.music}`);
      
      // Ajouter des animations, sons ou effets visuels ici si besoin
      alert(`Acte ${actNumber} démarré : ${act.title}`);
  
      // Attendre la durée de l'acte avant de passer à l'acte suivant
      setTimeout(() => {
        console.log(`Fin de l'acte ${actNumber}.`);
      }, act.duration * 1000);
    }
  }
  
  // Initialiser l'affichage du synopsis au chargement de la page
  window.onload = displaySynopsis;
  