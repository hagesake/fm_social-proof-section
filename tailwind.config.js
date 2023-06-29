/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html, js}"],
	theme: {
		extend: {
			colors: {
				"very-dark-magenta": "hsl(300, 43%, 22%)",
				"soft-pink": "hsl(333, 80%, 67%)",
				"dark-grayish-magenta": "hsl(303, 10%, 53%)",
				"light-grayish-magenta": "hsl(300, 24%, 96%)",
			},
			backgroundImage: {
				"pattern-bottom-dektop":
					"url('/assets/images/bg-pattern-bottom-desktop.svg')",

				"pattern-bottom-mobile":
					"url('/assets/images/bg-pattern-bottom-mobile.svg')",

				"pattern-top-dektop":
					"url('/assets/images/bg-pattern-top-desktop.svg')",

				"pattern-top-mobile": "url('/assets/images/bg-pattern-top-mobile.svg')",
			},
		},
	},
	plugins: [],
};
