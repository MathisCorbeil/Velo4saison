const boutonsModale = document.querySelectorAll('.b-modale');

const modale = document.querySelector('.modale');

for (let i = 0; i < boutonsModale.length; i++) {
    boutonsModale[i].addEventListener('click', openModale);
}

function openModale() {
    // On ajoutera le code suivant ici
    

    const texte = document.createElement('p');

    texte.textContent="Modale";

    texte.classList.add('zoom');

    modale.appendChild(texte);

    modale.classList.add('visible');

  
}

 console.log("patate");