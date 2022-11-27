import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home, About, Navbar } from "./components";
import NoteState from "./context/notes/NoteState";
import { Alert } from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";

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
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </NoteState>
    </div>
  );
}

export default App;
