"use strict";

let blockBuilder = document.getElementById("block-builder-id");

function applyStyle() {
    let heightSize = document.getElementById("height-input-option").value;
    let widthSize = document.getElementById("width-option").value;
    let heightSizeType = document.getElementById("height-select-option").value;
    let widthSizeType = document.getElementById("width-select-option").value;
    let textInner = document.getElementById("text-option").value;
    let gradientOneColor = document.getElementById("gradient-one-option").value;
    let gradientTwoColor = document.getElementById("gradient-two-option").value;
    let gradientDegree = document.getElementById("gradient-degree-option").value;
    let bgColor = document.getElementById("bg-color-option").value;
    let txtColor = document.getElementById("txt-color-option").value;
    let bgImage = document.getElementById("bg-image-option");
    let borderWidth = document.getElementById("border-width-option").value;
    let borderWidthSizeType = document.getElementById("border-width-select-option").value;
    let borderStyle = document.getElementById("border-style-select-option").value;
    let borderColor = document.getElementById("border-color-option").value;
    let borderRadius = document.getElementById("border-radius-option").value;
    let borderRadiusSizeType = document.getElementById("border-radius-select-option").value;
    let fontFamily = document.getElementById("font-family-select-option").value;
    let fontSize = document.getElementById("font-size-option").value;
    let fontSizeSizeType = document.getElementById("font-size-select-option").value;
    let transformType = document.getElementById("transform-select-option").value;
    let transformDegree = document.getElementById("rotate-degree-option").value;

    blockBuilder.style.height = heightSize + heightSizeType;
    blockBuilder.style.width = widthSize + widthSizeType;
    blockBuilder.innerHTML = textInner;
    blockBuilder.style.backgroundImage = `linear-gradient(${gradientDegree}deg, ${gradientOneColor}, ${gradientTwoColor})`;
    blockBuilder.style.backgroundColor = bgColor;
    blockBuilder.style.color = txtColor;
    if (!(bgImage.files.length == 0)) {
        blockBuilder.style.backgroundImage = `url("${URL.createObjectURL(bgImage.files[0])}")`;
    }
    blockBuilder.style.border = `${borderWidth + borderWidthSizeType} ${borderStyle} ${borderColor}`;
    blockBuilder.style.borderRadius = borderRadius + borderRadiusSizeType;
    blockBuilder.style.fontFamily = fontFamily;
    blockBuilder.style.fontSize = fontSize + fontSizeSizeType;
    blockBuilder.style.transform = `${transformType}(${transformDegree}deg)`;
}

function resetPosition() {
    blockBuilder.style.top = "0px";
    blockBuilder.style.right = "0px";
}

function topPos() {
    let topValue = parseInt(getComputedStyle(blockBuilder).top.toString().replace("px", "")) - 10;
    blockBuilder.style.top = topValue + "px";
}

function rightPos() {
    let rightValue = parseInt(getComputedStyle(blockBuilder).right.toString().replace("px", "")) - 10;
    blockBuilder.style.right = rightValue + "px";
}
function bottomPos() {
    let bottomValue = parseInt(getComputedStyle(blockBuilder).top.toString().replace("px", "")) + 10;
    blockBuilder.style.top = bottomValue + "px";
}

function leftPos() {
    let leftValue = parseInt(getComputedStyle(blockBuilder).right.toString().replace("px", "")) + 10;
    blockBuilder.style.right = leftValue + "px";
}