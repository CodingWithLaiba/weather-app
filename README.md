🌤️ Weather Forecast App










A modern, responsive weather forecasting application built with React.js, Vite, and Tailwind CSS.
It provides real-time weather updates, hourly forecasts, and 7-day forecasts using the Open-Meteo API with a clean glassmorphism UI.

🌐 Live Demo & Repository
🔗 GitHub Repo: Weather App Repository
✨ Features
🔍 Search weather by city name
🌡️ Real-time temperature updates
⏰ Hourly weather forecast
📅 7-day forecast
💨 Wind speed tracking
💧 Humidity details
🌧️ Precipitation data
📱 Fully responsive design
⚡ Fast Vite performance
🎨 Glassmorphism UI design
🌙 Dynamic weather icons
🔄 Loading states
❌ API error handling
🚫 No-result handling
🖼️ Screenshots

Add your project screenshots here (recommended for portfolio impact)

![Home Screen](./screenshots/home.png)
![Search View](./screenshots/search.png)
![Forecast View](./screenshots/forecast.png)
🛠️ Tech Stack
⚛️ React.js
⚡ Vite
🎨 Tailwind CSS
📡 Open-Meteo API
🧠 JavaScript (ES6+)
🌦️ API Integration
📍 Geocoding API

Converts city names into latitude & longitude coordinates.

🌤️ Forecast API

Provides:

Current weather conditions
Hourly forecasts
Daily forecasts
📁 Project Structure
src/
│
├── assets/
│   └── images/
│
├── components/
│   ├── Navbar.jsx
│   ├── Searchbar.jsx
│   ├── WeatherCard.jsx
│   ├── WeatherStates.jsx
│   ├── Hourlyforcast.jsx
│   ├── Dailyforcast.jsx
│   ├── LoadingScreen.jsx
│   ├── ApiError.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── main.jsx
└── App.css
🚀 Getting Started
1️⃣ Clone the repository
git clone https://github.com/CodingWithLaiba/weather-app.git
2️⃣ Install dependencies
cd weather-app
npm install
3️⃣ Run development server
npm run dev
📦 Build for Production
npm run build
🌍 Deployment (GitHub Pages)

Install dependency:

npm install gh-pages --save-dev

Add in package.json:

"homepage": "https://codingwithlaiba.github.io/weather-app"

Add scripts:

"predeploy": "npm run build",
"deploy": "gh-pages -d dist"

Deploy:

npm run deploy
📱 Responsive Design

Optimized for:

📱 Mobile
📟 Tablets
💻 Laptops
🖥️ Desktops
🎨 UI/UX Highlights
Glassmorphism design system
Soft gradients & modern spacing
Dynamic weather-based icons
Clean typography hierarchy
Smooth responsive layout transitions
⚠️ Error Handling
Invalid city search handling
API failure fallback UI
Loading state indicators
Empty result management
🔮 Future Improvements
📍 Auto-detect location
🌙 Dark/Light mode toggle
📊 Weather charts
🌦️ Animated backgrounds
❤️ Favorite cities
📌 Recent searches
👩‍💻 Author

Laiba

⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
