import React from "react";
export default function Goal(props) {
  let buttonNonestyle = {
    display: "none"
  };
  let notComplitedStyle = {
    background: "#f3f3ef"
  };
  let archiveStyle = {
    flexWrap: " wrap-reverse",
    flexDirection: "row-reverse",
    display: "flex",
    background: "#e4e4e4",
    boxShadow: "inset -11px -9px 0px 1px #b7b4b4",
    borderColor: "#b7b4b4"
  };
  let options = {
    day: "numeric",
    month: "numeric",
    year: "numeric"
  };
  let dateCreation = props.dateOfCreate.toLocaleString("ru", options);

  return (
    <div
      className="goal"
      style={props.inArchive ? archiveStyle : notComplitedStyle}
    >
      <div>
        <p className="goal-date"> Создано {dateCreation}</p>
        <h4>
          {props.nameOfGoal}
          {props.count >= 30 ? "  уже вошло в привычку!" : ""}
        </h4>
      </div>

      <p className="goal-counter">Сделано {props.count} раз</p>
      <div className="buttons-goals">
        <button
          style={props.inArchive ? buttonNonestyle : null}
          onClick={props.actionCount}
          disabled={props.inArchive ? "disabled" : ""}
        >
          Сделано
        </button>
        <button onClick={props.actionArchive}>
          {props.inArchive ? "Из архива" : "В архив"}
        </button>
        <button onClick={props.actionDelite}>DELITE</button>
      </div>
    </div>
  );
}
