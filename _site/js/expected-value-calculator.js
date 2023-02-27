let resultSection = document.querySelector(".result-section")
let submitButton = document.querySelector(".submit-button")
submitButton.addEventListener("click", () => {
    let probabilitiesInput = document.getElementById("probabilities").value;
    let trailsInput = document.getElementById("trails").value;
    let expectedValue = 0;
    expectedValue += probabilitiesInput * trailsInput;
    resultSection.innerHTML = "The expected value is: " + expectedValue;
})

// The Expected value E(X) of a variable x is:

// E(X) = μx = ∑[Xi * P(Xi)]