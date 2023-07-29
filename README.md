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

Start time: 6:30pm EST

Finish time: 7:00pm EST

Actual time needed to complete: Thirty minutes

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

Start time: 6:00pm EST

Finish time: 6:30pm EST

Actual time needed to complete: Thirty minutes

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

Estimate of time needed to complete:

Start time:

Finish time:

Actual time needed to complete:

### Lab: Class 03

#### Feature #1: Display a Modal

Why are we implementing this feature?

- As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.

What are we going to implement?

> Given that a user wants to view the details of the image
>
> When the user clicks on an individual image
>
> Then the image should render larger on the screen with the description displayed

How are we implementing it?

- Import the `data.json` file into your `App` component and send that data into the `Gallery` component

- Map over the JSON data in your `Gallery` component to render each beast

- Send a function into your `Gallery` component that allows the user to update state in the `App`

- Create a `SelectedBeast` component and include it in your `App`

- Use the state in the `App` to render an individual beast in a Modal in the `SelectedBeast` component using React Bootstrap

Number and name of feature: Feature #1: Display a Modal

Estimate of time needed to complete: Thirty minutes

Start time: 9:30pm EST

Finish time: 11:00pm EST

Actual time needed to complete:

#### Stretch Goal: Fuzzy search

Why are we implementing this feature?

- As a user, I want the ability to search my images so that I can view only the images containing specific titles or keywords.

What are we going to implement?

> Given that a user wants to view specific images
>
> When the user enters a character into the search field
>
> Then only the images matching the current set of characters should be displayed on the screen

How are we implementing it?

- Create an input element to allow users to search for an image. It is up to you to decide if the user should be able to search by title, keyword, or both.

- Write a regular expression pattern to create a fuzzy search so that the results are narrowed down and displayed every time the user enters or removes a character from the input.

Number and name of feature: Stretch Goal: Fuzzy search

Estimate of time needed to complete: Thirty minutes

Start time:

Finish time:

Actual time needed to complete:

### Lab: Class 04

#### Feature #1: Filter by Numbers of Horns

Why are we implementing this feature?

- As a user, I want to be able to view the beasts by the number of horns

What are we going to implement?

> Given that a user is presented with filtering options
>
> When the user clicks on one option
>
> Then the images should be filtered accordingly

How are we implementing it?

- Using the `Form` component of `react-bootstrap`, build a drop down menu so that the user can choose to filter by number of horns.

- When the user chooses one of the options, the correct images should be displayed.

## Collaborator(s)

[pgmorales76](https://github.com/pgmorales76)
