"use strict";

let blockBuilder = document.getElementById("block-builder-id");

function generateBuilder(){

}



/*BEGIN - POSITION CHANGE BUILDER RESULT*/

function resetPosition(){
    blockBuilder.style.top = "0px";
    blockBuilder.style.right = "0px";
}

function topPos(){
    let topValue = parseInt(getComputedStyle(blockBuilder).top.toString().replace("px","")) - 10;
    blockBuilder.style.top = topValue + "px";
}

function rightPos(){
    let rightValue = parseInt(getComputedStyle(blockBuilder).right.toString().replace("px","")) - 10;
    blockBuilder.style.right = rightValue + "px";
}
function bottomPos(){
    let bottomValue = parseInt(getComputedStyle(blockBuilder).top.toString().replace("px","")) + 10;
    blockBuilder.style.top = bottomValue + "px";
}

function leftPos(){
    let leftValue = parseInt(getComputedStyle(blockBuilder).right.toString().replace("px","")) + 10;
    blockBuilder.style.right = leftValue + "px";
}

/*ENDED - POSITION CHANGE BUILDER RESULT*/