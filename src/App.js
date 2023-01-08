import React from "react"
import "./App.css"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div className="App">

      {matches ? (<div className="smooth">
        <div className="header">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#itinerary">On the day</a></li>
            <li><a href="#accomodation">Accomodation</a></li> 
            <li><a href="#taxi">Taxis</a></li>
            <li><a href="#rsvp">RSVP</a></li>
          </ul>
        </div>
      </div>) : null}

      <section id="home">
        <div className="section-content App__headline">
          <span className="App__headlineName">Amelia & Steve</span>
          <span className="App__headlineDate">{`24${'\u00B7'}06${'\u00B7'}23`}</span>
          <span className="App__headlineLocation">Frome, Somerset</span>
        </div>
      </section>

      <section id="itinerary">
        <div className="section-content App__itinerary">
          <span>On the day...</span>
          <div className="App__itineraryContent">
            <span>14:15</span><span>Arrive at town hall</span>
            <span>14:30</span><span>Service</span>
            <span>15:00</span><span>Tea and cake</span>
            <span>19:00</span><span>Dinner</span>
          </div>
        </div>
      </section>

      <section id="rsvp">
        <div className="section-content App__rsvp">
          <span>Please RSVP to</span>
          <span className="App__rsvpEmail"><a href="mailto:ameliaandstevegettingmarried@gmail.com">ameliaandstevegettingmarried@gmail.com</a></span>
          <span>by 31st March.</span>
        </div>
      </section>

    </div>
  )
}

export default App
