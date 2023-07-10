import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
