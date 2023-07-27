import React from "react";
import HornedBeast from "./HornedBeast";

class Home extends React.Component {
  render() {
    return (
      <>
        {this.props.beast_data.map((beast, idx) => (
          <HornedBeast
            key={idx}
            title={beast.title}
            image_url={beast.image_url}
            description={beast.description}
          />
        ))}
      </>
    );
  }
}

export default Home;
