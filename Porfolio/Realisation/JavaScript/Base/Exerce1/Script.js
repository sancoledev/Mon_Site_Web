  // Liste des mois
  const mois = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

  // Fonction affichage résultat
  function afficherResultat(elementId, message) {
    const div = document.getElementById(elementId);
    div.textContent = message;
    div.style.display = 'block';
  }

  // Vérification âge
  document.getElementById('ageBtn').addEventListener('click', () => {
    const age = parseInt(document.getElementById('ageInput').value, 10);

    if (isNaN(age) || age < 0) {
      afficherResultat('ageResult', "Veuillez entrer un âge valide (positif).");
      return;
    }

    if (age < 18) {
      afficherResultat('ageResult', "Vous êtes mineur.");
    } else {
      afficherResultat('ageResult', "Vous êtes majeur.");
    }
  });

  // Vérification pair/impair
  document.getElementById('nombreBtn').addEventListener('click', () => {
    const nombre = parseInt(document.getElementById('nombreInput').value, 10);

    if (isNaN(nombre)) {
      afficherResultat('nombreResult', "Veuillez entrer un nombre valide.");
      return;
    }

    if (nombre % 2 === 0) {
      afficherResultat('nombreResult', "Le nombre saisi est pair.");
    } else {
      afficherResultat('nombreResult', "Le nombre saisi est impair.");
    }
  });

  // Afficher le mois
  document.getElementById('moisBtn').addEventListener('click', () => {
    const index = parseInt(document.getElementById('moisInput').value, 10);

    if (isNaN(index) || index < 1 || index > 12) {
      afficherResultat('moisResult', "Veuillez entrer un numéro de mois entre 1 et 12.");
      return;
    }

    afficherResultat('moisResult', `Le mois est : ${mois[index - 1]}`);
  });