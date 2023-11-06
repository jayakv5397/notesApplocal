import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    id: "",
    title: "",
    content: ""
  });

  function handleChange(e) {
    const inputContent = e.target.value;
    const inputField = e.target.name;
    if (inputField === "title") {
      setInputText({
        id: uuidv4(),
        title: inputContent,
        content: inputText.content
      });
    } else {
      setInputText({
        id: uuidv4(),
        title: inputText.title,
        content: inputContent
      });
    }
    e.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={inputText.title}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputText.content}
          onChange={handleChange}
        />
        <button
          onClick={(e) => {
            props.add(inputText);
            setInputText({
              id: "",
              title: "",
              content: ""
            });
            e.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
