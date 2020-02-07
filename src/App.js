import React from "react";
import GoalsColumn from "./GoalsColumn";
import ToDoColumn from "./ToDoColumn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";

import { connect } from "react-redux";
import{ setGoal, archiveGoal, deliteGoal, countGoal} from "../src/actions/goalActions";
import { setCase, completeCase, deliteCase } from "../src/actions/caseActions";
function App(props) {
  return (
    <Router>
      <div className="nav-bar">
        <Link to="/">Главная</Link>
        <Link to="/goals">Трекер привычек</Link>
        <Link to="/cases">Список дел</Link>
      </div>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/goals">
            <GoalsColumn archiveGoal={props.archiveGoalAction}
              goalList={props.goal}
              setGoal={props.setGoalAction}
              deliteGoal={props.deliteGoalAction} 
              countGoal={props.countGoalAction}/>
          </Route>
          <Route path="/cases">
            <ToDoColumn
              completeCase={props.completeCaseAction}
              caseList={props.case}
              setCase={props.setCaseAction}
              deliteCase={props.deliteCaseAction}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = store => {

  return {
    case: store.case,
    goal: store.goal
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setCaseAction: name => dispatch(setCase(name)),
    completeCaseAction: id => dispatch(completeCase(id)),
    deliteCaseAction: id => dispatch(deliteCase(id)),
    setGoalAction: name => dispatch(setGoal(name)),
    archiveGoalAction: id => dispatch(archiveGoal(id)),
    deliteGoalAction: id => dispatch(deliteGoal(id)),
    countGoalAction: id => dispatch(countGoal(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
