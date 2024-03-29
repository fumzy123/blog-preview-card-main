# Frontend Mentor - Blog preview card solution (Vite + React + CSS Modules)

This is a solution to the [Blog preview card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blog-preview-card-ckPaj01IcS). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The goal](#the-goal)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Problems I encountered](#problems-i-encountered-and-how-i-solved-them)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The Goal

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Live Site on GitHub Pages](https://fumzy123.github.io/blog-preview-card-main/)

## My process

### Built with

- [Vite](https://vitejs.dev/) - Build Tool
- [React](https://reactjs.org/) - JS library
- [CSS Modules](https://github.com/css-modules/css-modules) - For styles
  - Mobile-first workflow
  - CSS Flexbox

## Problems I encountered and How I solved them

1. Making the Image Responsive:

   - Wrapped the Image with a div element
   - Set the Wrapper to fill 100% of its parent
   - Set the Wrapper to have have a min-width of 250px. for mobile view of 320px.
   - Set the Blog Container(white background) to have a max-width of 350px. So the Image-Wrapper does not grow beyond that, and the image does not follow along.

2. Wanted the Blog tag `learning` to look like a button but not have full-width: Used an inline-block for blog tag `learning`. When do I use inline-block.

3. Setting margins and paddings with `em` unit proved useful for when I add media queries for responsiveness. It keeps the spacing consistent no matter the size of the text.

4. Made use of a flexbox to align Author's Image and Name.

5. Adding Responsiveness to the Blog component:

   - Typography: Typography is something that will usually need media queries because you need to adjust the size of the text to be bigger on bigger screens like desktop and tablets and to be smaller for smaller screens like mobile phones.

### What I learned

1. `box-shadow` css property: box-shadow: none|h-offset v-offset blur spread color |inset|initial|inherit; [box-shadow](https://www.w3schools.com/cssref/css3_pr_box-shadow.php)
   - h-offset

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log('🎉');
};
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Fumez](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/fumzy123)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
