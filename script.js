let currentValue = 0;
let action = 0;
let result = 0;
let nextValue = 0;
function showDefault () {
    let display = document.getElementById('display');
    display.innerHTML = 0;
    currentValue = 0;
    result = 0;
    action = 0;
    nextValue = 0;
}
function showOnDisplay(idOfButton) {
let display = document.getElementById('display');
let button = document.getElementById(idOfButton);
    if(display.innerHTML === "0") {
        display.innerHTML = button.value;
        if(idOfButton === 'decimal') {
            display.innerHTML = "0."
        }
    }
    else   {
        display.innerHTML += button.value;
        if(idOfButton === 'decimal') {
            if(!display.innerHTML.includes("."))
            display.innerHTML += "."
           }
    }
}
function calculateVal(idOfButton) {
let display = document.getElementById('display');
let button = document.getElementById(idOfButton);
if(idOfButton === 'add') {
    nextValue = display.innerHTML;
    console.log(nextValue);
    if(action === '-') {
        result = parseFloat(currentValue) - parseFloat(nextValue);
    }
    else if(action === '*') {
        if(nextValue === '0') {
            result = currentValue;
            }
            else{
            result = parseFloat(currentValue) * parseFloat(nextValue);
            }
    }
    else if(action === '/') {
        result = parseFloat(currentValue) / parseFloat(nextValue);
    }
    else { 
    result = parseFloat(currentValue) + parseFloat(nextValue);
    }
    console.log(result)
     if(currentValue === 0) {
        currentValue = parseFloat(display.innerHTML);
        }
        else {
            currentValue  = result
        }
        console.log(currentValue)
    display.innerHTML = 0;
    action = '+';
    console.log(action)
    
}
else if(idOfButton === 'subtract') {
        nextValue = display.innerHTML
        console.log(nextValue);
        if(action === '+') {
            result = parseFloat(currentValue) + parseFloat(nextValue);
        }
        else if(action === '*' ) {
            if(nextValue === '0') {
            result = currentValue;
            }
            else{
            result = parseFloat(currentValue) * parseFloat(nextValue);
            }
        }
        else if(action === '/') {
                result = parseFloat(currentValue) / parseFloat(nextValue);
        }
        else {
        result = parseFloat(currentValue) - parseFloat(nextValue);
       
        }
        console.log(result)
        if(currentValue === 0) {
        currentValue = parseFloat(display.innerHTML);
        }
        else {
            currentValue = result;
        }
    console.log(currentValue)
    display.innerHTML = 0;
    action = '-';
    console.log(action)
}
else if(idOfButton === 'multiply') {
        
        nextValue = display.innerHTML
        console.log(nextValue)
        if(action === '+') {
            result = parseFloat(currentValue) + parseFloat(nextValue);
        }
        else if(action === '-') {
            result = parseFloat(currentValue) - parseFloat(nextValue);
        }
        else if(action === '/') {
            result = parseFloat(currentValue) / parseFloat(nextValue);
        }
        
        else {
        result = parseFloat(currentValue) * parseFloat(nextValue);
        }
        console.log(result)
        if(currentValue === 0) {
        currentValue = parseFloat(display.innerHTML);
        }
        else {
            currentValue = result;
        }
        console.log(currentValue)
    display.innerHTML = 0;
    action = '*';
    console.log(action)
}
else if(idOfButton === 'divide') {
    nextValue = display.innerHTML
    console.log(nextValue)
    if(action === '+') {
        result = parseFloat(currentValue) + parseFloat(nextValue);
    }
    else if(action === '-') {
        result = parseFloat(currentValue) - parseFloat(nextValue);
    }
    else if(action === '*') {
        result = parseFloat(currentValue) * parseFloat(nextValue);
    }
    
    else {
    result = parseFloat(currentValue) / parseFloat(nextValue);
    }
    console.log(result)
    if(currentValue === 0) {
        currentValue = parseFloat(display.innerHTML);
        }
        else {
            currentValue = result;
        }
        console.log(currentValue)
    display.innerHTML = 0;
    action = '/';
    console.log(action)
}
else if(idOfButton === 'equals') {
        if(action === '+') {
           display.innerHTML = currentValue + parseFloat(display.innerHTML);
           currentValue = 0;
        }
        else if(action === '-') {
            if(nextValue === '0') {
                display.innerHTML = currentValue * -parseFloat(display.innerHTML)
            }
            else {
            display.innerHTML = currentValue - parseFloat(display.innerHTML)
            currentValue = 0;
            }
        }
        else if(action === '*') {
            display.innerHTML = currentValue * parseFloat(display.innerHTML)
            currentValue = 0;
        }
        else if(action === '/') {
            display.innerHTML = currentValue / parseFloat(display.innerHTML)
            currentValue = 0;
        }
        action = '=';
        console.log(action)
    }
}
