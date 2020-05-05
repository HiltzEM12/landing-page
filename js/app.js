/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// Then nav bar element
const navBar = document.querySelector('.navbar__menu');

// The navigation bar list
const navBarList = navBar.querySelector('#navbar__list');

//  All sections held in a node list
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Function to get the bottom coordinates of a given element
function getBottom(elem){
    const coordinates = elem.getBoundingClientRect();
    return coordinates.top;
}

// Translates the data attribute to it's ID
function dataToID(txt){
    return txt.split(' ').join('').toLowerCase();
}

// //Function to scroll to the active class
// function scrollToElement(elem){
//     window.scrollToElement(elem);
//     // window.scrollTo({
//     //     top: getBottom(elem) - window.screenY,
//     //     behavior: 'smooth'
//     // });
// }


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// Function to get the navigation list elements
function addNavs(){

    const docFrag = document.createDocumentFragment(); // Document frag to add to

    for(let i = 0; i < sections.length; i++){
        const listItem = document.createElement('li');  // Create the new item
        listItem.textContent = sections[i].dataset.nav; // Add the name of each section
        docFrag.appendChild(listItem); // Add the item to the doc frag
    }

    navBarList.appendChild(docFrag); // Add the nav buttons to the document
    addNavListeners(); //Add event listeners
}

// Wrapper for adding the nav click listeners
function addNavListeners(){
    const li = navBarList.querySelectorAll('li') // Linst nodes in the ul
    for(let i = 0; i < li.length; i++){
        li[i].addEventListener('click', navClick); //Add the event listener to the nav bar options
    }
}

// Function for navigation click listener
function navClick(event){

    // Get element of what to go to.  Id is determined by the list name
    const aClass = document.querySelector('.your-active-class'); // Active class
    const idName = dataToID(event.target.textContent);
    const elem = document.querySelector('#'+ idName);
    
    // Check if the link is to the currently active section
    if (elem !== aClass){
        // If link is to a new section, change the active section
        aClass.classList.toggle('your-active-class');
        elem.classList.toggle('your-active-class');
    }
    elem.scrollIntoView({
        behavior: 'smooth'
    });
    // Scroll to the active section
    // scrollToElement(elem);
}

// Function to use in the scrolling event
function scrollListener(event){
    console.log(event)
}


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

// Opening function that runs on the onLoad event
function openingFunc(){
    //Add the navigation fields
    addNavs();
    //Add a scroll listener to the window
    window.addEventListener('scroll',scrollListener)
}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


