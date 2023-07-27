import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import beast_data from "./beast_data.json";
import Home from "./Home";
import SelectedBeast from "./SelectedBeast";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Home beast_data={beast_data} />
        <Footer />
        <SelectedBeast />
      </>
    );
  }
}

export default App;
