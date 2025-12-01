/*
 ____    ___                                ____                  ___         __     
/\  _`\ /\_ \                            __/\  _`\              /'___`\     /'__`\   
\ \ \L\_\//\ \      __      ____    ____/\_\ \ \L\_\__  __     /\_\ /\ \   /\ \/\ \  
 \ \ \L_L \ \ \   /'__`\   /',__\  /',__\/\ \ \  _\/\ \/\ \    \/_/// /__  \ \ \ \ \ 
  \ \ \/, \\_\ \_/\ \L\.\_/\__, `\/\__, `\ \ \ \ \/\ \ \_\ \      // /_\ \__\ \ \_\ \
   \ \____//\____\ \__/.\_\/\____/\/\____/\ \_\ \_\ \/`____ \    /\______/\_\\ \____/
    \/___/ \/____/\/__/\/_/\/___/  \/___/  \/_/\/_/  `/___/> \   \/_____/\/_/ \/___/ 
                                                        /\___/                       
                                                        \/__/                     


GlassiFy 2.0.2511 - https://glassify.saviru.me
===========================================================
An open-source and a lightweight Web Component for creating glassmorphism effects with dynamic displacement.
================================================
*/


// © 2025 Saviru Kashmira Atapattu. MIT License.
// Website: https://saviru.me
// GitHub: https://github.com/saviru


/* ==========================================================================
   GlassiFy - Demo JavaScript
   Main functionality for the demo website
   ========================================================================== */



console.log("GlassiFy - Liquid Glass Effects Library");
// Tab Navigation

/**
 * Switch between page sections (Home, Demo, Docs)
 * @param {string} tabName - The name of the tab to switch to
 */
function switchTab(tabName) {
    // Remove active state from all sections and buttons
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active-page'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    // Activate the selected section and button
    document.getElementById(`page-${tabName}`).classList.add('active-page');
    document.getElementById(`btn-${tabName}`).classList.add('active');
}

// Background Switcher (Demo Page)
 

// Available background images for the playground
const backgrounds = {
    city: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop',
    nature: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=2071&auto=format&fit=crop',
    neon: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop'
};

/**
 * Change the playground background image
 * @param {string} type - The type of background (city, nature, neon)
 */
function changeBg(type) {
    const playground = document.getElementById('playground');
    playground.style.backgroundImage = `url('${backgrounds[type]}')`;

    // Update active state on control buttons
    document.querySelectorAll('.control-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

// Drag and Drop Functionality (Demo Page)

// Get all draggable elements
const draggables = document.querySelectorAll('.draggable');

// Drag state variables
let activeItem = null;
let initialX, initialY, currentX, currentY;
let xOffset = 0, yOffset = 0;

// Initialize draggable elements with offset tracking
draggables.forEach(item => {
    item.xOffset = 0;
    item.yOffset = 0;

    // Add event listeners for mouse and touch
    item.addEventListener('mousedown', dragStart);
    item.addEventListener('touchstart', dragStart, { passive: false });
});

// Set up playground container event listeners
const container = document.getElementById('playground');
container.addEventListener('mousemove', drag);
container.addEventListener('touchmove', drag, { passive: false });
container.addEventListener('mouseup', dragEnd);
container.addEventListener('touchend', dragEnd);
container.addEventListener('mouseleave', dragEnd);

/**
 * Start dragging an element
 * @param {Event} e - The mouse or touch event
 */
function dragStart(e) {
    activeItem = e.currentTarget;

    // Get initial position based on event type
    if (e.type === "touchstart") {
        initialX = e.touches[0].clientX - activeItem.xOffset;
        initialY = e.touches[0].clientY - activeItem.yOffset;
    } else {
        initialX = e.clientX - activeItem.xOffset;
        initialY = e.clientY - activeItem.yOffset;
    }
}

/**
 * Handle drag movement
 * @param {Event} e - The mouse or touch event
 */
function drag(e) {
    if (activeItem) {
        e.preventDefault();

        // Calculate new position based on event type
        if (e.type === "touchmove") {
            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;
        } else {
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
        }

        // Update offset and apply transform
        activeItem.xOffset = currentX;
        activeItem.yOffset = currentY;
        setTranslate(currentX, currentY, activeItem);
    }
}

/**
 * End drag operation
 * @param {Event} e - The mouse or touch event
 */
function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
    activeItem = null;
}

/**
 * Apply CSS transform to move an element
 * @param {number} xPos - X position in pixels
 * @param {number} yPos - Y position in pixels
 * @param {HTMLElement} el - The element to transform
 */
function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}


// Reset all draggable elements to their original positions

function resetPositions() {
    draggables.forEach(item => {
        item.style.transform = "translate3d(0, 0, 0)";
        item.xOffset = 0;
        item.yOffset = 0;
    });
}

// Theme Toggle (Light/Dark Mode)

// Toggle between light and dark mode
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');

    // Update the theme toggle icon
    const icon = document.querySelector('#theme-toggle i');

    if (body.classList.contains('light-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}


//   Mobile Navigation Menu

// Toggle the mobile navigation menu open/closed
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.getElementById('menuToggle');
    const icon = menuToggle.querySelector('i');

    // Toggle active state
    navLinks.classList.toggle('active');

    // Update hamburger icon to X or back to hamburger
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
}

/**
 * Close the mobile navigation menu
 */
function closeMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.getElementById('menuToggle');
    const icon = menuToggle.querySelector('i');

    // Remove active state and reset icon
    navLinks.classList.remove('active');
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
}

