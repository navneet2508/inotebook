import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, About, Navbar } from "./components";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";

function App() {
  return (
    <div>
      <NoteState>
        <Navbar />
        <Alert message="This is amazing react course" />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </NoteState>
    </div>
  );
}

export default App;
