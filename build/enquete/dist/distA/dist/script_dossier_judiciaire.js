
    document.addEventListener('DOMContentLoaded', function() {
      fetch('pipeline_dossier_judiciaire.json')
        .then(response => response.json())
        .then(pipeline => {
          const sommaire = document.getElementById('sommaire');
          const contenuCours = document.getElementById('content');

          pipeline.forEach((section, index) => {
            // Créer un élément de navigation pour le sommaire avec le titre de la section
            let sommaireItem = document.createElement('a');
            sommaireItem.href = `#section${index}`;
            sommaireItem.textContent = section.titre;
            sommaireItem.classList.add("sommaire-item");
            sommaire.appendChild(sommaireItem);

            // Créer la section principale avec un ID unique pour l'ancre
            let sectionDiv = document.createElement('section');
            sectionDiv.id = `section${index}`;
            
            // Ajouter le titre de la section
            let titreSection = document.createElement('h2');
            titreSection.textContent = section.titre;
            sectionDiv.appendChild(titreSection);

            // Ajouter chaque sous-section avec titre et contenu
            section.sousSections.forEach(sousSection => {
              let sousSectionDiv = document.createElement('article');
              sousSectionDiv.classList.add("sous-section");

              let sousTitre = document.createElement('h3');
              sousTitre.textContent = sousSection.sousTitre;
              sousSectionDiv.appendChild(sousTitre);

              let contenu = document.createElement('p');
              contenu.textContent = sousSection.contenu;
              sousSectionDiv.appendChild(contenu);

              sectionDiv.appendChild(sousSectionDiv);
            });

            contenuCours.appendChild(sectionDiv);
          });
        });
    });
    