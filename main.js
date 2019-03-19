let tempInput = document.getElementById("tempInput");
const fBtn = document.getElementById("fahrenheit");
const cBtn = document.getElementById("celsius");
const convertBtn = document.getElementById("convertBtn");
const clearBtn = document.getElementById("clearBtn");
let tempOutput = document.getElementById("tempOutput");

const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
};

const determineConverter = () => {
    console.log("hey");
    console.log(tempInput.value); 
    if(cBtn.checked) {
        console.log("C");
    } else if (fBtn.checked) {
        console.log("F");
    };
    printToDom("tempOutput", tempInput.value)
};

const clear = () => {
    tempInput.value = "";
    tempOutput.innerHTML = "";
}

convertBtn.addEventListener('click', function(e){
    e.preventDefault();
    determineConverter();
    });

clearBtn.addEventListener('click', function(){
    e.preventDefault();
    clear();
})
