import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/Page/Home";
import User from "./Component/User";
import About from "./Page/About";
import Navbar from "./Component/Navbar";
import Coin from "../src/Page/Coin";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/coin/:d" element={<Coin />}  />
        <Route path="/about" element={<About />}  />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
