const destinations = [
{ id: 1, ville: "Santorin", pays: "Grèce",     prix: 1200, duree: 7,   disponible: true  },
{ id: 2, ville: "Bali",     pays: "Indonésie", prix: 1800, duree: 10,  disponible: true  },
{ id: 3, ville: "Istanbul", pays: "Turquie",   prix: 750,  duree: 5,   disponible: false },
{ id: 4, ville: "Rome",     pays: "Italie",    prix: 950,  duree: 4,   disponible: true  },
{ id: 5, ville: "Tokyo",    pays: "Japon",     prix: 2500, duree: 12,  disponible: true  },
{ id: 6, ville: "Djerba",   pays: "Tunisie",   prix: 500,  duree: 6,   disponible: false }
];


//1
destinations.forEach( (D) => console.log(D.ville) );
//2
const Villes = destinations.map( (D) => D.ville );
console.log(Villes)
//3
const PMoins1500 = destinations.filter( (D) => D.prix<1500 );
console.log(PMoins1500)
//4
const ID3=destinations.find( (D) => D.id===3 );
console.log(ID3)
//5
const TokyoIndex = destinations.findIndex( (D) => D.ville === "Tokyo" )
console.log(TokyoIndex)
//6
const DestExists = destinations.some( (D) => D!==null )
console.log(DestExists)
//7
const NotNullPrice = destinations.every( (D) => D.duree > 0)
console.log(NotNullPrice)
//8
const Total = destinations.reduce( (S,C) => S+C.prix ,0 )
console.log(Total)