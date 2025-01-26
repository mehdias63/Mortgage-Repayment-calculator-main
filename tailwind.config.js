/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/**/*.html', './src/**/*.js'],
	theme: {
		fontFamily: {
			red: ['Red Hat Text'],
		},
		extend: {
			colors: {
				lime: '#D8DB2F',
				red: '#D73328',
				'Slate-900': '#133041',
				'Slate-700': '#4E6E7E',
				'Slate-500': '#6B94A8',
				'Slate-300': '#9ABED5',
				'Slate-100': '#E4F4FD',
			},
		},
	},
	plugins: [],
}
