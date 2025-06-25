// src/components/layout/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div
      className="app-container"
      style={{
        fontFamily: "monospace",
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <main className="main-content" style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
