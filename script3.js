document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("result");
    let currentInput = "";

    // Add click event listeners to all buttons
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", handleButtonClick);
    });

    function handleButtonClick(event) {
        const buttonValue = event.target.textContent;

        if (buttonValue === "C") {
            // Clear the input
            currentInput = "";
        } else if (buttonValue === "=") {
            // Perform calculation
            try {
                currentInput = eval(currentInput).toString();
            } catch (error) {
                currentInput = "Error";
            }
        } else {
            // Append button value to current input
            currentInput += buttonValue;
        }

        // Update the display
        display.value = currentInput;
    }
});
