
    document.addEventListener('DOMContentLoaded', function() {
      fetch('pipeline_dossier_49-3.json')
        .then(response => response.json())
        .then(pipeline => {
          const sommaire = document.getElementById('sommaire');
          const contenuCours = document.getElementById('content');

          pipeline.forEach((section, index) => {
            let sommaireItem = document.createElement('a');
            sommaireItem.href = `#section${index}`;
            sommaireItem.textContent = section.titre;
            sommaireItem.classList.add("sommaire-item");
            sommaire.appendChild(sommaireItem);

            let sectionDiv = document.createElement('section');
            sectionDiv.id = `section${index}`;
            
            let titreSection = document.createElement('h2');
            titreSection.textContent = section.titre;
            sectionDiv.appendChild(titreSection);

            let contenu = document.createElement('p');
            contenu.textContent = section.details;
            sectionDiv.appendChild(contenu);

            contenuCours.appendChild(sectionDiv);
          });
        });
    });
    