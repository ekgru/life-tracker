import React from "react";
import GoalsColumn from "./GoalsColumn";
import ToDoColumn from "./ToDoColumn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
 
function App(props) {
  return (
    <Router>
      <div className='nav-bar'>
      <Link to="/">Главная</Link>
      <Link to="/goals">Цели</Link>
      <Link to="/cases">Задачи</Link>
      </div>
      <div className='container'>
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/goals" >
          <GoalsColumn goalsList={props.appState.goals} />
        </Route>
        <Route path="/cases">
          <ToDoColumn casesList={props.appState.cases}/>
        </Route>
        
      </Switch>
      </div>
    </Router>
  );
}
 

export default  App
