# Gallery of Horns

## **According to the project's Overview,**

> By the end of this module, you will create an application that displays images and information of horned animals. This application will allow you to filter the images by number of horns and chose your favorite image. For this class we will just be focusing on the component structure of the application. You will create a new React application using Vite and fill it with components. Refer to ‘Feature Tasks’ to see exactly which components to build and where to display them.

## Getting Started

### Requirements

For development, you will only need Node.js installed on your environment.
And please use the appropriate [Editorconfig](http://editorconfig.org/) plugin for your Editor (not mandatory).

#### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

### Install

    git clone https://github.com/ORG/PROJECT.git
    cd PROJECT
    npm install

### Configure app

Any environment configuration steps.

### Start & watch

    npm run dev
    npm start

### Simple build for production

    npm run build

## Architecture

### Languages & tools

HTML, CSS, JavaScript, Markdown, React, Vite, Git, GitHub, and VS Code.

## Change Log

### Lab: Class 02

#### Feature #1: Display Images

Why are we implementing this feature?

- As a user, I want to view the images on the page so that I can browse the photo collection.

What are we going to implement?

> Given that a user opens the application in the browser
>
> When the user navigates to the home page
>
> Then the photo gallery should display all of the beasts' images in the gallery.

How are we implementing it?

- The `Gallery` component should pass props for the title, image and description to each `HornedBeast` component. You will find this information in the provided JSON file.

Number and name of feature: Feature #1: Display Images

Estimate of time needed to complete: 1 hour

Start time: 12:00pm EST

Finish time: 12:30pm EST

Actual time needed to complete: 30 minutes

#### Feature #2: Allow Users to Favorite Individual Beasts

Why are we implementing this feature?

- As a user, I want to be able to interact with the site and favorite beasts.

What are we going to implement?

> Given that a user opens the application in the browser
>
> When a user clicks on an image of a beast
>
> Then the number of "Favorites" displayed on that beast will increase by one.

How are we implementing it?

- Create state inside of the `HornedBeast` component that keeps track of the number of times each beast has been favorited.

- Put a heart in each `HornedBeast` component with the number of “Favorites” next to it.

Number and name of feature: Feature #2: Allow Users to Favorite Individual Beasts

Estimate of time needed to complete: 1 hour

Start time: 12:30pm EST

Finish time: 

Actual time needed to complete:

#### Feature 3: Bootstrap

Why are we implementing this feature?

- As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.

What are we going to implement?

> Given that a user opens the application in the browser
>
> When the images are displayed on the screen
>
> Then each image should be rendered in a visually pleasing way: in columns, as screen width allows.

How are we implementing it?

- Bring in the `react-bootstrap` library and use it to style your application making sure that it is responsive.

Number and name of feature: Feature 3: Bootstrap

Estimate of time needed to complete: 1 hour

Start time: 

Finish time: 

Actual time needed to complete:

#### Stretch Goal: Add Interaction

Why are we implementing this feature?

- As a user, I want to be able to interact with each item on the page.

What are we going to implement?

> Given that a user opens the application in the browser
>
> When a user clicks on an item other than the horned beasts, such as the title of the page or the footer,
>
> Then the information and styles should change.

How are we implementing it?

- When the user clicks on elements such as the header, footer or title of page, make something change using state.

- You can update the words, change the styles or add something new. Be creative.

Number and name of feature: Stretch Goal: Add Interaction

Estimate of time needed to complete: 1 hour

Start time: 

Finish time: 

Actual time needed to complete:

## Collaborators

[pgmorales76](https://github.com/pgmorales76)
