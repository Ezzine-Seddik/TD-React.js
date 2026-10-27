//A
const destinationsEurope = ["Rome", "Paris", "Madrid"];
const destinationsAsie = ["Tokyo", "Bali", "Bangkok"];

//1
const destinationsEurope1=[...destinationsEurope];
//console.log(destinationsEurope1);

//2
let destinations=[...destinationsEurope,...destinationsAsie];
//console.log(destinations);

//3
destinations.unshift("lisbonne");
//console.log(destinations);

//4
destinations.push("londres");
//console.log(destinations);

//5
const TsaufP= destinations.filter((E) => E!=="Paris");
//console.log(TsaufP);


//B

const reservation = {
numero: 201,
client: "Nadia",
destination: "Bali",
statut: "En attente"
};

//1
const reservation1= {...reservation};
//console.log(reservation2)
//2
const reservation2= {...reservation,statut: "Confirmée"}
//console.log(reservation3)
//3
const reservation3= {...reservation,assurance: true}
console.log(reservation4)
//4
const reservation4= {...reservation,statut: "Confirmée",destination: "Paris"}
//console.log(reservation3)