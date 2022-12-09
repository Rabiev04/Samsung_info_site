import React, { useState } from "react";

const EditComponent = ({ props }) => {
  const [modalview, setModalview] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDate, setNewDate] = useState("");

  console.log(props);

  const handleToggle = () => {
    setModalview(!modalview);
  };

  return (
    <div className="modalView">
      {modalview ? (
        <div className="edit_field">
          <input
            className="edit_name"
            onChange={(e) => setNewName(e.target.value)}
            defaultValue={props.item.name}
            type="text"
          />
          <input
            className="edit_date"
            defaultValue={props.item.date}
            onChange={(e) => setNewDate(e.target.value)}
            type="date"
          />
          <div className="edit_field_buttons">
            <button
              className="edit_field_update"
              onClick={() =>
                props.onUpdateTodo(props.item.id, newName, newDate)
              }
            >
              Update
            </button>
            <button className="edit_field_cancel" onClick={handleToggle}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <svg
          onClick={handleToggle}
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="rgb(173, 46, 173)"
          className="bi bi-pencil-fill"
          viewBox="0 0 16 16"
        >
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
        </svg>
      )}
    </div>
  );
};

export default EditComponent;
