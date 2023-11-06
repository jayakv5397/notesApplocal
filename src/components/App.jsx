import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function add(newNote) {
    const current = [...notes, newNote];
    setNotes(current);
  }

  function delNote(id) {
    console.log(id);
    let updatedNotes = notes.filter((e) => {
      return e.id !== id;
    });
    setNotes(updatedNotes);
  }

  return (
    <div>
      <Header />
      <CreateArea add={add} />
      {notes.map((note) => (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          content={note.content}
          delNote={delNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
