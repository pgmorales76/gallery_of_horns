import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import beast_data from "./beast_data.json";
import Home from "./Home";
import SelectedBeast from "./SelectedBeast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beast: {},
    };
  }

  set_selected_beast = (beast) => this.setState({ beast: beast });

  render() {
    return (
      <>
        <Header />
        <Home
          beast_data={beast_data}
          set_selected_beast={this.set_selected_beast}
        />
        <Footer />
        <SelectedBeast />
      </>
    );
  }
}

export default App;
