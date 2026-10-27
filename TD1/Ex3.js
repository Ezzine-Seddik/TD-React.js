const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];
//A
//1
const [Prem, Deux]=[...pays];
//console.log(Prem,Deux);
//2
const [,,Troix]=[...pays];
//console.log(Troix);
//3
const [destinationPrincipale,...autresPays]=[...pays];
//console.log(destinationPrincipale,autresPays)

//B

const voyage = {
destination: "Bali",
prix: 1800,
duree: 10,
transport: "Avion",
hotel: "5 étoiles"
};

//1
const {destination, prix} = voyage;
//console.log(destination,prix);
//2
const {destination: ville}= voyage;
//console.log(ville);
//3
const {prix: prixV="0",duree: dureeV="0"}=voyage;
//console.log(prixV,dureeV);
//4
function afficherVoyage(...V){
    console.log(V);
}
//afficherVoyage(voyage);