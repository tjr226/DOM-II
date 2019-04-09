// Your code goes here

// unique selector 1/10
// nesting and propagation prevention
// will implement on "Fun in the Sun" button and then in that specific destinatino div to also knock out the propagation task

let funInTheSunButton = document.querySelector('.content-pick .destination:nth-child(1) .btn');

funInTheSunButton.addEventListener('click', function() {
    funInTheSunButton.style.backgroundColor = "black";
    funInTheSunButton.style.color = "white";
});

funInTheSunButton.addEventListener('click', (event) => { event.stopPropagation() });

let funInTheSunDiv = document.querySelector('.content-pick .destination:nth-child(1)');

funInTheSunDiv.addEventListener('click', function() {
    funInTheSunDiv.style.backgroundColor="gray";
})


// let featuresH4 = document.querySelector('.main-content .top-content:nth-child(1) h4');
// featuresH4.textContent = (siteContent["main-content"]["features-h4"]);


// let clickMeButton = document.querySelector('.container .button');
// clickMeButton.addEventListener('click', function () { clickMeButton.style.backgroundColor = "green" });
// clickMeButton.addEventListener('click', (event) => { event.stopPropagation() });

// clickMeButton.addEventListener('mouseenter', function () {
//     clickMeButton.style.backgroundColor = 'grey';
//     clickMeButton.style.border = '1px solid black';
//     clickMeButton.style.color = 'white';