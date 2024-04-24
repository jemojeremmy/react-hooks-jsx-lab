import React from 'react';
import { image } from '../data/data';

export default function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Write anything about yourself here.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}
