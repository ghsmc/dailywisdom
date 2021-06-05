const url = "https://api.quotable.io/random";
function generateQuote(){
   fetch(url)
  .then(function(data) {
         return data.json();
    })
    .then(function(data){    
    document.getElementById("quote").innerHTML = data.content; document.querySelector(".author").innerHTML = "- " + data.author;
   })
 .catch(function(err) {
    console.log(err); 
    });
 }