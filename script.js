//Ask the user for 2 words, then check if the words have the same length using a function
//If they have the same length, then print both on the console; otherwise, print the longest one.

//1. Ask the user for 2 words
const firstWord = prompt("Insert your first word: ");
const secondWord = prompt("Insert your second word: ");

//2. Check if the words have the same length using a function
function checkLength(firstWord, secondWord) 
{
    this.firstWord = firstWord;
    this.secondWord = secondWord;

    //3. If first word is longer than second word, return first word
    if(firstWord > secondWord)
    {
        return firstWord;
    }
    //4. If second word is longer than first word, return second word
    else if(secondWord > firstWord)
    {
        return secondWord;
    }
    //5. If first word and second word have the same length, return both
    else if(firstWord == secondWord)
    {
        return firstWord + " " + secondWord;
    }
}

//6.Call the function and print the result on the console
console.log(checkLength(firstWord, secondWord));

