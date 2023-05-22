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
        const firstWordReturned = "The first word " + this.firstWord +  " is longer than the second word " + this.secondWord;
        return firstWordReturned;
    }
    //4. If second word is longer than first word, return second word
    else if(secondWord > firstWord)
    {
        const secondWordReturned = "The second word " + this.secondWord +  " is longer than the first word " + this.firstWord;
        return secondWordReturned;
    }
    //5. If first word and second word have the same length, return both
    else if(firstWord == secondWord)
    {
        const sameLength = "The first word " + this.firstWord +  " and the second word " + this.secondWord + " have the same length";
        return sameLength;
    }
}

//6.Call the function and print the result on the console
console.log(checkLength(firstWord, secondWord));

//7. Print the result on the HTML page
document.getElementById("result").innerHTML = checkLength(firstWord, secondWord);

