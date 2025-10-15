# CSS Organization

##  Structure

```
src/css/
├── main.css              # Main entry point - imports all other CSS files
├── base.css              # Base styles, resets, typography, CSS variables
├── layout.css            # Core site structure and layout
├── utilities.css         # Utility classes (buttons, spacing, text helpers)
├── components/           # Reusable UI components
│   ├── navbar.css       # Header navigation and mobile menu
│   ├── sidebar.css      # Fixed sidebar with social links
│   ├── footer.css       # Site footer
│   └── card.css         # Card components (posts, projects, experience)
└── pages/               # Page-specific styles
    ├── home.css         # Homepage (intro section, featured projects)
    ├── blog.css         # Blog index and individual posts
    ├── portfolio.css    # Portfolio index and project pages
    ├── about.css        # About page and experience section
    └── contact.css      # Contact page and form
```

### 1. **Base Styles** (`base.css`)
- **Purpose**: Foundation layer with global defaults
- **Contains**:
  - CSS Custom Properties (design tokens/variables)
  - Universal resets and box-sizing
  - Typography (heading hierarchy, body text)
  - Default element styles (links, images, code blocks)
- **When to edit**: 
  - Changing color scheme (update CSS variables)
  - Modifying default fonts or sizes
  - Adding new global design tokens

### 2. **Layout** (`layout.css`)
- **Purpose**: Site-wide structural scaffolding
- **Contains**:
  - Site wrapper and flex containers
  - Fixed header positioning
  - Main content area layout
  - General section spacing
  - Core responsive breakpoints
- **When to edit**:
  - Adjusting overall page structure
  - Changing header/sidebar dimensions
  - Modifying responsive layout behavior

### 3. **Components** (`components/`)
Reusable UI elements used across multiple pages.

#### `navbar.css`
- Site brand/logo
- Desktop navigation links
- Hamburger menu (mobile)
- Active/hover states

#### `sidebar.css`
- Fixed sidebar container
- Social media links and icons
- Responsive hiding on mobile

#### `footer.css`
- Footer container and text
- Footer link styles

#### `card.css`
- Blog post preview cards
- Project preview cards
- Experience cards (about page)
- Shared card hover effects

**Adding components**:
1. Create a new file in `src/css/components/`
2. Add descriptive header comment
3. Import it in `main.css` (Components section)

### 4. **Pages** (`pages/`)
Styles specific to individual pages.

| File | Used By | Contains |
|------|---------|----------|
| `home.css` | `index.md` | Intro section, featured projects layout |
| `blog.css` | `blog.md`, `post.njk` | Blog index, post list, single post styles |
| `portfolio.css` | `portfolio.md`, `project.njk` | Project grid, project detail pages |
| `about.css` | `about.md` | About content, experience section |
| `contact.css` | `contact.md` | Contact form, email link styles |

**Adding a new page**:
1. Create a new file in `src/css/pages/` (e.g., `services.css`)
2. Add header comment explaining purpose
3. Import it in `main.css` (Page-Specific Styles section)

### 5. **Utilities** (`utilities.css`)
- **Purpose**: Helper classes for quick styling adjustments
- **Contains**:
  - Buttons (`.cta-button`, `.btn-secondary`)
  - Spacing utilities (`.mt-1`, `.mb-2`, `.pt-3`, etc.)
  - Text utilities (`.text-center`, `.text-muted`, `.font-bold`)
  - Display utilities (`.flex`, `.flex-center`, `.hidden`)
  - Responsive helpers (`.hide-mobile`, `.hide-desktop`)
- **When to use**: Apply directly to HTML elements when needed

## Design Tokens (CSS Variables)

All design tokens are defined in `base.css` under `:root`. Use these variables consistently throughout your CSS.

### Colors
```css
--color-primary: #E53935;        /* Red accent */
--color-primary-dark: #c62828;   /* Darker red for hover */
--color-text: #212121;            /* Main text */
--color-text-muted: #6c757d;      /* Secondary text */
--color-background: #FDFDFD;      /* Page background */
--color-background-alt: #f8f9fa;  /* Alternate background */
--color-border: #EEEEEE;          /* Borders */
--color-white: #fff;              /* Pure white */
```

### Spacing
```css
--spacing-xs: 0.25em;
--spacing-sm: 0.5em;
--spacing-md: 1em;
--spacing-lg: 1.5em;
--spacing-xl: 2em;
--spacing-2xl: 3em;
--spacing-3xl: 4em;
```

### Layout
```css
--max-content-width: 800px;
--max-header-width: 1100px;
--sidebar-width: 80px;
--header-height: 60px;
```

### Other
- `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl` (border radius)
- `--transition-fast`, `--transition-normal` (animations)
- `--font-primary`, `--font-mono` (typography)

## 🛠 Maintenance Guidel

### Adding More Styles

1. **For existing pages/components**: Edit the appropriate file
2. **For new components**: Create `components/component-name.css`
3. **For new pages**: Create `pages/page-name.css`
4. **Always use CSS variables** from `base.css` instead of hardcoded values

### File Headers
Every CSS file should start with a descriptive header:

```css
/* ==========================================================================
   FILE NAME
   Description: Brief explanation of what this file contains
   Used by: List the pages/templates that use these styles
   ========================================================================== */
```

### Naming Conventions

- **Components**: Use semantic class names (`.navbar`, `.footer`, `.card`)
- **Page sections**: Use descriptive names (`.intro-section`, `.featured-projects`)
- **State classes**: Use modifiers (`.is-open`, `.active`)
- **Utilities**: Use abbreviated names (`.mt-2`, `.text-center`)

### Responsive Design

- **Mobile-first**: Base styles work on mobile, use `@media (min-width: ...)` for desktop
- **Breakpoint**: 768px (tablet/mobile boundary)
- **Mobile styles**: Place at bottom of relevant file or in dedicated `@media` block
- **Test both views**: Always verify responsive behavior

### Import Order (in `main.css`)

**Critical**: Maintain this order to prevent specificity issues:
1. Base (variables, resets)
2. Layout (structure)
3. Components (reusable elements)
4. Pages (specific sections)
5. Utilities (overrides)

## Common Tasks

### Changing the Color Scheme
1. Edit CSS variables in `base.css` (`:root` section)
2. No need to change individual files

### Adding a New Button Style
1. Add new class to `utilities.css` (Buttons section)
2. Follow existing `.cta-button` pattern

### Creating a New Page
1. Create `pages/new-page-name.css`
2. Add header comment
3. Import in `main.css` (Page-Specific Styles)

### Modifying Card Styles
1. Edit `components/card.css`
2. Changes apply to all cards (blog, portfolio, etc.)

### Adjusting Spacing
1. Use existing utility classes (`.mt-2`, `.mb-3`)
2. If adding global spacing, update variables in `base.css`

**Note**: The `.eleventy.cjs` configuration handles CSS passthrough copying:
```javascript
eleventyConfig.addPassthroughCopy("src/css");
```

---

**Last Updated**: October 16, 2025  
**Maintained by**: seeudev  
**Questions?** Open an issue or contact via the website's contact page.
