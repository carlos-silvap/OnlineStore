import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import StoreApp from "./components/StoreApp";
import UpperBody from "./components/UpperBody";
import LowerBody from "./components/LowerBody";
import Accesories from "./components/Accesories";
import Footwear from "./components/Footwear";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = { <StoreApp />}  />
        <Route path="/lower-body" element = { <LowerBody />}  />
        <Route path="/upper-body" element = { <UpperBody />}  />
        <Route path="/footwear" element = { <Footwear />}  />
        <Route path="/accesories" element = { <Accesories />}  />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
