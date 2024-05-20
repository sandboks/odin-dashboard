
var r = document.querySelector(':root');

/* color picker functionality */

let customColor = "#ffffff";

const colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("input", (event) => {
    customColor = event.target.value;
    RecolorCalculator();
});

function RecolorCalculator() {
    //document.querySelector(".calcSection").style.borderColor = customColor;

    r.style.setProperty('--main-color', customColor);

    /*
    document.querySelectorAll(".operatorButton").forEach(function(button) {
        button.style.backgroundColor = customColor;
    });
    */
}