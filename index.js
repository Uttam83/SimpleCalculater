let display= document.getElementById('display');

let buttons= Array.from(document.getElementsByClassName('button'));

buttons.map(button =>{
    button.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            // when C button is clicked, it clears the display 
            case'C':
            display.innerText='';
            break;
            // when backspace button is clicked, it deletes 1 element from rightside
            case'←':
            if(display.innerText){
                display.innerText = display.innerText.slice(0,-1);
            }            
            break;
            // when equal button is clicked it calculate the value of numeric opereation
            case'=':
                try {
                    display.innerText = eval(display.innerText);
                } catch  {
                    display.innerText = 'Error!';                   
                }           
            break;

            default:
                display.innerText += e.target.innerText;
        }
    });
});