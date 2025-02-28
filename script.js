// Function to start the website tutorial
function startTour() {
    const intro = introJs();
    intro.setOptions({
        steps: [
            { element: '#step1', intro: 'Welcome! This is the home page.' },
            { element: '#step2', intro: 'Here is the services section.' },
            { element: '#step3', intro: 'Click here to contact us.' }
        ],
        showProgress: true,  // Show progress bar
        showBullets: false,  // Hide step bullets
        exitOnOverlayClick: false, // Prevent accidental exits
        nextLabel: 'Next →',
        prevLabel: '← Back',
        doneLabel: 'Finish'
    });
    intro.start();
}

// Add event listener when the page loads
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("startTourButton");
    if (button) {
        button.addEventListener("click", startTour);
    }
});
