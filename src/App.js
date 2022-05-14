import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration"

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/register" element={<Registration/>}/>
        </Routes>          
    </Router>
  );
}

export default App;
