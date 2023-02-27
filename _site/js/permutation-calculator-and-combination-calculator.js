let resultSection = document.querySelector(".result-section")
let submitButton = document.querySelector(".submit-button")
submitButton.addEventListener("click", () => {
    let amount = document.getElementById("amount").value;
    let subset = document.getElementById("subset").value;
    let value = 0;

    function permutation(n, r) {
        let numerator = factorial(n);
        let denominator = factorial(n - r);
        return numerator / denominator;
    }

    function combination(n, r) {
        let numerator = factorial(n);
        let denominator = factorial(r) * factorial(n - r);
        return numerator / denominator;
    }

    function factorial(n) {
        if (n === 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    resultSection.innerHTML = "Permutations, nPr =" + permutation(amount, subset)
        + "<br>" + "Combinations, nCr =" + combination(amount, subset);
})

// The Expected value E(X) of a variable x is:

// E(X) = μx = ∑[Xi * P(Xi)]