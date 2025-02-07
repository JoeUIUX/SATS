/* implement routing using react-router-dom, 
you’ll need to transform your page.tsx into an entry point for routing. */

/* npm install react-router-dom */

"use client";

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WelcomeWindow from "../components/WelcomeWindow/WelcomeWindow";
import MainScreen from "../components/MainScreen/MainScreen";

export default function Page() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomeWindow />} />
        <Route path="/main" element={<MainScreen />} />
      </Routes>
    </Router>
  );
}
