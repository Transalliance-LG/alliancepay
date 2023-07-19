import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import PageRender from "./customRouter/PageRender";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  return (
    <Router>
      {/* <div className="font-poppins">
        {" "}
        <Navbar show={show} setShow={setShow} />
      </div> */}

      <div className={show ? `font-poppins hidden xl:inline` : ` font-poppins`}>
        <div>
          <Routes>
            <Route exact path="/" element={<Coming />} />
            <Route exact path="/:page" element={<PageRender />} />
          </Routes>

          {/* <Footer show2={show2} setShow2={setShow2} /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
