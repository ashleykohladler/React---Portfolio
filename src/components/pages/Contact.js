import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



export default function Contact() {
  return (
    <div>
      <h1>Contact Me</h1>

      <Form className="formcontainer">
  <Form.Group className="form" controlId="exampleForm.ControlInput1">
    <Form.Label>Name </Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>

  <Form.Group className="form" controlId="exampleForm.ControlInput1">
    <Form.Label>Email </Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
 
  <Form.Group className="form" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message </Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>

 <Button className="button" variant="dark">Send</Button>{' '}
    </div>

    
  );
}
