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
    if(finalTemp > 90 && unit === "F" || finalTemp > 32 && unit === "C"){
        domString += `<h2 class="red">`;
            domString += `${finalTemp} `;
            domString += `&deg;`;
            domString += `${unit}`; 
        domString += `</h2>`;
    } else if (finalTemp >= 32 && unit === "F" || finalTemp >= 0 && unit === "C"){
        domString += `<h2 class="green">`;
            domString += `${finalTemp} `;
            domString += `&deg;`;
            domString += `${unit}`; 
            domString += `</h2>`;
        } else {
        domString += `<h2 class="blue">`;
            domString += `${finalTemp} `;
            domString += `&deg;`;
            domString += `${unit}`; 
        domString += `</h2>`;
    } 
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
    console.log("temp: ", temp); 
    if(temp === "") {
        printToDom("tempOutput", `<h3 class="red">Please enter a value</h3>`)
    } else if(cBtn.checked) {
        console.log("C");
        toCelsius(temp);
    } else if (fBtn.checked) {
        console.log("F");
        toFahrenheit(temp);
    };
};

const clear = () => {
    tempInput.value = "";
    tempOutput.innerHTML = "";
};

convertBtn.addEventListener('click', function(e){
    e.preventDefault();
    determineConverter(tempInput.value);
});

clearBtn.addEventListener('click', function(){
    e.preventDefault();
    clear();
});

// tempInput.addEventListener('keydown', determineConverter(), "return");
