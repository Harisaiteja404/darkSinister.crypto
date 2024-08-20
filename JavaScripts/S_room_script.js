function generateRandomText() {
    const prefix = "STX";
    const randomNumber = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 99999
    return `${prefix}${randomNumber.toString().padStart(4, '0')}`; 
}

function updateAllSpans() {
    const spanElements = document.querySelectorAll(".Myst_code");
    spanElements.forEach(span => {
        span.textContent = generateRandomText();
    });
}

function generateFractionNumber() {
    const min = 0.010;
    const max = 0.040;
    const randomFraction = (Math.random() * (max - min) + min).toFixed(3); // Generate random fraction between 0.010 and 0.040
    return randomFraction;
}

function updateFractionSpans() {
    const fractionSpanElements = document.querySelectorAll(".cost_spn");
    fractionSpanElements.forEach(span => {
        span.textContent = generateFractionNumber();
    });
}

// Call functions to set the initial random text and fractions for all spans
updateAllSpans();
updateFractionSpans();