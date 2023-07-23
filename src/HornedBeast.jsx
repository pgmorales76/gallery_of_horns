import React from "react";
import { Button, Card, Col } from "react-bootstrap";

class HornedBeast extends React.Component {
  render() {
    return (
      <Col className="d-flex">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.image_url} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;
