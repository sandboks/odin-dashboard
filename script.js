
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

let darkMode = false;

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

    let banner = document.querySelector(".topBannerHeader");
    banner.classList.toggle("topBannerHeaderDark");

    let darkToggle = document.querySelector(".darkModeContainer");
    darkToggle.classList.toggle("darkModeContainerDark");

    darkMode = !darkMode;
    let darkmodeIcon = document.querySelector("#darkmodeIcon");
    darkmodeIcon.src = !darkMode ? "img/moon-waning-crescent.svg" : "img/white-balance-sunny.svg";
}