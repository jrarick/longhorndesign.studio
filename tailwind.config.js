/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-lora)', 'serif'],
        display: ['birch-std', 'serif'],
      },
      colors: {
        marzipan: {
          '50': '#fff9eb',
          '100': '#ffedc6',
          '150': '#ffeaaf',
          '200': '#ffe09e',
          '300': '#ffbf4a',
          '400': '#ffa620',
          '500': '#f98207',
          '600': '#dd5d02',
          '700': '#b73e06',
          '800': '#942f0c',
          '900': '#7a270d',
          '950': '#461202',
        },
        brandy: {
          '50': '#fbf8f1',
          '100': '#f5eddf',
          '200': '#ead9be',
          '300': '#dfc39e',
          '400': '#cd9d6a',
          '500': '#c2844d',
          '600': '#b57041',
          '700': '#965838',
          '800': '#794833',
          '900': '#623d2c',
          '950': '#351e15',
        },
        'mexican-red': {
          '50': '#fef2f3',
          '100': '#ffe1e3',
          '200': '#ffc9cc',
          '300': '#fea3a8',
          '400': '#fc6d74',
          '500': '#f43f48',
          '600': '#e1212b',
          '700': '#bd1820',
          '800': '#a0181f',
          '900': '#821a1f',
          '950': '#47080b',
        },
        'mine-shaft': {
          '50': '#f7f7f6',
          '100': '#e6e4e1',
          '200': '#cdc8c2',
          '300': '#aca59c',
          '400': '#8a8377',
          '500': '#6f685d',
          '600': '#585349',
          '700': '#48443d',
          '800': '#3c3933',
          '900': '#2f2d29',
          '950': '#1c1b17',
        },
        stone: {
          '750': '#373330',
          '925': '#141110',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
}
