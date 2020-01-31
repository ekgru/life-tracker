
import React from "react";
import Goal from "./Goal";

export default class GoalsColumn extends React.Component {
  constructor(props) {
    const GOAL_STATE = "state";
    const localState = localStorage.getItem(GOAL_STATE);
    let goals = JSON.parse(localState);
    super(props);
    this.state = {
      goalsList: goals ? goals : [],
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.counterClick = this.counterClick.bind(this);
    this.archiveClick = this.archiveClick.bind(this);
    this.deliteGoal = this.deliteGoal.bind(this);
  }
deliteGoal(id){
  let stateObj = [...this.state.goalsList];
  stateObj.splice(id,1)
  stateObj.map((item, index)=>item.id=index)
  this.setState(() => {
    return { goalsList: stateObj };
  });
}
  counterClick(id) {
    let stateObj = [...this.state.goalsList];
    stateObj[id].count += 1;
    this.setState(() => {
      return { goalsList: stateObj };
    });
  }
  archiveClick(id) {
    let stateObj = [...this.state.goalsList];
    stateObj[id].inArchive = !stateObj[id].inArchive;
    this.setState(() => {
      return { goalsList: stateObj };
    });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleClick(event) {
    event.preventDefault()
    let newGoal = {
      id: this.state.goalsList.length,
      nameOfGoal: this.state.value,
      dateOfCreate: new Date(),
      inArchive: false,
      count: 0
    };
    this.setState(prevState => {
      return {
        goalsList: [...prevState.goalsList, newGoal],
        value: ""
      };
    });
    console.log(this.state);
  }

  componentDidUpdate() {
    console.log(this.state);
    const GOAL_STATE = "state";
    localStorage.setItem(GOAL_STATE, JSON.stringify(this.state.goalsList));
  }
  render() {
    return (
      <div className="goals-part">
        <form className="form" onSubmit={this.handleClick}>
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
            В список целей!
          </button>
        </form>
        <div className="list">
          {this.state.goalsList.map(item => (
            <Goal
              id={item.id}
              key={item.id}
              nameOfGoal={item.nameOfGoal}
              dateOfCreate={new Date("" + item.dateOfCreate)}
              inArchive={item.inArchive}
              count={item.count}
              actionCount={() => this.counterClick(item.id)}
              actionArchive={() => this.archiveClick(item.id)}
              actionDelite={()=>this.deliteGoal(item.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}
