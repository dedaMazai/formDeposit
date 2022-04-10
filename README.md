## Form Deposit

Example of a payment form
The application is written in React + Node (express), implements a simple logic for writing data to a Mysql database, as well as validating card data.
If all the fields of the form are filled in correctly, the payment button is activated, sending a request to the server where re-validation takes place on the server side and data is recorded in the database, after which a response is sent, with the person's id and its amount, if the data is correct.
### The application uses:
* `Express`
* `MUI`
* `Yup`
* `Formik`

## Preview app:
![Illustration for the project](https://github.com/dedaMazai/formDeposit/blob/main/formDeposit.png)

## To start the project
`1` Install the repository.<br />
`2` Write `npm install` for install the npm_modules folder is required to launch the application.<br />
`3` Run the mysql database, create a schema, and enter the data to connect to it in the config file.json corresponding values.<br />
`4` Write `npm run dev`.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



### `npm install`

The command to install the npm_modules folder is required to launch the application.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

