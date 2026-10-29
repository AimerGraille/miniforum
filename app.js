const btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
    alert('Bonjour depuis JavaScript!');
});

//LONGUEUR_MAX: la même valeur que le maxlength de ton champ "Titre".
const LONGUEUR_MIN = 5;
const LONGUEUR_MAX = 80;

//Les titres des sujets, du plus ancien au plus récent.
const titres =[
    "",
    //... au moins 6 titres au total
]
