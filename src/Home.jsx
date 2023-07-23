import React from "react";
import HornedBeast from "./HornedBeast";
import beast_data from "./beast_data.json";

class Home extends React.Component {
  render() {

    return (

      <main>
        {beast_data.map((beast, idx) => (
          <HornedBeast
            title={beast.title}
            description={beast.description}
            image_url={beast.image_url}
            key={idx}
          />
        ))}
      </main>

    );

  }
  
}

export default Home;
