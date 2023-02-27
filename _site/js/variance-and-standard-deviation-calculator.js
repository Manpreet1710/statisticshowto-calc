let resultSection = document.querySelector(".result-section")
let submitButton = document.querySelector(".submit-button")


submitButton.addEventListener("click", () => {
    const input = document.getElementById("dataSet").value;
    const data = input.split(",").map(Number);

    // Calculate the mean
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    const mean = sum * sum / data.length;

    // Calculate the variance
    let variance = 0;
    for (let i = 0; i < data.length; i++) {
        variance += Math.pow(data[i], 2);
    }
    variance = variance - mean;
    let mySet = data.length - 1
    variance = variance / mySet

    // Calculate the standard deviation
    const stdDeviation = Math.sqrt(variance);

    // Display the results
    resultSection.innerHTML = `Mean: ${mean}<br>
                    Variance: ${variance}<br>
                    Standard Deviation: ${stdDeviation}`;
})