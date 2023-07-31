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
      filtered_beast_data: beast_data,
    };
  }

  show_beast_modal = () => this.setState({ show_modal: true });

  hide_beast_modal = () => this.setState({ show_modal: false });

  set_selected_beast = (beast) =>
    this.setState({ beast: beast }, () => console.log(this.state.beast));

  update_filtered_data = (e) => {
    const targeted_beast = e.target.value;
    if (targeted_beast === "All") {
      this.setState({ filtered_beast_data: beast_data });
    } else {
      const updated_data = beast_data.filter(
        (beast) => beast.horns === targeted_beast
      );
      this.setState({ filtered_beast_data: updated_data });
    }
  };

  render() {
    return (
      <>
        <Header />

        <Form.Select onChange={this.update_filtered_data}>
          <option value={"All"}>All Beasts</option>
          <option value={"1"}>One Horn</option>
          <option value={"2"}>Two Horns</option>
          <option value={"3"}>Three Horns</option>
          <option value={"100"}>One Hundred Horns</option>
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
