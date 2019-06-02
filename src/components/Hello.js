import React, { Component } from "react";

class Hello extends Component {
  state = { name: this.props.name, password: '', confirmPassword: '' };
  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    // this.setState({ name: e.target.value, password: e.target.value, confirmPassword: e.target.value });
  }
  resetName() {
    this.setState({ name: this.props.name });
  }

  handleSubmit(event) {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    console.log("component rendered");
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Hello Component {this.state.name}
          <br />
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
          />
          <br />
          Password:
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={e => this.handleChange(e)}
          />
          <br />
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={this.state.confirmPassword}
            onChange={e => this.handleChange(e)}
          />
          <br />
          <input type="submit" value="Submit" />
          <button onClick={() => this.resetName()}>Reset Name</button>
        </form>
      </div>
    );
  }
}

export default Hello;
