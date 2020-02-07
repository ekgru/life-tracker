import React from "react";
import Goal from "./Goal";

export default class GoalsColumn extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.setGoal(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div className="goals-part">
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            id="goal-input"
            value={this.state.value}
            type="text"
            onChange={this.handleChange}
          />
          <button
            id="do-goal-button"
            disabled={this.state.value.length ? "" : "disabled"}
            type="submit"
          >
            В список привычек!
          </button>
        </form>
        <div className="list">
          {this.props.goalList.map(item => (
            <Goal
              key={item.id}
              nameOfGoal={item.name}
              dateOfCreate={new Date("" + item.date)}
              inArchive={item.inArchive}
              count={item.count}
              actionCount={() => this.props.countGoal(item.id)}
              actionArchive={() => this.props.archiveGoal(item.id)}
              actionDelite={() => this.props.deliteGoal(item.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}
