import "./App.css";
import Home from "./pages/Home";
import MovieInfo from "./components/MovieInfo"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/:id" element={<MovieInfo />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;