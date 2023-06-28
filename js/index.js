// Must match styles.scss
const tablet_bp_media_query = window.matchMedia("(min-width: 768px)");

let checkbox;
let navbar;

function onLoad() {
    checkbox = document.getElementById("nav-button-input");
    navbar = document.getElementById("nav");
}

// Can't be done in CSS as the nav element isn't a sibling of the checkbox; this is so we can display it properly
// on tablet and desktop devices
function toggleNavbarVisibility() {
    navbar.style.visibility = checkbox.checked ? "visible" : "hidden";
}

function onLinkClick() {
    if (!tablet_bp_media_query.matches) {
        navbar.style.visibility = "hidden";
        checkbox.checked = false;
    }
}

function onResize() {
    if (tablet_bp_media_query.matches) {
        navbar.style.visibility = "visible";
    } else {
        navbar.style.visibility = "hidden";
    }
    checkbox.checked = false;
}