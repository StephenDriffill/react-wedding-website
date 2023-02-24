import * as React from 'react';
import './index.css';
import "./App.css"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HideAppBar from "./rcomponents/HideAppBar";
import { Section } from './rcomponents/Section';
import { Itinerary } from './rcomponents/Itinerary';
import { Accommodation } from './rcomponents/Accommodation';
import { Taxis } from './rcomponents/Taxis';

const menuItems = [
  { href: "#home", name: "Home" },
  { href: "#itinerary", name: "On the day" },
  { href: "#accommodation", name: "Accommodation" },
  { href: "#taxis", name: "Taxis" },
  { href: "#rsvp", name: "RSVP" },
]

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
                  {
                    menuItems.map(({ href, name }) => (
                      <li key={name}><a href={href}>{name}</a></li>
                    ))
                  }
                </ul>
              </div>
            </div>
          ) 
          : (
            <HideAppBar menuItems={menuItems}/>
          )
      }
      
      <Section id="home" className={`Home Home--${sizeClassName}`}>
        <span className="Home__name">Amelia & Steve</span>
        <span className="Home__date">{`24${'\u00B7'}06${'\u00B7'}23`}</span>
        <span className="Home__location">Frome, Somerset</span>
      </Section>
      
      <Itinerary/>
      <Accommodation sizeClassName={sizeClassName}/>
      <Taxis sizeClassName={sizeClassName}/>

      <Section id="rsvp" className='Rsvp'>
        <span>Please RSVP to</span>
        <span className={`Rsvp__email--${sizeClassName}`}>
          <a href="mailto:ameliaandstevegettingmarried@gmail.com">
            ameliaandstevegettingmarried@gmail.com
          </a>
        </span>
        <span>with any dietary requirements </span>
        <span>by 31st March 2023.</span>
      </Section>
    </div>
  )
}

export default App
