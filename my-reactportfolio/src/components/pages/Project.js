import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import image1 from "../pages/lyrics.jpeg";
import image2 from "../pages/workout.jpg";
import image3 from "../pages/adoption.jpeg";

export default function Project() {
  return (
    <div>
      <h1>My Projects</h1>
      <p>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="image1" src={image1} />
  <Card.Body className="text">
    <Card.Title>Lyric Finder</Card.Title>
    <Card.Text>
    Lyrically challanged? We are here for you. As many of us can attest to, being able to understand and interpert lyrics accurately can be tough. Lyric Finder, allows the user to search for an aritst + song on the top 50 list and then able to view the lyrics to the selected song. 
    </Card.Text>
    <Button variant="primary" href="https://lyndseyfin.github.io/Lyric-finder/">Check it out</Button>
  </Card.Body>
</Card>
</p>
<p>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="image2" src={image2} />
  <Card.Body className="text">
    <Card.Title>Workout Tracker</Card.Title>
    <Card.Text>
  Fitness app that allows the user to view, create and track daily workouts. 
    </Card.Text>
    <Button variant="primary" href="https://blooming-stream-28780.herokuapp.com/">Check it out</Button>
  </Card.Body>
</Card>
</p>

<p>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="image3" src={image3} />
  <Card.Body className="text">
    <Card.Title>Paws 4 Y'all</Card.Title>
    <Card.Text>
    Looking for a four-legged friend? Then you came to the right place! This pet adoption application allows the user to search for a dog to adopt. In addition, if you have a dog that needs a new home, the user can create an account, login and post new dog for adoption.
    </Card.Text>
    <Button variant="primary" href="https://paws4yall.herokuapp.com/">Check it out</Button>
  </Card.Body>
</Card>
  </p>      
     
    </div>
  );
}

