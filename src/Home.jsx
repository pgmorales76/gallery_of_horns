import React from "react";
import HornedBeast from "./HornedBeast";

class Home extends React.Component {
  render() {
    const beast_component_array = [];

    beast_data.forEach((beast) => {
      beast_component_array.push(
        <HornedBeast
          title={beast.title}
          description={beast.description}
          image_url={beast.image_url}
        />
      );
    });

    return (
      <main>
        {/* <HornedBeast
          title={"UniWhal"}
          description={"A unicorn and a narwhal nuzzling their horns"}
          image_url={
            "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
          }
        /> */}
        {beast_component_array}
      </main>
    );
  }
}

export default Home;
