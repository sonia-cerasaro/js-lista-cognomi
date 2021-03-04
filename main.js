// console.log("Il tuo cognome e':" + cognome_utente);
//
// console.log(lista_cognomi);
//
// console.log(lista_cognomi);

// Chiedi all'utente il cognome (var in promp)
// Inseriscilo in un array che ha altri cognomi dentro (creo array + push nome utente)
// stampa la lista ordinata alfabeticamente (confronto con un ciclo while)

var cognome_utente = prompt("Inserisci il tuo cognome");

var lista_cognomi = ["Rembrant", "Picasso", "Vinci"];

console.log(lista_cognomi);

lista_cognomi.push(cognome_utente);

lista_cognomi.sort();
document.getElementById("lista").innerHTML = lista_cognomi;
