---
title: 'Importing CSS, Sass, SCSS modules within next.js'
excerpt: 'next.js now allows auto importing of CSS and SCSS out of the box!'
coverImage: '/assets/blog/hello-world/cover.jpg'
date: '2020-06-17'
authorName: Mark Standen
authorImage: '/ms-profile.jpeg'
ogImageURL: '/assets/blog/hello-world/cover.jpg'
---

### next.js now allows auto importing of CSS and SCSS out of the box!

The documentation is actually very good, but i struggled to get this working initially, and got it working by googling and trial and error.

I'm going to refer to css/scss and sass as just 'sass' for the rest of the post, but barring the initial npm package install the only difference i can tell is the extension naming in your imports.

(SASS/SCSS ONLY)
first close your dev server if you are running it, then, at the command prompt, within your project root:

```bash
npm install sass
```

to import css/sass (scss or sass) into next.js project you'll (probably) want a global css file to style all pages. still at the command line, within your project root:

```bash
mkdir styles
touch ./styles/styles.scss
```

create an \_app.js file to import the global styling into:

```bash
touch ./pages/\_app.js
```

open the styles.scss file, and add some test styling:

```css
$main-color: red;
.body {
  color: $main-color;
}
.myclass {
  color: blue;
}
```

open the \_app.js file an add the following (this is straight from the next.js docs and is required)

```jsx
import '../styles/styles.scss'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
```

now in your /pages/index.js file:

```jsx
export default function Home() {
  return (
    <div>
      {' '}
      Red <span className="myclass"> Blue </span>
    </div>
  )
}
```

the text should display as red and blue.

I personally like the idea of keeping the code as modular as possible, so to add scss modules to individual components we can do the following:

create a component within /components/ again from the project root:

```bash
    touch ./components/MyComponent.js
```

edit the file

```jsx
import styles from './MyComponent.module.scss'

export default function MyComponent() {
  return <div className={styles.component}>MyComponent Text</div>
}
```

create the MyComponent.module.scss file, next.js requires it to use the .module.scss convention

```bash
touch ./components/MyComponent.module.scss
```

edit the file, and add the styling:

```css
.component {
  font-size: 2rem;
  color: white;
  background-color: yellow;
}
```

import the component within /pages/index.js and add it to your default function (HomePage etc):

```jsx
import MyComponent from '../components/MyComponent.js'

function HomePage() {
  return <MyComponent />
}
```

now you can start your dev server:

```bash
npm run dev
```

and the component should display as white text on a yellow background.
