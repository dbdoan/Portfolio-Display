// Reference: https://www.w3schools.com/howto/howto_js_typewriter.asp

var target_class = "hello"

// Text output
var output_text = 'hello, my name is danny.';

// Speed of typing animation
var typing_speed = 60;

// Time in milliseconds to display cursor at the end
var end_display_ms = 2000; 

// Initialize character counter
var i = 0;
function typeWriter() {

    // While char count is less than total string length
    if (i < output_text.length) {
        // Blink class to prevent blinking while typing
        document.getElementById(target_class).classList.add("no-blink");
        // Update inner HTML element [the header txt] with new character
        document.getElementById(target_class).innerHTML = output_text.substring(0, i + 1);

        i++;
        
        // Typing speed
        setTimeout(typeWriter, typing_speed);

    } else {
        // Remove the no-blink class once string is fully typed out
        document.getElementById(target_class).classList.remove("no-blink");
        // Blinking effect class activated 
        document.getElementById(target_class).classList.add("blink");

        // Timer for end blink
        setTimeout(function () {
            document.getElementById(target_class).classList.remove("blink");
        }, end_display_ms);
    }
}

window.onload = function () {
    typeWriter();
}
