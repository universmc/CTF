// Chargement du fichier JSON avec fetch
fetch('src/json/ctf1.json')
  .then(response => response.json())
  .then(data => {
    // Génération dynamique de la liste CTF
const list = data.menu.items.map(item => `<li>${item}</li>`).join('');
    const ctfContainer = document.getElementById('ctf-list');
    ctfContainer.innerHTML = list;
  })
  .catch(error => console.log(error));
