var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var translateOutput=document.querySelector("#translate-output")
var ServerURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text)

{
    return ServerURL + "? " + "text= " + text;
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong with server! Try again after sometime");
}

function clickHandler() {
    //output.innertext="fhtfhgb "+txtInput.value
    //taking input value
    var inputText = textInput.value;
    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json =>{ 
            var translatedText=json.contents.translated;
            translateOutput.innerText=translatedText;
        })
            
        .catch(errorHandler)
};

// function catch(callbackfn)
// {
//     //do something
//     //something more
//     callbackfn(error);
// }

btnTranslate.addEventListener("click",clickHandler)





