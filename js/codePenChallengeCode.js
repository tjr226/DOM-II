let sampleButton = document.querySelector('.sampleButton');
sampleButton.addEventListener('click', (event) => {
    alert('You Clicked the Sample Button!')
})

let clickMeButton = document.querySelector('.container .button');
clickMeButton.addEventListener('click', function () { clickMeButton.style.backgroundColor = "green" });
clickMeButton.addEventListener('click', (event) => { event.stopPropagation() });

clickMeButton.addEventListener('mouseenter', function () {
    clickMeButton.style.backgroundColor = 'grey';
    clickMeButton.style.border = '1px solid black';
    clickMeButton.style.color = 'white';
});

clickMeButton.addEventListener('mouseleave', function () {
    clickMeButton.style.backgroundColor = 'dodgerblue';
    clickMeButton.style.border = 'none';
});

let container = document.querySelector('.container');
container.addEventListener('click', function () { container.style.backgroundColor = "pink" });

/* Use this sample as a quide */


/* NOTE: DO NOT change any HTML or CSS in this exercise, refer to the HTML for the class names of the elements */

/* Step One: Select the container and button elements */

/* Step Two: Use the method addEventListener on the button element, listening for a 'click' event */

/* Step Three: Using the 'event' object in the callback, Change the background color of the button */



// let regrabClickMeButton = document.querySelector('.container .button');
// regrabClickMeButton.style.backgroundColor = "green";

// });


// clickMeButton.addEventListener('click', (event) => {
//   alert('You Clicked Me!')
// })



/* Step Four: Click on the button, does it work? */

// yes

/* Step Five: Use the method addEventListener on the container element, listening for a 'mouseenter' event */


/* Step Six: Using the 'event' object in the callback, Change the background color and the border color of the container */



/* Step Seven: Reverse the color changes to the container on a 'mouseleave' event */


/* Step Eight: Finish the section in TK on stopPropagation */



/* Step Nine: Create a click event on the container, it can do whatever you want it to, but make it visible */

/* Step Ten: Click the button, notice how the container click event also triggers? */

// yes

/* Step Eleven: Add stopProgatation to the button click handler */

// done


/* Step Twelve: Click the button now, the click should not propagate to the conainer. */
/* All Done! */
