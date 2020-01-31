import React from "react";
export default function Goal(props) {
  let buttonArchivestyle = {
    padding: "15px 20px"
  };
  let notComplitedStyle = {
    background: "#f3f3ef"
  };
  let archiveStyle = {
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
          onClick={props.actionCount}
          disabled={props.inArchive ? "disabled" : ""}
        >
          Сделано
        </button>
        <button
          style={props.inArchive ? buttonArchivestyle : null}
          onClick={props.actionArchive}
        >
          {props.inArchive ? "Из архива" : "В архив"}
        </button>
        <div className="delite-button" onClick={props.actionDelite}>
          <span aria-label="Close" role="img">
            ❌
          </span>
        </div>
      </div>
    </div>
  );
}
