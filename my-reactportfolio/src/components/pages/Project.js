import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import image1 from "../pages/lyricfinder.png";
import image2 from "../pages/Workout2.jpeg";
import image3 from "../pages/pet-adoption.png";

export default function Project() {
  return (
    <div>
      <h1>Project Page</h1>
      <p>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="image1" src={image1} />
  <Card.Body>
    <Card.Title>Lyric Finder</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" href="https://lyndseyfin.github.io/Lyric-finder/">Check it out</Button>
  </Card.Body>
</Card>
</p>
<p>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image2} />
  <Card.Body>
    <Card.Title>Workout Tracker</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" href="https://blooming-stream-28780.herokuapp.com/">Check it out</Button>
  </Card.Body>
</Card>
</p>

<p>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="image3" src={image3} />
  <Card.Body>
    <Card.Title>Paws 4 Y'all</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" href="https://paws4yall.herokuapp.com/">Check it out</Button>
  </Card.Body>
</Card>
  </p>      
     
    </div>
  );
}

