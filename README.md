# Website

New website coming soon.

# Run

Run with ```npm install``` then ```npm run dev```.

# Tailwind CSS + React + Vite Setup

This project uses Tailwind CSS with React and Vite.

## Fixing Tailwind CSS Integration

If you encounter the error:
```
It looks like you're trying to use tailwindcss directly as a PostCSS plugin. The PostCSS plugin has moved to a separate package...
```

Follow these steps to fix it:

1. Uninstall the current Tailwind CSS packages:
```bash
npm uninstall tailwindcss postcss autoprefixer
```

2. Install specific versions that work together:
```bash
npm install -D tailwindcss@3.4.17 postcss@8.5.0 autoprefixer@10.4.20
```

3. Use this PostCSS configuration (postcss.config.js):
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

4. Make sure your tailwind.config.js includes:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

5. Include Tailwind directives in your CSS (src/index.css):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

This configuration ensures Tailwind CSS works correctly with Vite and React.
