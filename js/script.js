//Chiedo i dati all'utente
const userName = prompt("Scrivi qui il tuo nome");
const userLastName = prompt("Scrivi qui il tuo cognome");
const userFavoriteColor = prompt("Scrivi qui il tuo colore preferito");
const myNumber = 21;

//Creo la password unendo i dati
let passWord = userName + userLastName + userFavoriteColor + myNumber;
console.log(passWord);

//Stampo il risultato in pagina
document.getElementById('result').innerHTML = passWord;