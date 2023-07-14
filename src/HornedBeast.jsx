import React from "react";

class HornedBeast extends React.Component {
  render() {
    return (
      <div>
        {/* TODO: Make this component dynamic */}
        <h2>{this.props.title}</h2>
        {/* TODO: Add the image content */}
        <img src={this.props.image_url} alt={this.props.title} />
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default HornedBeast;
