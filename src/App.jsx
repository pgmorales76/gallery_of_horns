import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import beast_data from "./beast_data.json";
import Home from "./Home";
import SelectedBeast from "./SelectedBeast";
import { Form } from "react-bootstrap";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beast: {},
      show_modal: false,
      filtered_beast_data: beast_data
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

        <Form.Select>
          <option>All Beasts</option>
          <option>Zero Horns (Why would there be a Horned Beast with zero Horns? CMON!)</option>
          <option>One Horn</option>
          <option>Two Horns</option>
          <option>Three Horns</option>
          <option>One Hundred Horns</option>
        </Form.Select>
        <Home
          beast_data={this.state.filtered_beast_data}
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
