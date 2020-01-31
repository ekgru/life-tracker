import React from "react";

export default class Case extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return { completed: !prevState.completed };
    });
  }
  render() {
    let complitedStyle = {
      background: "#efefeb"
    };
    let notComplitedStyle = {
      background: "#efefeb"
    };
    
    return (
      <div
        className="case"
        style={this.state.completed ? complitedStyle : notComplitedStyle}
      >
  <div className='check-box'onClick={this.handleClick}><p>{this.state.completed?'✓':''}</p></div>
        {/* <input
          type="checkbox"
          checked={this.state.completed}
          onChange={this.handleChange}
        /> */}
        <p>{this.props.caseName}</p>
      </div>
    );
  }
}
