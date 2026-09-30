# Emberly Landing Page

A modern, minimal landing page for the Emberly Roblox executor.

## Project Structure

```
emberly/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── assets/
│   └── logo.png        # Emberly logo (YOU NEED TO ADD THIS)
└── README.md           # This file
```

## Setup Instructions

### 1. Add the Logo

You MUST save the Emberly logo to `assets/logo.png`. The logo was provided in the chat - save it as:

`assets/logo.png`

### 2. Configure Download URL

Open `script.js` and update the DOWNLOAD_URL constant:

```javascript
const DOWNLOAD_URL = "YOUR_DOWNLOAD_URL_HERE";
```

Replace `YOUR_DOWNLOAD_URL_HERE` with your actual download link.

### 3. Customize Legal Text

In `index.html`, you can edit the Terms of Service and Privacy Policy content. Look for the commented sections:

```html
<!-- EDITABLE: Terms of Service content -->
<!-- EDITABLE: Privacy Policy content -->
```

### 4. Customize Colors (Optional)

In `styles.css`, you can adjust the theme colors in the `:root` section:

```css
:root {
    --green-primary: #8FF20D;
    --green-secondary: #92F313;
    /* ... etc */
}
```

## Features

- **Dark, minimal design** with black background
- **Subtle botanical animations** - floating leaves, vines, and soft glows
- **Language selector** - English, Spanish, Portuguese, German, French
- **Responsive design** - Works on desktop, tablet, and mobile
- **Legal modals** - Terms of Service and Privacy Policy
- **Smooth animations** - Page load, hover effects, and transitions
- **Accessibility** - Keyboard navigation, focus states, reduced motion support
- **SEO optimized** - Meta tags and Open Graph metadata

## Language Support

The website supports 5 languages:
- English (default)
- Español
- Português
- Deutsch
- Français

Language preference is saved to localStorage.

## Browser Support

Works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## Performance

The site is lightweight and optimized for performance:
- No heavy frameworks
- CSS-based animations (GPU-accelerated)
- Minimal JavaScript
- No external dependencies (except Google Fonts)

## Accessibility Features

- Semantic HTML
- ARIA labels
- Keyboard navigation
- Focus indicators
- ESC key closes modals
- `prefers-reduced-motion` support
- High contrast text

## Deployment

Simply upload the files to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- Any web server

No build process required.

## Customization

### Change Discord URL

Edit in `script.js`:
```javascript
const DISCORD_URL = "https://discord.gg/Jkj6xTSMRr";
```

### Modify Translations

Edit the `translations` object in `script.js` to add or modify language strings.

### Adjust Animation Speed

Modify transition durations in `styles.css`:
```css
:root {
    --transition-fast: 150ms;
    --transition-normal: 250ms;
    --transition-slow: 400ms;
}
```

## Important Notes

- The logo MUST be saved to `assets/logo.png` for the site to display correctly
- The download button will not work until you configure `DOWNLOAD_URL`
- All animations respect `prefers-reduced-motion` for accessibility
- The background is intentionally mostly black with subtle green accents

## License

This website is part of the Emberly project.
