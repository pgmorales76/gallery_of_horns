import React from "react";
import { Modal } from "react-bootstrap";

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.show_modal} onHide={this.props.hide_beast_modal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.beast.image_url} alt={this.props.beast.title} />
        </Modal.Body>
      </Modal>
    );
  }
}

export default SelectedBeast;
