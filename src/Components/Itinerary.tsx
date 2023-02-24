import * as React from 'react';
import { Section } from "./Section";
import "./Itinerary.css"

const locations = [
  { 
    href: "https://goo.gl/maps/VjexHNM4AVH4DFN59",
    items: [
      { time: "14:00 - 14:15", description: "Guests arrive" },
      { time: "14:30", description: "Ceremony" }
    ],
    name: "Frome Town Hall",
  },
  { 
    href: "https://goo.gl/maps/tRoZHUijFRv9bbd88",
    items: [{ time: "15:30", description: "Refreshments" }],
    name: "4 Weston Walk",
  },
  { 
    href: "https://goo.gl/maps/QyfShK7KULminBn87",
    items: [{ time: "19:00", description: "Dinner" }],
    name: "Eight Stony Street",
  },
]

export function Itinerary() {
  return (
    <Section id="itinerary" className='Itinerary'>
      <span>On the day...</span>
      {
        locations.map(({ href, items, name }) => (
          <React.Fragment key={name}>
            <span className="Itinerary__location">
              <a href={href} target="_blank" rel="noopener noreferrer">{name}</a>
            </span>
            <div className="Itinerary__content">
              {
                items.map(({ time, description }) => (
                  <React.Fragment key={description}>
                    <span>{time}</span>
                    <span>{description}</span>
                  </React.Fragment>
                ))
              }
            </div>
          </React.Fragment>
        ))
      }
    </Section>
  )
}