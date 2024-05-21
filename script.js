
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

// dark mode

const darkModeSwitch = document.querySelector("#darkModeToggle");
darkModeSwitch.addEventListener("click", ToggleDarkMode)

function ToggleDarkMode() {
    let gridContainer = document.querySelector(".gridContainer");
    gridContainer.classList.toggle("gridContainerDark");

    document.querySelectorAll(".bottomSectionProjectsPanel").forEach(function(panel) {
        panel.classList.toggle("bottomSectionProjectsPanelDark");
    });

    let bottom = document.querySelector(".bottomSection");
    bottom.classList.toggle("bottomSectionDark");

    document.querySelectorAll(".bottomSectionAnnouncementsBubble").forEach(function(bubble) {
        bubble.classList.toggle("bottomSectionAnnouncementsBubbleDark");
    });

    /*
    let calculator = document.querySelector(".calcSection");
    let content = document.querySelector(".content");
    let buttonSection = document.querySelector(".buttonsSection");
    let display = document.querySelector(".displayRow");

    calculator.classList.toggle("calcSectionDark");
    content.classList.toggle("contentDark");
    buttonSection.classList.toggle("buttonDark");
    display.classList.toggle("displayRowDark");
    */
}