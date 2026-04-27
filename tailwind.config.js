/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0f',
        'ink-soft': '#13131a',
        surface: '#1a1a24',
        accent: '#00e5a0',
        gold: '#f5c542',
        muted: '#888899',
        border: 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 10px 30px rgba(0,229,160,0.18)',
        card: '0 20px 45px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        'accent-radial': 'radial-gradient(circle at top right, rgba(0,229,160,0.18), transparent 32%)',
      },
    },
  },
  plugins: [],
}
