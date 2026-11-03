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
function titreExiste(titres, saisie)
{
    const resultats = chercheDansTitres(titres, saisie.trim());
    //si la fonction retourne un résultat, il sera forcément supérieur à 0
    return resultats.length > 0;
}

function validerTitre(titres, saisie){

    if(saisie.trim() === "")
    {
        return "Le titre est obligatoire.";
    } else if (saisie.trim().length < LONGUEUR_MIN)
    {
        return "Le titre doit faire au moins 5 caractères.";
    } else if (saisie.trim().length > LONGUEUR_MAX)
    {
        return "Le titre ne doit pas dépasser 80 caractères.";
    } else if (chercheDansTitres(titres, saisie.trim())=== true)
    {
        return "Ce sujet existe déjà.";
    }else
    {
        return"";
    }
}


// console . log (" --- etape 4 ---");
// console . table ( titresTries ( titres ) );
// console . log ( titres [0]);
// console . log ( chercheDansTitres ( titres , "sql ") );
// console . log ( chercheDansTitres ( titres , " licorne ") );
// console . log ( titreExiste ( titres , " GIT REFUSE MON PUSH ") );
// console . log ( titreExiste ( titres , "Un titre invent é") );

// console . log (" --- etape 5 ---");
// console . log ( validerTitre ( titres , "") );
// console . log ( validerTitre ( titres , " ") );
// console . log ( validerTitre ( titres , "Git") );
// console . log ( validerTitre ( titres , "a". repeat (81) ) );
// console . log ( validerTitre ( titres , "UN DE TES TITRES ") );
// const reponse = validerTitre ( titres , " Comment lire une erreur ?");
// console . log ("[" + reponse + "]");