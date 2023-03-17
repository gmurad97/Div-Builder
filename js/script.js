let visibilitySidebarBoolean = true;





let builderPanelElement = document.getElementsByClassName("builder-panel")[0];



let pol = document.getElementsByClassName("fa-pos-menu")[0];






function visibilitySidebar(){
    if(visibilitySidebarBoolean){
        pol.classList.remove("fa-xmark");
        pol.classList.add("fa-bars");
        visibilitySidebarBoolean = false;
        builderPanelElement.style.right = "-1024px";
        builderPanelElement.style.visibility = "hidden";
    }
    else{
        pol.classList.remove("fa-bars");
        pol.classList.add("fa-xmark");
        visibilitySidebarBoolean = true;
        builderPanelElement.style.right = "0px";
        builderPanelElement.style.visibility = "visible";
    }
}




/*END! STOP!!! THIS CODE FOR TEST!!! PLEASE DONT EDIT THIS CODE!!!*/


"use strict";

let darkModeIcon = document.getElementsByClassName("fa-pos-theme")[0];
let rootCssStyle = document.querySelector(":root");
let enabledDarkMode = true;

function darkMode(){
    if(enabledDarkMode){
        rootCssStyle.style.setProperty("--based-color","#ff793f");
        rootCssStyle.style.setProperty("--input-bg-color","#3d3e40");
        rootCssStyle.style.setProperty("--input-txt-color","#ced6e0");
        rootCssStyle.style.setProperty("--builder-panel-bg-color","#18191a");
        rootCssStyle.style.setProperty("--builder-result-bg-color","#242526");
        enabledDarkMode = false;
        darkModeIcon.classList.remove("fa-moon");
        darkModeIcon.classList.add("fa-sun");
    }
    else{
        rootCssStyle.style.setProperty("--based-color","#e15f41");
        rootCssStyle.style.setProperty("--input-bg-color","#f1f2f6");
        rootCssStyle.style.setProperty("--input-txt-color","#000000");
        rootCssStyle.style.setProperty("--builder-panel-bg-color","#dfe4ea");
        rootCssStyle.style.setProperty("--builder-result-bg-color","#ffffff");
        enabledDarkMode = true;
        darkModeIcon.classList.remove("fa-sun");
        darkModeIcon.classList.add("fa-moon");
    }
}
darkMode();