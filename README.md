## React store 

[Live version](https://react-store-4cbcb.web.app/)

A MVP for a e-commerce store, implementig the products list, cart and checkout implementing the Paypal and Google Maps API's. Built with React using hooks exclusively and SASS.

## Project Status

This project is currently in development. Users can add products to cart and proced to checkout. Functionality to view product details is in progress.

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Start Server:

`npm run start`  

To Visit App:

`localhost:3000`  

## Reflection

This was a week long project built to showcase my web development skills after getting involved in the React library. Project goals included using technologies learned up until this point and familiarizing myself with documentation for new features.  

Decided to not use the `create-react-app` tool to setup the project and instead implemented all the configurations in the `webpack.config.js` file to fully understand the whole build process.  

One of the main challenges I ran into was the API usage. This lead me to spend time on a research spike into the Paypal and Google cloud API documentation.

At the end of the day, the technologies implemented in this project are React, React-Router, React helmet, JSX, and CSS. The project also depends in the Paypal API, which currently uses the sandbox to simulate the payment process, and the Google Maps API in development mode to show where the physical store is located.