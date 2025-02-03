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
				'slate-900': '#133041',
				'slate-700': '#4E6E7E',
				'slate-500': '#6B94A8',
				'slate-300': '#9ABED5',
				'slate-100': '#E4F4FD',
			},
		},
	},
	plugins: [],
}
