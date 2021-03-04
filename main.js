
var cognome_utente = prompt("Inserisci il tuo cognome");
var cognome_utente_corretto = cognome_utente.charAt(0).toUpperCase() + cognome_utente.slice(1);
var lista_cognomi = ["Rembrant", "Picasso", "Vinci"];

console.log(lista_cognomi);

lista_cognomi.push(cognome_utente_corretto);

lista_cognomi.sort();

for (var i = 0; i < lista_cognomi.length; i++) {
  lista_cognomi[i] = (i+1) + ") " + lista_cognomi[i] + "<br>";
}
var risultato = lista_cognomi.toString().replace(/,/g, " ");

document.getElementById("lista").innerHTML = risultato;
