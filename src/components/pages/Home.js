import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import image from "./techbackground.jpeg";

export default function Home() {
  return (
    <div>
      <h1>ASHLEY KOHL ADLER</h1>
      <img src={image} alt="tech background"></img>
      <p>
      <Jumbotron>
  <h1>Welcome!</h1>
  <p>
   I love to think about new ideas and solve problems.
  </p>
 
</Jumbotron>
      
      </p>
    </div>
  );
}
