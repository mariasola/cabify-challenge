## Cabify Checkout Challenge :shopping:
This is Cabify's Checkout Cart, where you can find three products available with the prices and discounts associated with them.

![Example image](./example.png?raw=true)

:shopping_cart: Shopping cart **logic**:<br>
    - Add/Remove product card items using the +/- buttons.<br>
    - Calculate the totals of each product and the summary total accordingly.<br>
    - All totals in order summary should be updated whenever a product is added or removed.<br>

:rocket: **Bonus**   

    1. Product Detail modal

    2. Discounts  
    We would like to add some discounts to our products. Choose one or both and add them in your implementation:
        * 2-for-1 promotions: buy two of the same product, get one free, applied to `MUG` items.
        * bulk discounts: buying 3 or more of `TSHIRT` product, the price of that product is reduced 5%. E.g., if you buy 3 or more `TSHIRT` items, the price per unit should be 19.00€.

## Project structure:

Cabify-shopping-cart-challenge
├── .gitignore
├── package.json
├── README.MD
├── example.png
├── node_modules
│   ├── react
│   └── react-dom
├── public
│   └── index.html
│   └── data.json
│   └── manifest.json
│   └── favicon.ico
└── src
    ├── images
    │   └── background.png
    │   └── cap.png
    │   └── mug.png
    │   └── shirt.png
    ├── stylesheets
    │   ├── index.scss
    │   └── App.scss
    ├── components
    │   └── detail
    │       └── Detail.js
    │   └── products
    │       └── Item.js
    │       └── ProductList.js
    │   └── summary
    │       └── Summary.js
    ├── App.js
    └── index.js


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


