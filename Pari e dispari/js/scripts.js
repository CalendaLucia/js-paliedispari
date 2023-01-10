// Pari e Dispari

// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const choose = prompt('Pari o Dispari?');
const number = parseInt((prompt('Scegli un numero da 1 a 5')));

console.log(choose);

console.log(number);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function randomNumber (random) {

    const generateNumber = Math.floor(Math.random() * 5) + 1;
    console.log(generateNumber);

        // Sommiamo i due numeri
    const result = generateNumber+ number;
    console.log(result);
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    if (result % 2 == 0) {

        console.log('Pari');
        return 'Pari';
      
      
      } else {
        
        console.log('Dispari');
        return 'Dispari';

      }


    return generateNumber;
    
}

// Richiamo la funzione
randomNumber();


      // Dichiariamo chi ha vinto.

      if (choose == 'pari' || choose == 'dispari' ) {

        alert('Hai Vinto!!');
    
      } else {

          alert('Hai Perso....');
   
        }


