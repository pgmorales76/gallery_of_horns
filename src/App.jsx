import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    );
  }
}

export default App;
