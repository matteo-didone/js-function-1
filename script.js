//Dare la possibilità di inserire due parole.
//Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
//Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

const firstWord = prompt("Insert your first word: ");
const secondWord = prompt("Insert your second word: ");

function checkLength(firstWord, secondWord) 
{
    if(firstWord > secondWord)
    {
        console.log(firstWord);
    }
    else if(secondWord > firstWord)
    {
        console.log(secondWord);
    }
    else if(firstWord == secondWord)
    {
        console.log(firstWord + "and" + secondWord + "have the same length");
    }
}