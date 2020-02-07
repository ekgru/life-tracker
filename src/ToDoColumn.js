import React from "react";
import Case from "./Case";




export default class ToDoColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
   this.props.setCase(this.state.value) 
   this.setState({ value: '' });

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
          {this.props.caseList.map((item) => (
            <Case
              caseName={item.name}
              key={item.id}
              completed={item.completed}
              action={() => this.props.completeCase(item.id)}
              deliteAction={()=>this.props.deliteCase(item.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}
