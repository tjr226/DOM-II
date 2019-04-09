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

// another 'click' event to test propagation

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

// unique selector 5/10, auxclick
// adds red border to an img

let mapPicture = document.querySelector('.container .content-section .img-content img');
mapPicture.addEventListener('auxclick', function() {
    mapPicture.style.borderColor = "red";
    mapPicture.style.borderWidth = "1px";
    mapPicture.style.borderStyle = "solid";
});

// unique selector 6/10, mousemove

let mapH1 = document.querySelector(' .content-section .text-content h2');
mapH1.addEventListener('mousemove', function() {
    mapH1.style.color = "red";
});

// unique selector 7/10, wheel

let footerElement = document.querySelector('.footer');
footerElement.addEventListener('wheel', function() {
    footerElement.style.backgroundColor = "pink";
});

// unique selector 8/10, dragend
// apply to tinyBusPic

tinyBusPic.addEventListener('dragend', function () {
    tinyBusPic.style.borderColor = "red";
    tinyBusPic.style.borderStyle = "solid";
    tinyBusPic.style.borderWidth = "1px";
});

// unique selector 9/10, dragstart

let venicePicture = document.querySelector('.container .inverse-content:nth-child(3) .img-content img');
venicePicture.addEventListener('dragstart', function() {
    venicePicture.style.display = "None";
});

// unique selector 10/10, contextmenu

let mountainExcursionDiv = document.querySelector('.content-pick .destination:nth-child(2)');

mountainExcursionDiv.addEventListener('contextmenu', function() {
    mountainExcursionDiv.style.backgroundColor="gray";
});

