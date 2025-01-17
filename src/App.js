import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Content from "./components/Content";

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

export default App;
