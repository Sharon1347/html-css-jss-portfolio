/* Initial state for menu */
.menu-links {
    opacity: 0;
    max-height: 0;
    overflow: hidden;
    transition: opacity 0.3s ease, max-height 0.3s ease;
}

/* State when the menu is open */
.menu-links.open {
    opacity: 1;
    max-height: 500px; /* Adjust based on your content's height */
}

/* Initial state for icon */
.hamburger-icon {
    transition: transform 0.3s ease;
}

/* State when the icon is open */
.hamburger-icon.open {
    transform: rotate(90deg); /* Example: Rotate icon */
}
