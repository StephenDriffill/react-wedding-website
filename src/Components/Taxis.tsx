import * as React from 'react';
import { formatTel } from '../utils/tel';
import { Section } from "./Section";
import "./Taxis.css"

const taxis = [
  {
    href: "https://goo.gl/maps/WuyPoKYiQKodFsxD9",
    name: "Mike Taxis",
    tel: "07773 900274",
  },
  {
    href: "https://goo.gl/maps/LcdafUUdQ5tVqWWt8",
    name: "Tony’s Cabs Ltd",
    tel: "01373 469898",
  },
  {
    href: "https://goo.gl/maps/6VRWp5mLxqXUHrUs5",
    name: "M and H Taxis",
    tel: "07768 856327",
  },
  {
    href: "https://goo.gl/maps/Yj4MFjb5DnxYkJLT7",
    name: "Smile Taxis",
    tel: "07931 893636",
  },
  {
    href: "https://goo.gl/maps/Yj4MFjb5DnxYkJLT7",
    name: "Crazy Cabs Taxi",
    tel: "01373 466000",
  },
  {
    href: "https://goo.gl/maps/DLh3HtyBSfuTqaJa9",
    name: "Other",
  },
];

interface TaxisProps {
  sizeClassName: string;
}

export function Taxis({ sizeClassName }: TaxisProps) {
  return (
    <Section id="taxis" className={`Taxis Taxis--${sizeClassName}`}>
      <span>Taxis</span>
      <ul>
      {
        taxis.map(({ name, href, tel }) => (
          <li key={name}>
            <div>
              <a href={href} target="_blank" rel="noopener noreferrer">{name}</a>
              <a href={tel !== undefined ? `tel:${formatTel(tel)}` : undefined}>{tel}</a>
            </div>
          </li>
        ))
      }
      </ul>
    </Section>
  );
}