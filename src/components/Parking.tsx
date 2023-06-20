import * as React from 'react';
import { Section } from "./Section";
import "./Parking.css"

const locations = [
  { 
    items: [
      { href: "https://goo.gl/maps/VjexHNM4AVH4DFN59", label: "BA11 1EB", description: "Small carpark behind town hall with 6/7 spaces" },
      { href: "https://goo.gl/maps/7wpwH8tPS7FR2sf89", label: "BA11 1EU", description: "On-street parking on Park Road" },
      { href: "https://goo.gl/maps/K1ok1ycfDvX4mong8", label: "BA11 4LA", description: "Nunny Road car park (short walk)" },
    ],
    name: "Frome Town Hall (ceremony)",
  },
  { 
    items: [
      { href: "https://goo.gl/maps/tRoZHUijFRv9bbd88", label: "BA11 3NB", description: "Free on street parking" },
    ],
    name: "4 Weston Walk (reception)",
  },
  { 
    items: [
      { href: "https://goo.gl/maps/hsVdZWsXptLGD1n99", label: "BA11 1BS", description: "Cork Street car park" },
    ],
    name: "Eight Stony Street (dinner)",
  },
]


interface ParkingProps {
  sizeClassName: string;
}

export function Parking({ sizeClassName }: ParkingProps) {
  return (
    <Section id="parking" className={`Parking Parking--${sizeClassName}`}>
      <span>Parking</span>
      {
        locations.map(({ items, name }) => (
          <React.Fragment key={name}>
            <span className="Parking__location">{name}</span>
            <div className="Parking__content">
              {
                items.map(({ href, label, description }) => (
                  <React.Fragment key={description}>
                    <span>{description}</span>
                  <span>
                    {href !== undefined ? <a href={href} target="_blank" rel="noopener noreferrer">{label}</a>: <span />}
                  </span>
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