# Portfolio Website Redesign

A modern portfolio website for Tasmir Hossain Zihad featuring interactive WebGL elements, responsive design, typewriter effect, and theme toggling.

## Live Demo

[View the portfolio](https://zihad.dev) (placeholder URL - update with your actual domain)

![Portfolio Screenshot](https://via.placeholder.com/800x400?text=Portfolio+Screenshot) (placeholder - replace with actual screenshot)

## Project Structure

```
Portfolio/Redesign/
├── css/
│   ├── base.css          # Foundation styles, variables, and resets
│   ├── colors.css        # Color variables and applications
│   ├── components.css    # Reusable UI components
│   ├── dark-theme.css    # Dark theme color overrides
│   ├── layout.css        # Page structure and positioning
│   ├── phone.css         # Mobile-specific styles (≤480px)
│   ├── tablet.css        # Tablet-specific styles (481px-768px)
│   └── README.md         # CSS organization documentation
├── js/
│   ├── main.js           # Entry point for JS initialization
│   ├── ui-events.js      # Theme toggle and mobile menu handlers
│   ├── scroll-events.js  # Scroll-based interactions
│   ├── webgl-background.js # WebGL background implementation
│   ├── webgl-core.js     # WebGL utilities and core classes
│   ├── webgl-tile-game.js # WebGL tile game component
│   └── WEBGL-DOCS.md     # WebGL documentation
├── shaders/
│   ├── basic.vert        # Basic vertex shader with texture support
│   ├── basic.frag        # Basic fragment shader with texture support
│   ├── color.vert        # Color vertex shader
│   └── color.frag        # Color fragment shader
├── DOCUMENTATION.md      # Comprehensive project documentation
└── index.html            # Main HTML structure
```

## Key Features

- **Responsive Design**: Crafted to look great on all devices - desktop, tablet, and mobile
- **Theme Toggle**: Light/dark mode with system preference detection and user preference saving
- **Typewriter Effect**: Dynamic animated text introduction on the homepage
- **WebGL Background**: Custom animated WebGL background with interactive elements
- **Social Media Integration**: Easy access to professional profiles and contact methods
- **Mobile-friendly Navigation**: Collapsible hamburger menu on small screens
- **CSS Architecture**: Well-organized, modular CSS with proper separation of concerns
- **Performance Optimized**: Fast loading with optimized assets and code

## CSS Organization

The CSS has been refactored for better maintainability:

- **Base Layer**: Foundation styles, variables, resets, and utility classes
- **Theming Layer**: Color variables and theme-specific overrides
- **Components Layer**: Reusable UI components and patterns
- **Layout Layer**: Page structure and positioning
- **Responsive Layer**: Device-specific adaptations

See `css/README.md` for detailed documentation on CSS organization.

## JavaScript Architecture

- **Modular Design**: Separate files for different responsibilities
- **Event Handling**: Clean implementation of UI and scroll events
- **WebGL Framework**: Custom WebGL implementation with program and context classes
- **Animation**: Smooth animations and transitions

See `js/WEBGL-DOCS.md` for details on the WebGL implementation.

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser or use a local server

```bash
# Using Python to create a simple HTTP server
python -m http.server 8000
```

3. Open `http://localhost:8000` in your browser

## Development

### Prerequisites

- Modern web browser with WebGL support
- Text editor or IDE (VS Code recommended)
- Basic knowledge of HTML, CSS, and JavaScript

### Making Changes

1. CSS changes should follow the organization structure in `css/README.md`
2. WebGL modifications should reference `js/WEBGL-DOCS.md`
3. Test all changes across multiple devices and browsers

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Future Enhancements

- [ ] Add project filtering and categories
- [ ] Implement contact form with validation
- [ ] Enhance WebGL interactions
- [ ] Improve accessibility features
- [ ] Add page transitions and animations
- [ ] Implement localization support

## Comprehensive Documentation

For more detailed information about the project, see the `DOCUMENTATION.md` file.

## License

AGPLv3