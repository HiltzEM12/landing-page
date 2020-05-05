/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Eric Hiltz 5/5/2020
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

// Then nav bar element
const navBar = document.querySelector('.navbar__menu');

// The navigation bar list
const navBarList = navBar.querySelector('#navbar__list');

//  All sections held in a node list
const sections = document.querySelectorAll('section');

// Check if an element is in the viewport
// Only checks vertical position since there's no horizontal scrolling
function inViewport(elem) {
    const pos = elem.getBoundingClientRect();
    // Return boolean of if the element is within the vieport bounds
    return (pos.top >= 0 &&
        pos.left >= 0 &&
        pos.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        pos.bottom <= (window.innerHeight || document.documentElement.clientHeight));
}

// Translates the data attribute to it's ID
function dataToID(txt) {
    return txt.split(' ').join('').toLowerCase();
}

// build the nav
// Function to get the navigation list elements
function addNavs() {

    const docFrag = document.createDocumentFragment(); // Document frag to add to

    for (let i = 0; i < sections.length; i++) {
        const listItem = document.createElement('li'); // Create the new item
        listItem.textContent = sections[i].dataset.nav; // Add the name of each section
        docFrag.appendChild(listItem); // Add the item to the doc frag
    }

    navBarList.appendChild(docFrag); // Add the nav buttons to the document
    addNavListeners(); //Add event listeners
}

// Wrapper for adding the nav click listeners
function addNavListeners() {
    const li = navBarList.querySelectorAll('li') // Linst nodes in the ul
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('click', navClick); //Add the event listener to the nav bar options
    }
}

// Function for navigation click listener
function navClick(event) {
    // Get element of what to go to.  Id is determined by the list name
    const idName = dataToID(event.target.textContent);
    const elem = document.querySelector('#' + idName);

    // Scroll to the selected element
    // Scrolling will handle the active
    elem.scrollIntoView({
        behavior: 'smooth'
    });
}

// Function to use in the scrolling event
// Goes through each section and checks if its in the viewport
function scrollListener(event) {
    console.log('scroll start');
    for (let i = 0; i < sections.length; i++) {
        const elem = sections[i];
        const inView = inViewport(elem.querySelector('h2')); // Done here instead of multple times
        const aClass = elem.classList.contains('your-active-class');
        if (inView && !aClass) { // In viewport and not already active
            elem.classList.add('your-active-class');
        } else if (!inView) { //Not in viewport
            elem.classList.remove('your-active-class');
        }
    }
    console.log('scroll end');
}


// Opening function that runs on the onLoad event
function openingFunc() {
    //Add the navigation fields
    addNavs();
    //Add a scroll listener to the window
    window.addEventListener('scroll', function () {
        setTimeout(scrollListener, 0) // Add to the event loop
    });
}