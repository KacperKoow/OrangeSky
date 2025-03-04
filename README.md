# OrangeSky

## Description

OrangeSky is a weather application that allows users to check the current weather of any city. The app fetches weather data from the [OpenWeatherMap API](https://openweathermap.org/) and displays it in a user-friendly interface. Currently, the application shows the current weather, including temperature, humidity, wind speed, and other relevant data.

## Table of contents

- [Installation](#instalation)
- [Technologies](#technologies)
- [How it works](#how-it-works)

## Installation

Go to the [OpenWeatherMap](https://openweathermap.org/).\
Create an account.\
Under your username, you will find the "My API Keys" section. Go to it and then copy the key.\
Create the path `src/environments` and then create the `environment.ts` file inside it.\
In this file, paste the following code and replace 'YOUR_API_KEY_HERE' with your copied API key:

```
export const environment = {
  production: false,
  apiKey: 'YOUR_API_KEY_HERE', // Replace with your actual API key
};
```

Run the following command to install all necessary dependencies:\
`npm install`\
After the installation is complete, start the development server by running:\
`npm start`\

## Technologies

Project is created with:

- Angular version: 18.2.11
- RxJS version: 7.5.0
- TypeScript version: 4.8.4
- Node.js version: 16.9.1
- npm version: 7.24.0

## How it works

-User Input: Enter a city name in the navigation bar.\
-Fetching Data: The app makes a request to the weather API using the provided API key and fetches weather details for the city.\
-Displaying Data: Weather information like temperature, weather description, wind speed, and humidity is displayed in a responsive layout.\
![Alt text](../../UI.png)
-Responsive Design: The layout adapts to screen size, stacking sections on smaller devices.\
