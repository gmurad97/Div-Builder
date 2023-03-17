"use strict";

let blockBuilder = document.getElementById("block-builder-id");

function generateBuilder(){

}


function resetPosition(){
    blockBuilder.style.top = "0px";
    blockBuilder.style.right = "0px";
    blockBuilder.style.bottom = "0px";
    blockBuilder.style.left = "0px";
}

function topIncrementPosition(){
    console.log(blockBuilder.style.getPropertyValue("top"));

}

function rightIncrementPosition(){
    console.log(blockBuilder.offsetTop);
}

function bottomIncrementPosition(){
    blockBuilder.style.bottom += 1;
}

function leftIncrementPosition(){
    blockBuilder.style.left += 1;
}