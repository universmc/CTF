
  document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = "backend_video_algorithmique+TOPIC_codex_GPT.js";
    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log("Données récupérées depuis le backend :", data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération des données :", error);
      });
  });
  