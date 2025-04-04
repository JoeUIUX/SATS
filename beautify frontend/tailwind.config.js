/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable dark mode with the 'class' strategy
  theme: {
    extend: {
      backgroundColor: {
        'primary': 'var(--color-primary)',
        'secondary': 'var(--color-secondary)',
        'background': 'var(--color-background)',
      },
      textColor: {
        'primary': 'var(--color-primary-foreground)',
        'secondary': 'var(--color-secondary-foreground)',
        'foreground': 'var(--color-foreground)',
      },
      borderColor: {
        'default': 'var(--color-border)',
      },
    },
  },
  plugins: [],
}