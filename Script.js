document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.getElementById("navbar");

  // Ouvre/ferme menu mobile au clic sur burger
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("open");
    navbar.classList.toggle("open");
  });

  // Gestion des sous-menus au clic en mobile
  navbar.addEventListener("click", (e) => {
    if (window.innerWidth > 768) return; // Désactive sous-menus clic desktop

    const target = e.target;

    // On cible uniquement les liens qui ont un sous-menu (le ul.Sous_Menu juste après)
    if (
      target.tagName === "A" &&
      target.nextElementSibling &&
      target.nextElementSibling.classList.contains("Sous_Menu")
    ) {
      e.preventDefault();

      const subMenu = target.nextElementSibling;
      const isOpen = subMenu.classList.contains("open-submenu");

      // Fermer tous les sous-menus ouverts
      document.querySelectorAll(".Sous_Menu.open-submenu").forEach((menu) => {
        menu.classList.remove("open-submenu");
      });

      // Ouvre le sous-menu cliqué seulement s'il était fermé
      if (!isOpen) {
        subMenu.classList.add("open-submenu");
      }
    }
  });

  // Optionnel : ferme menu et sous-menus si fenêtre agrandie > 768px
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menuIcon.classList.remove("open");
      navbar.classList.remove("open");
      document.querySelectorAll(".Sous_Menu.open-submenu").forEach((menu) => {
        menu.classList.remove("open-submenu");
      });
    }
  });
});

document.querySelectorAll('.multi-level-menu a.toggle').forEach(link => {
  link.addEventListener('click', e => {
    const subMenu = link.nextElementSibling;
    if (!subMenu) return; // Pas de sous-menu : laisser lien normal

    e.preventDefault(); // Bloquer navigation sur lien parent

    const isOpen = subMenu.style.display === 'block';

    // Fermer tous les sous-menus frères
    const parentUl = link.parentElement.parentElement;
    parentUl.querySelectorAll('ul').forEach(ul => {
      ul.style.display = 'none';
    });

    if (!isOpen) {
      subMenu.style.display = 'block';
      link.classList.add('open');
    } else {
      subMenu.style.display = 'none';
      link.classList.remove('open');
    }
  });
});
