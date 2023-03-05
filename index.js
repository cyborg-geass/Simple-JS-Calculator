let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = "";
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log("button text is ", buttonText);
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if(buttonText=='sin')
        {
            buttonText="Math.sin";
            screenValue+=buttonText;
        }
        else if(buttonText=='cos')
        {
            screenValue+=buttonText;
            buttonText="Math.cos";
        }
        else if(buttonText=='tan')
        {
            buttonText="Math.tan";
            screenValue+=buttonText;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}