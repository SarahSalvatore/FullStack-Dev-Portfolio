import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Main from "./pages/Main";
import ProjectDescription from "./pages/ProjectDescription";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Main />} />
            <Route path="/project-detail" element={<ProjectDescription />} />
            <Route path="/resume" element={<ProjectDescription />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
