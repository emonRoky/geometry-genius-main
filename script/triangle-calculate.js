function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base'); 
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    
    // get triangle height value

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightValue = triangleHeightInput.value;
    const height = parseFloat(triangleHeightValue)

    // Calculate Triangle Area

    const area = 0.5 * base * height;
    console.log(area);

    // display triangle Area

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
    
    
}