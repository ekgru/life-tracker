import React from "react";
import Case from "./Case";
export default class ToDoColumn extends React.Component {
  constructor() {
    const CASE_STATE = "case_state";
    const localState = localStorage.getItem(CASE_STATE);
    let cases = JSON.parse(localState);
    super();
    this.state = {
      value: "",
      toDos: cases ? cases : []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.completeClick = this.completeClick.bind(this);
    this.deliteCase = this.deliteCase.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    let newCase = {
      name: this.state.value,
      completed: false
    };

    this.setState(prevState => {
      return {
        toDos: [...prevState.toDos, newCase],
        value: ""
      };
    });
  }
  completeClick(index) {
    let stateObj = [...this.state.toDos];
    stateObj[index].completed = !stateObj[index].completed;
    this.setState(() => {
      return { toDos: stateObj };
    });
  }
  deliteCase(index) {
    let stateObj = [...this.state.toDos];
    stateObj.splice(index, 1);
    this.setState(() => {
      return { toDos: stateObj };
    });
  }
  componentDidUpdate() {
    const CASE_STATE = "case_state";
    localStorage.setItem(CASE_STATE, JSON.stringify(this.state.toDos));
  }
  render() {
    return (
      <div className="cases-part">
        <form onSubmit={this.handleSubmit} className="form">
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button disabled={this.state.value.length ? "" : "disabled"}>
            В список дел!
          </button>
        </form>
        <div className="list">
          {this.state.toDos.map((item, index) => (
            <Case
              caseName={item.name}
              key={index}
              completed={item.completed}
              action={() => this.completeClick(index)}
              deliteAction={() => this.deliteCase(index)}
            />
          ))}
        </div>
      </div>
    );
  }
}
