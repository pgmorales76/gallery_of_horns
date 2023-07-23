import React from "react";
import { Button, Card } from "react-bootstrap";

class HornedBeast extends React.Component {
  render() {
    return (
      // <div>
      //   {/* TODO: Make this component dynamic */}
      //   <h2>{this.props.title}</h2>
      //   {/* TODO: Add the image content */}
      //   <img src={this.props.image_url} alt={this.props.title} width={250} />
      //   <p>{this.props.description}</p>
      // </div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    );
  }
}

export default HornedBeast;
