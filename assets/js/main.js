const item = document.querySelectorAll('.slide'); // Selectionne toutes les slides
const nbSlide = item.length; //Défini le nb de slides dans le tableau du dessus
const next = document.querySelector('.right'); // button next
const prev = document.querySelector('.left'); // button prev

let count = 0; // start the counter at 0

function nextSlide() {
    item[count].classList.remove('active'); //Enleve la classe active de la slide qui disparait
    if(count < nbSlide - 1) {
        count++; // passe à l'image suivante
    } else {
        count = 0;
    }

    item[count].classList.add('active'); // Ajoute la classe active à la slide qui apparait
    console.log(count)
}
next.addEventListener('click', nextSlide);

function previousSlide() {
    item[count].classList.remove('active');

    if(count > 0) {
        count--; // passe à l'image précédente
    } else {
        count = nbSlide - 1;
    }

    item[count].classList.add('active');
    console.log(count)
}
prev.addEventListener('click', previousSlide);


