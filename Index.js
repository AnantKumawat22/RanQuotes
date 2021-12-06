const api = "https://type.fit/api/quotes";
let text = document.getElementsByClassName("quote_text")[0];
let author = document.getElementsByClassName("quote_author")[0];
let AllQuote = "";

function newQuote(){
    const rand = Math.floor(Math.random() * 1643);
    if(AllQuote[rand].author == null) author.innerText = `- Author Unknown -`;
    else author.innerText = `- ${AllQuote[rand].author} -`;
    text.innerText = `"${AllQuote[rand].text}"`;
}

const ranQuote = async () => {
    try{
        let data = await fetch(api);
        AllQuote = await data.json();
        newQuote();
    }
    catch(err){
        console.error(err);
    }
}

ranQuote();