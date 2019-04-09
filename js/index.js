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

// unique selector 2/10, mouseover
// change background of island getaway to light green for jungle

let islandGetawayDiv = document.querySelector('.content-pick .destination:nth-child(3)');

islandGetawayDiv.addEventListener('mouseover', function() {
    islandGetawayDiv.style.backgroundColor="lightgreen";
});

// unique selector 3/10, mouseleave
// reverts background of island getaway

islandGetawayDiv.addEventListener('mouseleave', function () {
    islandGetawayDiv.style.backgroundColor="white";
});

// unique selector 4/10, dblclick
// deletes picture of bus

let tinyBusPic = document.querySelector('.container .intro img');
tinyBusPic.addEventListener('dblclick', function () {
    tinyBusPic.style.display = "None";
});

// unique selector 5/10, scroll
// adds red border to an img

let mapPicture = document.querySelector('.container .content-section .text-content img');
mapPicture.addEventListener('click', function() {
    mapPicture.style.bordercolor = "red";
    mapPicture.style.borderwidth = "1px";
    mapPicture.style.borderstyle = "solid";
});

// unique selector 6/10, load
// changes text color when the object loads

let mapH1 = document.querySelector(' .content-section .text-content:nth-child(1) h1');
mapH1.addEventListener('click', function() {
    mapH1.style.color = "red";
});

// unique selector 7/10, focus

let container = document.querySelector('.container');
container.addEventListener('click', function() {
    container.style.backgroundColor = "pink";
});

// unique selector 8/10, drag
// apply to tinyBusPic

tinyBusPic.addEventListener('click', function () {
    // tinyBusPic.style.bordercolor = "red";
    tinyBusPic.style.display = "None";
});

// unique selector 9/10
// attempting resize

let wholeThing = document.querySelector('.container');
wholeThing.addEventListener('resize', function() {
    wholeThing.backgroundColor = "gray";    
});

// unique selector 10/10
// attempting contextmenu

let mountainExcursionDiv = document.querySelector('.content-pick .destination:nth-child(2)');

mountainExcursionDiv.addEventListener('click', function() {
    mountainExcursionDiv.style.backgroundColor="gray";
});

