import React from "react";
import Bmi from "./pages/Bmi";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ShowBmi from "./pages/ShowBmi";
import Contex from "./components/Contex";

const App = () => {
  return (
    <>
    <Contex>
      <BrowserRouter>
        {/* <Link to="/">{"Text"}</Link>
    <Link to="/bmi">{"Text1"}</Link> */}

        <Routes>
          {/* <Bmi/> */}
          <Route path="/" element={<Bmi />} />
          <Route path="/YourBMI" element={<ShowBmi />} />
        </Routes>
      </BrowserRouter>
    </Contex>
    </>
  );
};

export default App;
