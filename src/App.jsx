// import { useState } from 'react'
import './App.css'
import  Navbar from '../src/components/Navbar';
import  Searchbar from '../src/components/Searchbar';
import  WeatherStates from '../src/components/WeatherStates';
import  WeatherCard from '../src/components/WeatherCard';
import  Dailyforcast from '../src/components/Dailyforcast';
import  Hourlyforcast from '../src/components/Hourlyforcast';
function App() {
 

  return (
    <>
    <Navbar/>
    <Searchbar />
    <WeatherCard/>
    <WeatherStates/>
    <Dailyforcast/>
    <Hourlyforcast/>

      
    </>
  )
}

export default App
