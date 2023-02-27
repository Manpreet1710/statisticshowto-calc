let resultSection = document.querySelector(".result-section")
let submitButton = document.querySelector(".submit-button")
submitButton.addEventListener("click", () => {
    const trials = document.getElementById("trials").value;
    const p = document.getElementById("probability").value;
    const success = document.getElementById("success").value;
    const binomial = binomialProbability(trials, p, success);
    resultSection.innerHTML = `Binomial Probability: ${binomial}`;
})

// Calculate the binomial coefficient
function choose(n, k) {
    let coef = 1;
    for (let i = 0; i < k; i++) {
        coef *= (n - i) / (i + 1);
    }
    return coef;
}
// Function to calculate the binomial coefficient
function binomialCoefficient(n, k) {
    let result = 1;
    for (let i = 1; i <= k; i++) {
        result *= (n - i + 1) / i;
    }
    return result;
}

// Function to calculate the binomial probability
function binomialProbability(n, p, x) {
    const q = 1 - p;
    const coefficient = binomialCoefficient(n, x);
    const probability = coefficient * Math.pow(p, x) * Math.pow(q, n - x);
    return probability;
}





