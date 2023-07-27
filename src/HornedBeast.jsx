import React from "react";
import { Card, Col } from "react-bootstrap";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }

  increment_favorites = () => {
    this.setState({ favorites: this.state.favorites + 1 });
  };

  render() {
    return (
      <Col className="d-flex">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            onClick={this.increment_favorites}
            variant="top"
            src={this.props.image_url}
            height={200}
          />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>{this.state.favorites} ❤️</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default HornedBeast;
