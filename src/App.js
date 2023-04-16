import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PageRender from "./customRouter/PageRender";
import Dash_Board from "./pages/Dash_Board";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [show, setShow] = useState(false);

  return (
    <Router>
      <div className="font-poppins">
        <Navbar show={show} setShow={setShow} />
        {show ? null : (
          <Routes>
            <Route exact path="/" element={<Dash_Board />} />
            <Route exact path="/:page" element={<PageRender />} />
          </Routes>
        )}
        {show ? null : <Footer />}
      </div>
    </Router>
  );
}

export default App;
