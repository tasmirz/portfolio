# WebGL Background Documentation

## Overview

This portfolio uses WebGL to create an interactive background effect. The implementation is divided into several JavaScript files that work together to create the visual experience.

## Files Structure

- `webgl-core.js`: Core WebGL initialization and utilities
- `webgl-background.js`: Background effect implementation
- `webgl-tile-game.js`: Interactive tile game component (if enabled)

## Shader Files

- `basic.vert`: Basic vertex shader for position and transformation
- `basic.frag`: Basic fragment shader for color output
- `color.vert`: Vertex shader with color attributes
- `color.frag`: Fragment shader with color processing

## How It Works

1. **Initialization**: The WebGL context is initialized in `webgl-core.js`
2. **Shader Loading**: Shaders are loaded from the `shaders/` directory
3. **Rendering**: The main rendering loop is managed in `webgl-background.js`
4. **Interaction**: User interactions (mouse movement, clicks) are captured and used to modify the background

## Integration

The WebGL background is integrated with the page via:
- Event listeners for user interaction
- Responsive canvas sizing based on viewport
- Performance optimizations for mobile devices

## Performance Considerations

- The WebGL effects are automatically scaled down on lower-performance devices
- The animation frame rate is adjusted based on device capabilities
- Mobile devices may receive a simplified version of the effect

## Customization

The WebGL background can be customized by modifying:
- Shader parameters in the fragment and vertex shaders
- Animation speeds and behaviors in `webgl-background.js`
- Color schemes via the CSS variables (which are passed to the WebGL context)
