# Frontend Mentor - Social proof section solution

This is a solution to the [Social proof section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-proof-section-6e0qTv_bA). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

The challenge was to build out this social proof section and get it looking as close to the design as possible.

The users should be able to:

- View the optimal layout for the section depending on their device's screen size

### Links

- Solution URL: [Github repo]()
- Live Site URL: [Deployed site]()

## My process

### Built with

- Semantic HTML5 markup
- Tailwindcss framework
- Flexbox
- CSS positioning properties
- Mobile-first workflow

### What I learned

I've dwelled deeper on Tailwindcss framework to get used to the workflow and get to know a wide range of utility classes and their uses. I learned how to set up custom background images to be used in the code as part of the classes of Tailwindcss. This is getting done in the configuration object inside the **_tailwind.config.js_** file.

```js
backgroundImage: {
  "pattern-bottom-dektop":
    "url('/assets/images/bg-pattern-bottom-desktop.svg')",
      ...
      // Some other custom background images are configure in here
      ...
}
```

Also I got a grasp of CSS positioning techniques, using them to get the layout of the ratings section as it was intended.

```html
<div
	class="card-container bg-very-dark-magenta lg:relative lg:top-4 p-8 rounded-lg">
	<div class="flex items-center gap-6">
		<img />
		.....
	</div>
</div>
```

In the previous code the **card-container** div tag is been positioned relative to its parent when the width of the screen is larger than 1024px (a CSS media query) with the utility class **lg:relative**.

## Author

- Frontend Mentor - [@hagesake](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@hage_sake](https://www.twitter.com/yourusername)
