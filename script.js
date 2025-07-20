const values = document.querySelector("#values");

const typePad = document.querySelectorAll(".buttons");

let input = "";

typePad.forEach(button => {
    button.addEventListener('click', () => {
    values.innerText = input += button.innerText;    
    });
});


