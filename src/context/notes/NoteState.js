import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "63740204cd0b1719e3e41bca",
      user: "63738c94be229705f3c59d73",
      title: "My title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-11-15T21:17:56.094Z",
      __v: 0,
    },
    {
      _id: "63740204cd0b1719e3e41bcc",
      user: "63738c94be229705f3c59d73",
      title: "My title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-11-15T21:17:56.325Z",
      __v: 0,
    },
    {
      _id: "63740204cd0b1719e3e41bce",
      user: "63738c94be229705f3c59d73",
      title: "My title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-11-15T21:17:56.524Z",
      __v: 0,
    },
    {
      _id: "63740205cd0b1719e3e41bd0",
      user: "63738c94be229705f3c59d73",
      title: "My title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-11-15T21:17:57.325Z",
      __v: 0,
    },
    {
      _id: "63740205cd0b1719e3e41bd2",
      user: "63738c94be229705f3c59d73",
      title: "My title",
      description: "Please wake up early",
      tag: "personal",
      date: "2022-11-15T21:17:57.488Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
