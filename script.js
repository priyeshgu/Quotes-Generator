const genButton = document.getElementById("gen-button");
genButton.addEventListener('click', () =>{
    console.log("test");
    fetch('http://localhost:3000/quote')
    .then(response => response.text())
    .then(quote => {
        document.getElementById('quote-container').innerText = quote;
    })
    .catch(erron =>{
        console.error('Error:',error);
    });
});

