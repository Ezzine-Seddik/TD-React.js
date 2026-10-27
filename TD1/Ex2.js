const reservations = [
{ numero: 101, client: "Nadia", destination: "Bali",     montant: 1800, statut: "Confirmée" },
{ numero: 102, client: "Karim", destination: "Rome",     montant: 950,  statut: "En attente" },
{ numero: 103, client: "Leila", destination: "Tokyo",    montant: 2500, statut: "Confirmée" },
{ numero: 104, client: "Sami",  destination: "Santorin", montant: 1200, statut: "Annulée" },
{ numero: 105, client: "Amira", destination: "Djerba",   montant: 500,  statut: "Confirmée" }
];

//1
const ResCon = reservations.filter((R) => R.statut==="Confirmée");
//console.log(ResCon);
//2
const Noms = reservations.map((D) => D.client);
//console.log(Noms);
//3
const R103 = reservations.find((D) => D.numero===103);
//console.log(R103);
//4
const Montant = ResCon.reduce((S,D) => S+D.montant,0);
//console.log(Montant);
//5
const IsCon = reservations.every((D) => D.statut==="Confirmée");
//console.log(IsCon);
//6
const ClientDest = reservations.map((D) => ({client: D.client, voyage: D.destination}));
console.log(ClientDest);