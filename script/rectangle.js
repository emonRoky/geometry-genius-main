function calculateRectangleArea() {
    const rectangleLengthInput = document.getElementById('rectangle-length');
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleLengthValue = rectangleLengthInput.value;
    const rectangleWidthValue = rectangleWidthInput.value;
    const length = parseFloat(rectangleLengthValue);
    const width = parseFloat(rectangleWidthValue);

    // Calculate Rectangle Area
    const area = length * width;

    // display Rectangle Area
    const displayArea = document.getElementById('rectangle-area');
    displayArea.innerText = area;
}