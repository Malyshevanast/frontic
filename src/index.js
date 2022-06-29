import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Page from "./templates/Page.js";
import CoursePage from "./pages/Course";
import HalfPage from './pages/Half';
import ProfilePage from './pages/Profile';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route path="/course" element={<CoursePage />} />
          <Route path="/half" element={<HalfPage/>}/>
          <Route path="/profile" element={<ProfilePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);