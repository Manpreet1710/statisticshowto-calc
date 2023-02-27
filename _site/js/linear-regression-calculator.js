let resultSection = document.querySelector(".result-section")
let submitButton = document.querySelector(".submit-button")
submitButton.addEventListener("click", () => {
    const xValues = document.getElementById("xValue").value.split(",");
    const yValues = document.getElementById("yValue").value.split(",");

    // Convert the input strings to arrays of numbers
    const x = xValues.map(parseFloat);
    const y = yValues.map(parseFloat);

    // Calculate the mean of x and y
    const xMean = x.reduce((a, b) => a + b) / x.length;
    const yMean = y.reduce((a, b) => a + b) / y.length;

    // Calculate the coefficients of the regression line
    let numerator = 0;
    let denominator = 0;
    for (let i = 0; i < x.length; i++) {
        numerator += (x[i] - xMean) * (y[i] - yMean);
        denominator += Math.pow(x[i] - xMean, 2);
    }
    const b1 = numerator / denominator;
    const b0 = yMean - b1 * xMean;
    resultSection.innerHTML = `Regression: y = ${b0.toFixed(4)} + ${b1.toFixed(4)}x`;
})