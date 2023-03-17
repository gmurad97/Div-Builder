"use strict";

let visibleSidebar = false;
let enabledDarkMode = true;

let rootClassListElement = document.querySelector(":root");
let fontAwesomeThemeElement = document.getElementsByClassName("fa-pos-theme")[0];
let fontAwesomeMenuElement = document.getElementsByClassName("fa-pos-menu")[0];
let builderPanelElement = document.getElementsByClassName("builder-panel")[0];

function darkMode() {
    if (enabledDarkMode) {
        enabledDarkMode = false;
        rootClassListElement.classList.remove("light-mode");
        fontAwesomeThemeElement.classList.replace("fa-moon", "fa-sun");
    }
    else {
        enabledDarkMode = true;
        rootClassListElement.classList.add("light-mode");
        fontAwesomeThemeElement.classList.replace("fa-sun", "fa-moon");
    }
}

darkMode();

function visiblitySidebar() {
    if (visibleSidebar) {
        visibleSidebar = false;
        builderPanelElement.style.right = "0px";
        builderPanelElement.style.visibility = "visible";
        fontAwesomeMenuElement.classList.replace("fa-bars","fa-xmark");
    }
    else {
        visibleSidebar = true;
        builderPanelElement.style.right = "-768px";
        builderPanelElement.style.visibility = "hidden";
        fontAwesomeMenuElement.classList.replace("fa-xmark","fa-bars");
    }
}

visiblitySidebar();