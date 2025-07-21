const values = document.querySelector("#values");

const typePad = document.querySelectorAll(".numbers");
const operations = document.querySelectorAll("operation")

const equalTo = document.querySelector("#equalTo").innerText
let add = false, subtract = false, multiply = false, devision = false;

let input = 0;

typePad.forEach(button => {
    button.addEventListener('click', () => {
    input += parseInt(button.innerText);
    values.innerText = button.innerText

})

});

operations.forEach(button => {
    button.addEventListener('click', () => {
    
        if(button.innerText == "+"){
            console.log(button.innerText);
            
            add = true
            values.innerText += button.innerText;
        }
        if(button.innerText == "-"){
            subtract = true
            values.innerText += button.innerText;
        }
        if(button.innerText == "x"){
            multiply = true
            values.innerText += button.innerText;
        }
        if(button.innerText == "/"){
            devision = true
            values.innerText += button.innerText;
        }

})

});


