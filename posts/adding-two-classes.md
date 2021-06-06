---
title: 'importing css, sass, scss modules within next.js'
excerpt: 'next.js now allows auto importing of css and scss out of the box, which is lovely.'
coverImage: '/assets/blog/hello-world/cover.jpg'
date: '2020-06-16T05:35:07.322Z'
author:
  name: Mark Standen
  picture: '/assets/blog/authors/tim.jpeg'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

# Adding two css classes to a component in next.js

adding multiple classes to a react component in next.js using scss within a .module.scss file:

within MyComponent.module.scss we have css for both the heading of the component and different font sizes for the title and the subtitle. So I want to be able to add two classes to each element.

```css
.heading {
  color: green;

  text-align: left;

  &**title {
    font-size: 3rem;
  }

  &**subtitle {
    font-size: 1rem;
  }
}
```

The easiest (and simplest IMO) way to do this is using template literals:

open the component.module.js file and import the scss module, and withing the JSX add the classes as follows:

```jsx
import styles from './MyComponent.module.scss'

<h1 className={`${styles.heading} ${styles.heading__title}`}> Title </h1>
<h2 className={`${styles.heading} ${styles.heading__subtitle}`}> Title </h2>
```
