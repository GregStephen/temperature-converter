let tempInput = document.getElementById("tempInput");
const fBtn = document.getElementById("fahrenheit");
const cBtn = document.getElementById("celsius");
const convertBtn = document.getElementById("convertBtn");
const clearBtn = document.getElementById("clearBtn");
let tempOutput = document.getElementById("tempOutput");


const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (finalTemp, unit) => {
    let domString = "";
    domString += `<h2>`;
        domString += `${finalTemp} `;
        domString += `degrees `;
        domString += `${unit}`; 
    domString += `</h2>`;
    printToDom("tempOutput", domString);
};
const toCelsius = (temp) => {
    let convertedTemp = (((temp - 32) * 5) / 9);
    domStringBuilder(convertedTemp, "C");
};

const toFahrenheit = (temp) => {
    let convertedTemp = (((temp * 9) / 5) + 32);
    domStringBuilder(convertedTemp, "F");
};

const determineConverter = (temp) => {
    console.log("hey");
    console.log(temp); 
    if(cBtn.checked) {
        console.log("C");
        toCelsius(temp);
    } else if (fBtn.checked) {
        console.log("F");
        toFahrenheit(temp);
    };
    // printToDom("tempOutput", tempInput.value)
};

const clear = () => {
    tempInput.value = "";
    tempOutput.innerHTML = "";
}

convertBtn.addEventListener('click', function(e){
    e.preventDefault();
    determineConverter(tempInput.value);
    });

clearBtn.addEventListener('click', function(){
    e.preventDefault();
    clear();
})
