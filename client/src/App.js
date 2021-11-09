import React from "react";

import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
);

export default App;
