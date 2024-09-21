const api = "https://api.api-ninjas.com/v1/quotes";
let text = document.getElementsByClassName("quote_text")[0];
let author = document.getElementsByClassName("quote_author")[0];
let AllQuote;

function newQuote(){

    // No Quote
    if(AllQuote.quote == null) ranQuote();

    // No Author
    if(AllQuote.author == null) author.innerText = `- Author Unknown -`;
    else author.innerText = `- ${AllQuote.author} -`;

    // If quote characters are more than 170 then it will not show till there.
    if(AllQuote.quote.length > 170){
        AllQuote = AllQuote.substring(0, 171).concat("...");
    }
    text.innerText = `"${AllQuote.quote}"`;
}

const ranQuote = async () => {
    try{
        let response = await fetch(api, {
            headers: { 
                'X-Api-Key': 'and/0Dxbn0hzpLLNd2XWRw==rpJbDnbc8coVrXSM',
                'Content-Type': 'application/json'
            }
        });
        AllQuote = await response.json();
        AllQuote = AllQuote[0];
        newQuote();
    }
    catch(err){
        console.error(err);
    }
}

ranQuote();

// API
// {
//     quote: "",
//     author: "",
//     category: ""
// }