import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        id={props.id}
        onClick={(e) => {
          props.delNote(e.target.id);
          e.preventDefault();
        }}
      >
        DELETE
      </button>
    </div>
  );
}

export default Note;
