import React from 'react';
import { name, city } from '../data/data';

export default function Home() {
  return (
    <div id="home">
      <h1 style={{ color: 'firebrick' }}>{`${name} is a Web Developer from ${city}`}</h1>
    </div>
  );
}
