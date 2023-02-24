import * as React from 'react';
import { Section } from "./Section";
import "./Accommodation.css"
import { formatTel } from '../utils/tel';

const locations = [
  {
    href: 'https://goo.gl/maps/4qZzqYgQm8prGkXN7',
    name: 'The Cornerhouse',
    tel: '01373 472042'
  },
  {
    href: "https://goo.gl/maps/tf8aXTMKmuBX8DMT6",
    name: "Bistro Lotte",
    tel: "01373 300646",
  },
  {
    href: "https://goo.gl/maps/VmYJyfcV7V9MS16i9",
    name: "The George Hotel & Granary",
    tel: "01373 462584",
  },
  {
    href: "https://goo.gl/maps/xw81VNDz4LdK8i4t9",
    name: "Premier Inn Frome",
    tel: "0333 777 7269",
  },
  {
    href: "https://www.airbnb.co.uk/s/Frome--England--United-Kingdom/homes?adults=2&checkin=2023-06-24&checkout=2023-06-25",
    name: "Airbnb",
  },
  {
    href: "https://www.booking.com/searchresults.en-gb.html?label=gen173nr-1FCAEoggI46AdIM1gEaFCIAQGYAQm4ARfIAQzYAQHoAQH4ARCIAgGoAgO4Aoa7_J0GwAIB0gIkZDY4YjA1ZTgtMzBkMC00MGI3LTlmZjAtZjk0MmI0ODQyYzk02AIG4AIB&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.en-gb.html%3Flabel%3Dgen173nr-1FCAEoggI46AdIM1gEaFCIAQGYAQm4ARfIAQzYAQHoAQH4ARCIAgGoAgO4Aoa7_J0GwAIB0gIkZDY4YjA1ZTgtMzBkMC00MGI3LTlmZjAtZjk0MmI0ODQyYzk02AIG4AIB%26sb_price_type%3Dtotal%26%26&ss=Frome%2C+Somerset%2C+United+Kingdom&is_ski_area=&checkin_year=2023&checkin_month=6&checkin_monthday=24&checkout_year=2023&checkout_month=6&checkout_monthday=25&efdco=1&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ss_raw=frome&ac_position=0&ac_langcode=en&ac_click_type=b&ac_meta=GhAyZTZkOTBjM2FiNjUwMjZmIAAoATICZW46BWZyb21lQABKAFAA&dest_id=-2596593&dest_type=city&place_id_lat=51.22706&place_id_lon=-2.3193&search_pageview_id=2e6d90c3ab65026f&search_selected=true&search_pageview_id=2e6d90c3ab65026f&ac_suggestion_list_length=5&ac_suggestion_theme_list_length=0",
    name: "Booking.com",
  },
  {
    href: "https://goo.gl/maps/hDgUqTwqewbc3WYQ9",
    name: "Other",
  }
]

interface AccommodationProps {
  sizeClassName: string;
}

export function Accommodation({ sizeClassName }: AccommodationProps) {
  return (
  <Section id="accommodation" className={`Accommodation Accommodation--${sizeClassName}`}>
    <span>Accommodation</span>
    <ul>
      {
        locations.map(({ name, href, tel }) => (
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
  )
}