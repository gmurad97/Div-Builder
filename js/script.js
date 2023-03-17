let builderPanelElement = document.getElementsByClassName("builder-panel")[0];
let visibilitySidebarBoolean = true;


let pol = document.getElementsByClassName("fa-pos-chevron")[0];






function visibilitySidebar(){
    if(visibilitySidebarBoolean){
        pol.classList.remove("fa-chevron-right");
        pol.classList.add("fa-chevron-left");
        visibilitySidebarBoolean = false;
        builderPanelElement.style.right = "-36%";
    }
    else{
        pol.classList.remove("fa-chevron-left");
        pol.classList.add("fa-chevron-right");
        visibilitySidebarBoolean = true;
        builderPanelElement.style.right = "0px";
    }
}