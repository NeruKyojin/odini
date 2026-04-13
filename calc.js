const display = document.getElementById("display")
const buttons = document.querySelectorAll("button");

let current = "";
let previous = "";
let operator = null;

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        const value = btn.dataset.value || btn.textContent;
        console.log(value);

        if(!isNaN(value)) {
            //input number
            current += value;
            display.textContent = current;  
        }   else if (value === "=") { 
            calculate();
            display.textContent = current; 
        } else if (value === "C"){
            current = "";
            previous = "";
            operator = null;
            display.textContent = "0";
        }else { 
            //operator
            previous = current;
            current = "";
            operator = value;
                if (current === "") return; // /prevents double operator error
                    
                previous = current;
                current = "";
                operator = value;
                display.textContent = "0"
        } 

        console.log(current,operator,previous);
    });
});

function calculate() {
    const a = Number(previous);
    const b = Number(current);

    let result;

    if(operator === "+") result = a+b;
    if(operator === "-") result = a-b;
    if(operator === "/") result = a/b;
    if(operator === "*") result = a*b;

    current = result.toString();
}

