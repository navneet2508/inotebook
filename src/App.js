import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, About, Navbar } from "./components";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <div>
      <NoteState>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </NoteState>
    </div>
  );
}

export default App;
