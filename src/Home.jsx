import React from "react";
import HornedBeast from "./HornedBeast";
import { Container, Row } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          {this.props.beast_data.map((beast, idx) => (
            <HornedBeast
              key={idx}
              title={beast.title}
              image_url={beast.image_url}
              description={beast.description}
              beast={beast}
              set_selected_beast={this.props.set_selected_beast}
              show_beast_modal={this.props.show_beast_modal}
            /> 
          ))}
        </Row>
      </Container>
    );
  }
}

export default Home;
