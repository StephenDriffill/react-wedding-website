import * as React from 'react';
import "./Section.css"

interface SectionProps {
  id?: string,
  children: React.ReactNode,
  className?: string
}

export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={`Section ${className}`} >
      <div className={`Section__content`}>
        {children}
      </div>
    </section>
  );
}