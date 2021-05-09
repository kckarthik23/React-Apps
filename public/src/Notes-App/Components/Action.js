import React from "react";

const Action = (props) => (
  <div>
    <button disabled={!props.notes.length > 0} onClick={props.handlePick}>
      Display any Notes saved
    </button>
  </div>
);

export { Action };
