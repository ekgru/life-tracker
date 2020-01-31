import React from "react";
import Case from "./Case";
export default class ToDoColumn extends React.Component {
  constructor() {
    super()
    this.state = {
      value: "",
      toDos: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleClick() {
    let newCase = <Case caseName={this.state.value} key={this.state.toDos.length}/>
    this.setState(prevState => {
      return {
        toDos: [...prevState.toDos, newCase],
        value: ""
      };
    });
  }
  render() {
    return (
      <div className='cases-part'>
        <div className='form'>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick} disabled={this.state.value.length ? "" : "disabled"}>В список дел!</button>
        </div>
    <div className="list">{this.state.toDos}</div></div>
    );
  }
}
