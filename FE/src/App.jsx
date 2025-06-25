import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Layout from "./components/layout/Layout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Outlet />
      </Layout>
    </Router>
  );
}

export default App;
