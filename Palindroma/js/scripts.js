
// Palindroma

// Chiedere all’utente di inserire una parola

const utenteParola = prompt("Inserisci una parola");
console.log(utenteParola);

// Creare una funzione per capire se la parola inserita è palindroma

        // funzione invertiParola 
function invertiParola(str) {
    let inverti  = str.split('').reverse().join('');
    return inverti;
}
        // nuova variabile parolaInversa
const parolaInversa = invertiParola(utenteParola);

        // condizione 
if (parolaInversa == utenteParola) {
    
    console.log("la parola è palindroma");

} else {

    console.log("la parola non è palindroma");
}
