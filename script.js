const text=document.getElementById("quote");
const author=document.getElementById("author");
const btn=document.getElementById("btn");


const getNewQuote = async () =>
{
    //api for quotes
    let API="https://type.fit/api/quotes";    

    // fetch the data from api
    const response=await fetch(API);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const index = Math.floor(Math.random()*allQuotes.length);

    //Store the quote present at the randomly generated index
    const quote=allQuotes[index].text;
    
    //Store the author of the respective quote
    const auth=allQuotes[index].author;

    if(auth==null)
    {
        author = "Anonymous";
    }
 
    //function to dynamically display the quote and the author
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;

}

btn.addEventListener('click',getNewQuote);