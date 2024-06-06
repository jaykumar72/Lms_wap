import React, { useEffect } from 'react';
import routers from "./routers";
import { RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Fragment } from "react";
import 'remixicon/fonts/remixicon.css'
import AOS from 'aos';
import 'aos/dist/aos.css';





function App() {
    useEffect(() => {

    AOS.init({
      duration: 650,
      once: true
    });
  }, []);
  return (
    <div>
      <Fragment>
        <RouterProvider router={routers} />
       </Fragment>

    </div>

  );
}

export default App;
