function interquartileRange(array) {
    // Sort the array in ascending order
    array.sort(function (a, b) {
        return a - b;
    });

    // Find the median (Q2)
    var medianIndex = Math.floor(array.length / 2);
    var median = array.length % 2 === 0 ? (array[medianIndex] + array[medianIndex - 1]) / 2 : array[medianIndex];

    // Find the first quartile (Q1)
    var q1 = medianIndex % 2 === 0 ? (array[Math.floor(medianIndex / 2)] + array[Math.floor(medianIndex / 2) - 1]) / 2 : array[Math.floor(medianIndex / 2)];

    // Find the third quartile (Q3)
    var q3 = medianIndex % 2 === 0 ? (array[Math.floor(medianIndex + (array.length - medianIndex) / 2)] + array[Math.floor(medianIndex + (array.length - medianIndex) / 2) - 1]) / 2 : array[Math.floor(medianIndex + (array.length - medianIndex) / 2)];

    // Calculate the interquartile range
    var iqr = q3 - q1;

    // Return the interquartile range
    return iqr;
}

let resultSection = document.querySelector(".result-section")
let submitButton = document.querySelector(".submit-button")
submitButton.addEventListener("click", () => {
    const input = document.getElementById("dataSet").value;
    const data = input.split(",").map(Number);
    var iqr = interquartileRange(data);
    resultSection.innerHTML = `Interquartile Range:  ${iqr}`;

})