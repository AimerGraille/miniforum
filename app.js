// const btn = document.getElementById('btn');

// btn.addEventListener('click', () =>{
//     alert('Bonjour depuis JavaScript!');
// });

//LONGUEUR_MAX: la même valeur que le maxlength de ton champ "Titre".
const LONGUEUR_MIN = 5;
const LONGUEUR_MAX = 80;

//Les titres des sujets, du plus ancien au plus récent.
const titres =[
    "Sujet 1",
    "Sujet 2", //question à faire
    "Sujet 3",
    "Sujet 4",
    "Sujet 5",
    "Sujet 6",

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
    } else if (titreExiste(titres, saisie))
    {
        return "Ce sujet existe déjà.";
    }else
    {
        return"";
    }
}

function validerPseudo(saisie){
   if(saisie.trim() === "")
    {
        return "Le pseudo est obligatoire.";
    }
    else if(saisie.trim().includes(" "))
    {
        return "Le pseudo ne peut pas contenir d'espaces."
    }
    else
    {
        return"";
    }
};

function validerMessage(saisie){
  
    const MESSAGE_MAX = 500;

    if(saisie.trim() === "")
    {
        return "Le message est obligatoire.";
    }
    else if(saisie.trim().length > MESSAGE_MAX)
    {
        return "Le message est trop long."
    }
    else
    {
        return"";
    }
};

function carteSujet(titre)
{
    const article = document.createElement("article");
    article.classList.add("carte-sujet");
    const h3 = document.createElement("h3");
    h3.textContent = titre;
    article.append(h3); // peu etre a enlever
    return article;
}

function afficherSujets(liste)
{
    const section = document.querySelector("#sujets");
    document.querySelectorAll(".carte-sujet").forEach((article)=> article.remove());
    for (const titre of liste)
    {
        section.append(carteSujet(titre));
    }
}

function afficherErreur(idMessage, texte)
{
    const zoneMessage = document.querySelector("#" + idMessage);
    if(zoneMessage){
        zoneMessage.textContent = texte;
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

if (document.querySelector("#sujets") !== null)
{
    const formulaire = document.querySelector("#form-nouveau-sujet");

    formulaire.addEventListener("submit", (event)=>{
        event.preventDefault();

        const champTitre = document.querySelector("#titre");
        const champPseudo = document.querySelector("#pseudo");
        const champMessage = document.querySelector("#message");

        const titreErreur = validerTitre(titres, champTitre.value);
        const pseudoErreur = validerPseudo(champPseudo.value);
        const messageErreur = validerMessage(champMessage.value);
    
        afficherErreur("erreur-titre", titreErreur);
        afficherErreur("erreur-pseudo", pseudoErreur);
        afficherErreur("erreur-message", messageErreur);
        
        if(messageErreur !== "" || pseudoErreur !== "" || titreErreur !== ""){
            return;
        }

        titres.push(champTitre.value.trim());
        afficherSujets(titres);

        formulaire.reset();
        champTitre.focus()
    })

    afficherSujets(titres);

}