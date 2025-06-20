  // 1️⃣ Afficher 0 à 10
  function afficherNombres() {
    let resultat = '';
    for (let i = 0; i <= 10; i++) {
      resultat += i + " ";
    }
    document.getElementById("result1").innerText = resultat;
    document.getElementById("result1").style.display = "block";
  }

  // 2️⃣ Somme de 0 à 100
  function afficherSomme() {
    let somme = 0;
    for (let i = 0; i <= 100; i++) {
      somme += i;
    }
    document.getElementById("result2").innerText = "La somme est : " + somme;
    document.getElementById("result2").style.display = "block";
  }

  // 3️⃣ Jeu plus ou moins
  let nombreSecret = Math.floor(Math.random() * 100) + 1;

  function jouer() {
    let essai = parseInt(document.getElementById("guessInput").value);
    const resultDiv = document.getElementById("result3");

    if (isNaN(essai)) {
      resultDiv.innerText = "Veuillez entrer un nombre.";
    } else if (essai > nombreSecret) {
      resultDiv.innerText = "C'est trop.";
    } else if (essai < nombreSecret) {
      resultDiv.innerText = "C'est moins.";
    } else {
      resultDiv.innerText = "Bravo, vous avez trouvé le nombre secret !";
    }
    resultDiv.style.display = "block";
  }

  // 4️⃣ Suite de Fibonacci
  function calculerFibonacci() {
    let N = parseInt(document.getElementById("fibInput").value);
    if (isNaN(N) || N < 0) {
      document.getElementById("result4").innerText = "Veuillez entrer un nombre positif.";
      document.getElementById("result4").style.display = "block";
      return;
    }

    let Uo = 0, Un = 0;
    for (let e = 0; e <= N; e++) {
      Un = Uo + e;
      Uo+=e
    }
    document.getElementById("result4").innerText = "Le terme est : " + Un;
    document.getElementById("result4").style.display = "block";
  }