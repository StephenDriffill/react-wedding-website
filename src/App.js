import React from "react"
import "./App.css"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HideAppBar from "./HideAppBar";

function App() {

  const theme = useTheme();
  const smMatches = useMediaQuery(theme.breakpoints.up('sm'));
  const mdMatches = useMediaQuery(theme.breakpoints.up('md'));

  const sizeClassName = mdMatches ? 'md' : smMatches ? 'sm' : 'xs';

  return (
    <div className="App">
      {
        mdMatches 
          ? (
            <div className="smooth">
              <div className="header">
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#itinerary">On the day</a></li>
                  <li><a href="#accommodation">Accommodation</a></li> 
                  <li><a href="#taxis">Taxis</a></li>
                  <li><a href="#rsvp">RSVP</a></li>
                </ul>
              </div>
            </div>
          ) 
          : (
            <HideAppBar/>
          )
        }

      <section id="home" className={sizeClassName}>
        <div className="section-content App__headline">
          <span className="App__headlineName">Amelia & Steve</span>
          <span className="App__headlineDate">{`24${'\u00B7'}06${'\u00B7'}23`}</span>
          <span className="App__headlineLocation">Frome, Somerset</span>
        </div>
      </section>

      <section id="itinerary">
        <div className="section-content App__itinerary">
          <span>On the day...</span>

          <span className="App__itineraryLocation">
            <a href="https://goo.gl/maps/VjexHNM4AVH4DFN59" target="_blank" rel="noopener noreferrer">Frome Town Hall</a>
          </span>
          <div className="App__itineraryContent">
            <span>14:00 - 14:15</span><span>Guests arrive</span>
            <span>14:30</span><span>Ceremony</span>
          </div>

          <span className="App__itineraryLocation">
            <a href="https://goo.gl/maps/tRoZHUijFRv9bbd88" target="_blank" rel="noopener noreferrer">4 Weston Walk</a>
          </span>
          <div className="App__itineraryContent">
            <span>15:30</span><span>Refreshments</span>
          </div>
            
          <span className="App__itineraryLocation">
            <a href="https://goo.gl/maps/QyfShK7KULminBn87" target="_blank" rel="noopener noreferrer">Eight Stony Street</a>
          </span>
          <div className="App__itineraryContent">
            <span>19:00</span><span>Dinner</span>
          </div>
        </div>
      </section>

      <section id="accommodation" className={sizeClassName}>
        <div className="section-content App__accommodation">
          <span>Accommodation</span>
            <ul>
              <li>
                <div>
                  <a href="https://goo.gl/maps/4qZzqYgQm8prGkXN7" target="_blank" rel="noopener noreferrer">The Cornerhouse</a>
                  <a href="tel:+441373472042">01373 472042</a>
                </div>
              </li>
              <li>
                <div>
                  <a href="https://goo.gl/maps/tf8aXTMKmuBX8DMT6" target="_blank" rel="noopener noreferrer">Bistro Lotte</a>
                  <a href="tel:+441373300646">01373 300646</a>
                </div>
              </li>
              <li>
                <div>
                  <a href="https://goo.gl/maps/VmYJyfcV7V9MS16i9" target="_blank" rel="noopener noreferrer">The George Hotel & Granary</a>
                  <a href="tel:+441373462584">01373 462584</a>
                </div>
              </li>
              <li>
                <div>
                  <a href="https://goo.gl/maps/xw81VNDz4LdK8i4t9" target="_blank" rel="noopener noreferrer">Premier Inn Frome</a>
                  <a href="tel:+443337777269">0333 777 7269</a>
                </div>
              </li>
              
              <li>
                <div>
                  <a href="https://www.airbnb.co.uk/s/Frome--England--United-Kingdom/homes?adults=2&checkin=2023-06-24&checkout=2023-06-25" target="_blank" rel="noopener noreferrer">Airbnb</a>
                </div>
              </li>
              <li>
                <div>
                  <a href="https://goo.gl/maps/hDgUqTwqewbc3WYQ9" target="_blank" rel="noopener noreferrer">Other</a>
                </div>
              </li>
            </ul>
        </div>
      </section>

      <section id="taxis" className={sizeClassName}>
        <div className="section-content App__taxis">
          <span>Taxis</span>
            <ul>
              <li>
                <div>
                  <a href="https://goo.gl/maps/WuyPoKYiQKodFsxD9" target="_blank" rel="noopener noreferrer">Mike Taxis</a>
                  <a href="tel:+447773900274">07773 900274</a>
                </div>
              </li>
              <li>
                <div>
                  <a href="https://goo.gl/maps/LcdafUUdQ5tVqWWt8" target="_blank" rel="noopener noreferrer">Tony’s Cabs Ltd</a>
                  <a href="tel:+441373469898">01373 469898</a>
                </div>
              </li>
              <li>
                <div>
                  <a href="https://goo.gl/maps/6VRWp5mLxqXUHrUs5" target="_blank" rel="noopener noreferrer">M and H Taxis</a>
                  <a href="tel:+447768856327">07768 856327</a>
                </div>
              </li>
              <li>
                <div>
                  <a href="https://goo.gl/maps/Yj4MFjb5DnxYkJLT7" target="_blank" rel="noopener noreferrer">Smile Taxis</a>
                  <a href="tel:+447931893636">07931 893636</a>
                </div>
              </li>
              <li>
                <div>
                  <a href="https://goo.gl/maps/Yj4MFjb5DnxYkJLT7" target="_blank" rel="noopener noreferrer">Crazy Cabs Taxi</a>
                  <a href="tel:+441373466000">01373 466000</a>
                </div>
              </li>
              <li>
                <div>
                  <a href="https://goo.gl/maps/DLh3HtyBSfuTqaJa9" target="_blank" rel="noopener noreferrer">Other</a>
                </div>
              </li>
            </ul>
        </div>
      </section>

      <section id="rsvp">
        <div className="section-content App__rsvp">
          <span>Please RSVP to</span>
          <span className={`App__rsvpEmail ${sizeClassName}`}><a href="mailto:ameliaandstevegettingmarried@gmail.com">ameliaandstevegettingmarried@gmail.com</a></span>
          <span>by 31st March 2023.</span>
        </div>
      </section>

    </div>
  )
}

export default App
