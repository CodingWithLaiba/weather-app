# 🌤️ Weather Forecast App

A modern, responsive weather forecasting application built with **React.js**, **Vite**, and **Tailwind CSS**.  
It provides real-time weather updates, hourly forecasts, and 7-day forecasts using the **Open-Meteo API**, featuring a clean glassmorphism UI

---

## 🌐 Live Demo & Repository

🔗 GitHub Repo: https://github.com/CodingWithLaiba/weather-app

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Real-time temperature updates
- ⏰ Hourly weather forecast
- 📅 7-day forecast
- 💨 Wind speed tracking
- 💧 Humidity details
- 🌧️ Precipitation data
- 📱 Fully responsive design
- ⚡ Fast Vite performance
- 🎨 Glassmorphism UI design
- 🌙 Dynamic weather icons
- 🔄 Loading states
- ❌ API error handling
- 🚫 No-result handling

---

## 🛠️ Tech Stack

- React.js
- Vite
- Tailwind CSS
- Open-Meteo API
- JavaScript (ES6+)

---

## 🌦️ API Integration

Geocoding API

Converts city names into latitude & longitude coordinates.

Forecast API

Provides:

- Current weather
- Hourly forecast
- Daily forecast

---

## 📁 Project Structure

```bash
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
```

### 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/CodingWithLaiba/weather-app.git
```

### Navigate to project folder

```bash
cd weather-app
```

---

### Install dependencies

```bash
npm install
```

## Run development server

```bash
npm run dev
```

📦 Build for Production

```bash
npm run build
```

### 🌍 Deployment (GitHub Pages)

Install dependency

```bash
npm install gh-pages --save-dev
```

## Add to package.json

```bash
"homepage": "https://codingwithlaiba.github.io/weather-app"
```

### Add scripts

```bash
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

### Deploy

```bash
npm run deploy
```

###

- 📱 Responsive Design
- 📱 Mobile
- 📟 Tablets
- 💻 Laptops
- 🖥️ Desktops

### 🎨 UI/UX Highlights

- Glassmorphism design
- Smooth gradients
- Dynamic weather icons
- Clean typography
- Responsive layout

### ⚠️ Error Handling

- Invalid city search handling
- API failure fallback UI
- Loading states
- Empty results handling

### 👩‍💻 Author

Laiba

⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
