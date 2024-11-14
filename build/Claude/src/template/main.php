<section class="step-by-step">
    <article class="template-content">
        <div class="windows">
            <?php
            $currentStep = isset($_GET['step']) ? $_GET['step'] : 'step1_introduction';
            include "src/template/step/{$currentStep}.php";
            ?>
        </div>

        <div class="step-loader timeline">
            <!-- Boutons pour chaque étape -->
            <button onclick="window.location.href='?step=step01_'">Étape 1</button>
            <button onclick="window.location.href='?step=step02_'">Étape 2</button>
            <button onclick="window.location.href='?step=step03_'">Étape 3</button>
            <button onclick="window.location.href='?step=step04_'">Étape 4</button>
            <button onclick="window.location.href='?step=step05_'">Étape 5</button>
            <button onclick="window.location.href='?step=step06_'">Étape 6</button>
            <button onclick="window.location.href='?step=step07_'">Étape 7</button>
            <button onclick="window.location.href='?step=step08_'">Étape 8</button>
            <button onclick="window.location.href='?step=step09_'">Étape 9</button>
            <button onclick="window.location.href='?step=step10'">Étape 10</button>
        </div>
    </article>
    <script>
        function loadStep(stepNumber) {
    // Logique pour charger l'étape correspondante
    // Par exemple, modifier l'URL ou faire une requête AJAX
}

    </script>
</section>
