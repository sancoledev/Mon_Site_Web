// === VARIABLES GLOBALES ===
let nombres = [];          // Pour stocker les nombres positifs
let typeSaisie = "";       // Pour savoir quel type de saisie on effectue ("positifs" ou "motif")
let affichagePermanent = false;  // Pour contrôler quand le message doit rester affiché

// === ELEMENTS DU DOM ===
let input = document.getElementById("nombreSaisi");
let Btn = document.getElementById("validerBtn");

// On cache les champs de saisie au démarrage
Btn.style.display = 'none';
input.style.display = 'none';

// === FONCTION D'AFFICHAGE CENTRALISEE ===
function AfficherMessage(texte, permanent = false) {
    const DivMessage = document.getElementById("message");
    DivMessage.innerText = texte;
    DivMessage.style.display = 'block';
    affichagePermanent = permanent;
}

// === ECOUTEUR SUR LE BOUTON DE VALIDATION ===
Btn.addEventListener("click", function() {
    const valeur = input.value;
    const nombre = parseInt(valeur);

    if (isNaN(nombre)) {
        AfficherMessage("Veuillez entrer un nombre valide.");
        return;
    }

    // Cas pour la saisie des nombres positifs
    if (typeSaisie === "positifs") {
        if (nombre < 0) {
            // Quand saisie terminée, on calcule la moyenne
            let somme = nombres.reduce((acc, val) => acc + val, 0);
            let moyenne = (nombres.length > 0) ? (somme / nombres.length).toFixed(2) : 0;
            AfficherMessage(
                "Saisie terminée.\nVous avez saisi : " + 
                nombres.join(", ") + 
                "\nMoyenne : " + moyenne,
                true
            );
            // On désactive les champs
            Btn.disabled = true;
            input.disabled = true;
            Btn.style.display = 'none';
            input.style.display = 'none';
        } else {
            nombres.push(nombre);
            input.value = "";
            input.focus();
        }
    }

    // Cas pour la saisie du motif
    else if (typeSaisie === "motif") {
        if (nombre <= 0) {
            AfficherMessage("Le nombre doit être supérieur à 0.");
            return;
        }
        let motif = "";
        for (let i = 1; i <= nombre; i++) {
            motif += "*".repeat(i) + "\n";
        }
        AfficherMessage(motif, true);
        Btn.disabled = true;
        input.disabled = true;
        Btn.style.display = 'none';
        input.style.display = 'none';
    }
});

// === GESTION DES ACTIONS SELON LES BOUTONS CLIQUÉS ===
document.querySelectorAll("button[data-action]").forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.stopPropagation();
        gererClick(this.dataset.action);
    });
});

document.addEventListener("click", function() {
    if (!affichagePermanent) {
        document.getElementById("message").style.display = "none";
    }
});

document.getElementById("message").addEventListener("click", function(e) {
    e.stopPropagation();
});

// === FONCTION QUI GÈRE LES DIFFERENTES ACTIONS ===
function gererClick(action) {
    let resultat = "";

    if (action === "premiers") {
        resultat = "Nombres premiers entre 0 et 100 :\n" + liste().join(", ");
        AfficherMessage(resultat);
    } 
    else if (action === "Positifs") {
        typeSaisie = "positifs";
        nombres = [];  // Réinitialise la liste à chaque démarrage
        Btn.style.display = 'inline';
        input.style.display = 'inline';
        Btn.disabled = false;
        input.disabled = false;
        input.value = "";
        input.focus();
        AfficherMessage("Veuillez commencer à saisir vos nombres. Entrez un nombre négatif pour terminer.");
    } 
    else if (action === "Motifs") {
        typeSaisie = "motif";
        Btn.style.display = 'inline';
        input.style.display = 'inline';
        Btn.disabled = false;
        input.disabled = false;
        input.value = "";
        input.focus();
        AfficherMessage("Entrez le nombre de lignes du motif souhaité :");
    }
}

// === FONCTION POUR LES NOMBRES PREMIERS ===
function Nombre_premier(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function liste() {
    let list = [];
    for (let i = 0; i <= 100; i++) {
        if (Nombre_premier(i)) list.push(i);
    }
    return list;
}
