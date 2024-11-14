<section class="step-by-step">
    <article class="template-content">
        <div class="windows">
            <?php include ('step/currentstep.php'); // Changez dynamiquement ce chemin en fonction de l'étape sélectionnée ?>
        </div>
        <div class="step-loader timeline">
            <!-- Boutons pour chaque étape -->
            <button onclick="loadStep(1)">Étape 1</button>
            <button onclick="loadStep(02)">Étape 2</button>
            <button onclick="loadStep(03)">Étape 3</button>
            <button onclick="loadStep(04)">Étape 4</button>
            <button onclick="loadStep(05)">Étape 5</button>
            <button onclick="loadStep(06)">Étape 6</button>
            <button onclick="loadStep(07)">Étape 7</button>
            <!-- Ajoutez d'autres boutons pour les étapes supplémentaires -->
        </div>
    </article>
</section>