import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieDetail from "./MovieDetail";

const App = () => (
  <>
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/:id" element={<MovieDetail />} />
          <Route path="/" element={<MoviesList />} />
          <Route path="*" element={<MoviesList />} />
        </Routes>
      </div>
    </HashRouter>
  </>
);

export default App;
