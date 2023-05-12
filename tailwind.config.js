/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto)'],
        'nova-round': ['var(--font-nova-round)'],
        sacramento: ['var(--font-sacramento)'],
        inder: ['var(--font-inder)', 'sans-serif']
      },
      colors: {
        'primary-text-color': '#222',
        'secondary-text-color': '#465b52',
        'primary-nav-color': '#E3E6F3',
        'primary-link-color': '#1a1a1a',
        'primary-accent-color': '#088178',
        'primary-border-color': '#cce7d0',
        'random-fe1-color': '#fddde4',
        'random-fe2-color': '#cdebbc',
        'random-fe3-color': '#d1e8f2',
        'random-fe4-color': '#cdd4f8',
        'random-fe5-color': '#f6dbf6',
        'random-fe6-color': '#fff2e5',
        'yellow-star-color': '#ffc107',
        'brand-text-color': '#606063',
        'primary-add-cart-color': '#e8f6ea',
        'signup-bg-color': '#041e42',
        'other-text-color': '#818ea0',
        'other-highlight-text-color': '#ffbd27'
      },
      boxShadow: {
        nav: '0 5px 15px rgba(0,0,0,0.06)',
        'fe-box': '20px 20px 34px rgba(0,0,0,0.03)',
        'fe-box-hover': '10px 10px 54px rgba(70,62,221,0.1)',
        'product-card': '20px 20px 30px rgba(0,0,0,0.02)',
        'product-card-hover': '20px 20px 30px rgba(0,0,0,0.06)'
      },
      height: {
        '90vh': '90vh'
      },
      width: {
        45: '180px',
        'product-card': '23%'
      },
      minWidth: {
        250: '250px'
      }
    }
  },
  plugins: []
}
