# Weather Dashboard

A **React.js** application styled with **Tailwind CSS** that displays current weather information and a 3-day forecast based on user input. This application utilizes the OpenWeather API to fetch real-time weather data for cities around the world.

![Weather Dashboard Screenshot](./screenshot.png)

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [API Key Configuration](#api-key-configuration)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Built With](#built-with)
- [Future Improvements](#future-improvements)
- [License](#license)
- [Acknowledgments](#acknowledgments)

---

## Features

- **Current Weather Data**: Displays the current temperature, humidity, and weather conditions of the searched city.
- **3-Day Forecast**: Shows the weather forecast for the next three days at 12:00 PM.
- **Responsive Design**: Optimized for both desktop and mobile devices using Tailwind CSS.
- **Error Handling**: Provides user-friendly error messages for invalid inputs or failed API calls.
- **Data Visualization**: (Optional) Includes a temperature chart using Recharts.
- **Caching**: (Optional) Implements caching to store recent searches and minimize API calls.

---

## Demo

[Click here](#) to view a live demo of the Weather Dashboard.

*Note: Replace the link above with the URL where your app is hosted once deployed.*

---

## Getting Started

### Prerequisites

- **Node.js** (version 14 or higher recommended)
- **npm** (comes with Node.js)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/weather-dashboard.git
Navigate to the Project Directory

bash
Copy code
cd weather-dashboard
Install Dependencies

bash
Copy code
npm install
API Key Configuration
Obtain an API Key

Sign up for a free account at OpenWeather API if you haven't already.
Confirm your email address and obtain your API key from the account dashboard.
Set Up Environment Variables

Create a .env file in the root directory of the project.

bash
Copy code
touch .env
Add your API key to the .env file:

env
Copy code
REACT_APP_WEATHER_API_KEY=your_openweather_api_key_here
Important: Ensure that .env is included in your .gitignore file to prevent exposing your API key.

Running the Application
Start the Development Server

bash
Copy code
npm start
Access the App

Open your web browser and navigate to http://localhost:3000.
Build for Production

To create a production build of the app:

bash
Copy code
npm run build
Project Structure
arduino
Copy code
weather-dashboard/
├── node_modules/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── App.js
│   │   ├── WeatherDisplay.js
│   │   ├── ForecastDisplay.js
│   │   └── WeatherChart.js (optional)
│   ├── index.js
│   ├── index.css
│   └── tailwind.css
├── .env
├── .gitignore
├── package.json
├── tailwind.config.js
└── postcss.config.js
Built With
React.js: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
Axios: Promise-based HTTP client for the browser and Node.js.
OpenWeather API: Provides weather data for any location, including over 200,000 cities.
Recharts: (Optional) A charting library built on React components.
Future Improvements
Unit Conversion: Allow users to toggle between Celsius and Fahrenheit.
Additional Weather Data: Display wind speed, sunrise/sunset times, and UV index.
Search History: Implement a feature to save and display a history of recent searches.
Dark Mode: Add a dark mode toggle for better user experience in low-light environments.
PWA Support: Convert the app into a Progressive Web App for offline access and installation.
Localization: Support multiple languages for international users.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
OpenWeather for providing the weather data API.
Tailwind CSS community for their amazing utility-first CSS framework.
Recharts for the easy-to-use charting components.
Create React App for setting up the development environment.
Feel free to contribute to this project by submitting issues or pull requests. For significant changes, please open an issue first to discuss what you would like to change.

Contact: yourname@example.com

Screenshots
Include screenshots of your application here to showcase its functionality and design.

Notes
Security: Always keep your API keys secure. Do not share them publicly or commit them to version control.
Customization: You can customize the styling and features of this app according to your preferences.
Feedback: Feedback and suggestions are welcome to improve this project.
Changelog
v1.0.0
Initial release with basic weather fetching and display functionality.
Integrated Tailwind CSS for styling.
Implemented 3-day forecast display.
Troubleshooting
API Key Issues: If you encounter issues fetching data, ensure that your API key is correctly set in the .env file and that there are no extra spaces or characters.
CORS Errors: If you face CORS policy errors, consider using a proxy or ensuring that your API requests are correctly formatted.
Build Errors: Delete the node_modules folder and run npm install to reinstall dependencies if you encounter build errors.
How to Contribute
Fork the Repository

Create a Feature Branch

bash
Copy code
git checkout -b feature/YourFeature
Commit Your Changes

bash
Copy code
git commit -m "Add YourFeature"
Push to the Branch

bash
Copy code
git push origin feature/YourFeature
Open a Pull Request

Author
Drashy Sesodia
