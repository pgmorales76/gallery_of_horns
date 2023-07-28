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
      show_modal: false,
    };
  }

  show_beast_modal = () => this.setState({ show_modal: true });

  hide_beast_modal = () => this.setState({ show_modal: false });

  set_selected_beast = (beast) =>
    this.setState({ beast: beast }, () => console.log(this.state.beast));

  render() {
    return (
      <>
        <Header />
        <Home
          beast_data={beast_data}
          set_selected_beast={this.set_selected_beast}
          show_beast_modal={this.show_beast_modal}
        />
        <Footer />
        <SelectedBeast
          show_modal={this.state.show_modal}
          hide_beast_modal={this.hide_beast_modal}
          beast={this.state.beast}
        />
      </>
    );
  }
}

export default App;
