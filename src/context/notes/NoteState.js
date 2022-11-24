import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:8080";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes
  const getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3MzhjOTRiZTIyOTcwNWYzYzU5ZDczIn0sImlhdCI6MTY2ODUxNzAzOX0.B-YosPsmncvA7EltqlEMyzUAqO3gli5lrtg7eXoYPC0",
      },
    });

    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API call
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3MzhjOTRiZTIyOTcwNWYzYzU5ZDczIn0sImlhdCI6MTY2ODUxNzAzOX0.B-YosPsmncvA7EltqlEMyzUAqO3gli5lrtg7eXoYPC0",
      },
      body: JSON.stringify(title, description, tag),
    });

    const note = {
      _id: "63740205cd0b1719e3e41bd2",
      user: "63738c94be229705f3c59d73",
      title: title,
      description: description,
      tag: tag,
      date: "2022-11-15T21:17:57.488Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3MzhjOTRiZTIyOTcwNWYzYzU5ZDczIn0sImlhdCI6MTY2ODUxNzAzOX0.B-YosPsmncvA7EltqlEMyzUAqO3gli5lrtg7eXoYPC0",
      },
    });
    const json = response.json();
    console.log(json);

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM3MzhjOTRiZTIyOTcwNWYzYzU5ZDczIn0sImlhdCI6MTY2ODUxNzAzOX0.B-YosPsmncvA7EltqlEMyzUAqO3gli5lrtg7eXoYPC0",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
