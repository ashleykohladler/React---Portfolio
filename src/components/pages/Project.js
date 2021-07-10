import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import image1 from "./lyrics.jpeg";
import image2 from "./workout.jpg";
import image3 from "./adoption.jpeg";
import image4 from "./blog.jpeg";
import image5 from "./forecast.png";
import image6 from "./notetaker.jpeg";

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
    Lyrically challenged? We are here for you. As many of us can attest to, being able to understand and interpert lyrics accurately can be tough. Lyric Finder, allows the user to search for an aritst + song on the top 50 list and then able to view the lyrics to the selected song. 
    </Card.Text>
    <p><Button variant="primary" href="https://lyndseyfin.github.io/Lyric-finder/">Check it out</Button></p>
    <p><Button variant="primary" href="https://github.com/ashleykohladler/Lyric-finder">Github</Button></p>
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
    <p><Button variant="primary" href="https://paws4yall.herokuapp.com/">Check it out</Button></p>
    <p><Button variant="primary" href="https://github.com/ashleykohladler/pet-adoption">Github</Button></p>
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
    <p><Button variant="primary" href="https://github.com/ashleykohladler/18-Nosql-Workout-Tracker">Github</Button></p>
  </Card.Body>
</Card>
</p>

<p>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="image4" src={image4} />
  <Card.Body className="text">
    <Card.Title>Tech Blog</Card.Title>
    <Card.Text>
    Technical blogging is a great way to share your expertise while building a potentially valuable readership. It can help you to document projects, or provide guidance to other web users.
    </Card.Text>
    <Button variant="primary" href="https://guarded-hamlet-57145.herokuapp.com/">Check it out</Button>
    <p><Button variant="primary" href="https://github.com/ashleykohladler/14-Model-View-Controller-MVC-Tech-Blog">Github</Button></p>
  </Card.Body>
</Card>
  </p>    

  <p>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="image5" src={image5} />
  <Card.Body className="text">
    <Card.Title>Weather Tracker</Card.Title>
    <Card.Text>
    This is a Weather Dashboard for a traveler to be able to look up the weather for multiple cities so that they can plan a trip accordingly.
    </Card.Text>
    <Button variant="primary" href="https://ashleykohladler.github.io/06-Server-Side-APIs-WeatherDashboard/">Check it out</Button>
    <p><Button variant="primary" href="https://github.com/ashleykohladler/06-Server-Side-APIs-WeatherDashboard">Github</Button></p>
  </Card.Body>
</Card>
  </p>    

  <p>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className="image6" src={image6} />
  <Card.Body className="text">
    <Card.Title>Note Taker</Card.Title>
    <Card.Text>
    I created an application that can be used to write, save and delete notes.
    </Card.Text>
    <Button variant="primary" href="https://cryptic-mesa-91189.herokuapp.com/">Check it out</Button>
    <p><Button variant="primary" href="https://github.com/ashleykohladler/11-Express.js-Note-Taker">Github</Button></p>
  </Card.Body>
</Card>
  </p>    

  <p>

  </p>      
     
    </div>
  );
}

