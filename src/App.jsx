import { Home } from ".//pages/Home";
import { Routes, Route } from "react-router-dom";
import { SingleVideo } from "./pages/SingleVideo";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/videos/:ide" element={<SingleVideo/>}/>
    </Routes>
  );
}

export default App;
