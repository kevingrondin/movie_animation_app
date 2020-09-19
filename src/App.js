import React from "react";
import { Routes, Route, HashRouter, Link } from "react-router-dom";
import MoviesList from "./MoviesList";
import MovieDetail from "./MovieDetail";

const Header = () => (
  <header className="App-header">
    <Link to="/">
      <h3>Applicatoin</h3>
    </Link>
  </header>
);

const App = () => (
  <>
    <HashRouter>
      <div className="App">
        <Header />
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
