// const btn = document.getElementById('btn');

// btn.addEventListener('click', () =>{
//     alert('Bonjour depuis JavaScript!');
// });

//LONGUEUR_MAX: la même valeur que le maxlength de ton champ "Titre".
const LONGUEUR_MIN = 5;
const LONGUEUR_MAX = 80;

//Les titres des sujets, du plus ancien au plus récent.
const titres =[
    "MiniForum",
    "Sujet récents",
    "Sujet 1",
    "Sujet 2", //question à faire
    "Sujet 3",
    "Nouveau Sujet",

    //... au moins 6 titres au total
]

function titresTries(titres){ return titres.slice().sort()} //copie puis trie

function chercheDansTitres(titres, texte){ return titres.filter(titre => titre.toLowerCase().includes(texte.toLowerCase()))}

// function chercheDansTitres(titres, texte){ return titres.toLowerCase().includes(texte.toLowerCase())}

function titreExiste(titres, saisie){ return }

console . log (" --- etape 4 ---");
console . table ( titresTries ( titres ) );
console . log ( titres [0]);
console . log ( chercheDansTitres ( titres , "sql ") );
console . log ( chercheDansTitres ( titres , " licorne ") );
console . log ( titreExiste ( titres , " GIT REFUSE MON PUSH ") );
console . log ( titreExiste ( titres , "Un titre invent é") );