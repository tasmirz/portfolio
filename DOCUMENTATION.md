# Portfolio Website Documentation

## Project Overview

This is a personal portfolio website for Tasmir Hossain Zihad, designed to showcase skills, projects, and contact information. The site features a modern, responsive design with interactive elements like a typewriter effect and theme toggle.

## Technology Stack

- **HTML5**: Semantic structure and content
- **CSS3**: Styling with variables, flexbox, and media queries
- **JavaScript**: Interactive elements and animations
- **WebGL**: Custom background effects
- **Material Icons**: Icon system for UI elements

## Features

- **Responsive Design**: Adapts to desktop, tablet, and mobile viewports
- **Dark/Light Theme**: User-togglable theme preference
- **Typewriter Effect**: Dynamic text animation on the homepage
- **WebGL Background**: Interactive custom background
- **Social Media Links**: Integrated social platform buttons
- **Mobile Navigation**: Hamburger menu for smaller screens

## File Structure

```
├── index.html            # Main HTML document
├── README.md             # Project documentation
├── css/                  # CSS files
│   ├── base.css          # Foundation styles and variables
│   ├── colors.css        # Color definitions
│   ├── components.css    # Reusable UI components
│   ├── dark-theme.css    # Dark mode styling
│   ├── layout.css        # Page structure and positioning
│   ├── phone.css         # Mobile styles
│   ├── tablet.css        # Tablet styles
│   └── README.md         # CSS organization documentation
├── js/                   # JavaScript files
│   ├── main.js           # Main application logic
│   ├── scroll-events.js  # Scroll-based interactions
│   ├── ui-events.js      # User interface event handlers
│   ├── webgl-background.js # WebGL background implementation
│   ├── webgl-core.js     # Core WebGL utilities
│   ├── webgl-tile-game.js # WebGL tile game component
│   └── WEBGL-DOCS.md     # WebGL documentation
└── shaders/              # GLSL shader files
    ├── basic.frag        # Basic fragment shader
    ├── basic.vert        # Basic vertex shader
    ├── color.frag        # Color fragment shader
    └── color.vert        # Color vertex shader
```

## Getting Started

1. Clone the repository
2. Open `index.html` in a modern web browser
3. No build step or server is required for basic viewing

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Responsive Breakpoints

- **Desktop**: 769px and above
- **Tablet**: 481px to 768px
- **Mobile**: 480px and below

## JavaScript Components

- **Typewriter Effect**: Animated text display in the welcome section
- **Theme Toggle**: Switches between light and dark themes
- **Mobile Menu**: Hamburger menu for mobile navigation
- **Scroll Events**: Animations and effects triggered by scrolling
- **WebGL Background**: Interactive canvas background

## WebGL Implementation

See `js/WEBGL-DOCS.md` for detailed information on the WebGL background implementation.

## CSS Organization

See `css/README.md` for detailed information on the CSS organization and structure.

## Future Improvements

- Add project filtering functionality
- Implement contact form with validation
- Add page transitions
- Optimize WebGL performance further
- Add localization support
