# EcommerceStore

This project is an ecommerce store frontend generated using Angular CLI 13.0.4 built as a Capstone project for Udacity's Full Stack JavaScript Developer Nanodegree Program. Uses tailwindcss for all styling.

## Setup

1. `git clone` the project
2. `cd` into the project dir
3. Run `npm install` in the project dir
4. Run `ng build` to run

## Features

### Page Components

1. `home` - home page embeds `item-list` to show all the products
2. `cart` - shows all the products that the user has added into their shopping cart, embeds `item` to show each product
3. item-detail - shows the details of the product that the user clicks on the homepage, embeds `item` to show the product
4. order-complete - success page when the user completes their order

### Components embedded into pages

1. item-list
2. item

### Models

1. Product
2. Order
3. OrderItem

### Services

All data is shared throughout the application using the `item` and `cart` services.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
