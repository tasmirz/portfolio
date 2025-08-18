# Portfolio CSS Organization

## File Structure

The CSS for this portfolio site is organized using a modular approach for better maintainability:

### Base Layer
- `base.css`: Contains foundational styles, CSS variables, resets, and utility classes

### Theming Layer
- `colors.css`: All color-related variables and basic color applications
- `dark-theme.css`: Dark mode color overrides

### Components Layer
- `components.css`: Reusable UI components like buttons, typography styles, etc.

### Layout Layer
- `layout.css`: Page structure, grid systems, and positioning

### Responsive Layer
- `tablet.css`: Tablet-specific styles (481px to 768px)
- `phone.css`: Mobile-specific styles (up to 480px)

## CSS Variables

The system uses CSS variables for:
- Colors
- Spacing
- Typography
- Transitions
- Border radiuses

## Naming Conventions

- BEM-influenced class naming (Block__Element--Modifier)
- Descriptive variable names (e.g., `--color-primary` rather than `--c1`)
- Section IDs use lowercase names (`#welcome`, `#about`)

## Responsive Design

- Mobile-first approach in some areas
- Device-specific overrides for layout and spacing
- Media queries organized in separate files

## Best Practices Used

- CSS organization by purpose (separation of concerns)
- Proper use of CSS variables
- Eliminated code duplication
- Consistent commenting and sectioning
- Minimal use of !important (restricted to mobile overrides only)
- Single source of truth for component styling
