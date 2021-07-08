import React from 'react';
import image from "../pages/headshot.jpg";

function About() {
  return (
    <div>
      <h1>About Page</h1>
      
      <p>I'm a former professional ballerina learning to code! I'm currently attending University of Denver's Full Stack Web Development Boot Camp. Learning: Node.js, HTML, CSS and
                    JavaScript.</p>
        <img src={image} alt="headshot"></img>
        
    </div>
  );
}

export default About;
