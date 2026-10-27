const favoris = [
{ id: 1, ville: "Venise",    pays: "Italie",   visite: false },
{ id: 2, ville: "Marrakech", pays: "Maroc",    visite: true  },
{ id: 3, ville: "Maldives",  pays: "Maldives", visite: false },
{ id: 4, ville: "Barcelone", pays: "Espagne",  visite: true  }
];

//1
//favoris.forEach((F) => console.log(F.ville))

//2
const NonV= favoris.filter((F) => F.visite===false);
//console.log(NonV);

//3
const Villes=favoris.map((F) => F.ville);
//console.log(Villes);

//4
const ID3= favoris.find((F) => F.id===3);
//console.log(ID3);

//5
const Nb= favoris.reduce((s,c) => s+(c.visite===true),0)
//console.log(Nb)

//6
const favoris1= [...favoris,
                {id:5,
                ville:"Mendoza",
                pays:"argentine",
                visite:false}];
//console.log(favoris1);

//7
const favoris2=favoris.map((f) => f.id===1?{...f,visite : !f.visite}:{...f})
//console.log(favoris2);

//8
const favoris3= favoris.filter((f) => f.id!==2)
//console.log(favoris3)