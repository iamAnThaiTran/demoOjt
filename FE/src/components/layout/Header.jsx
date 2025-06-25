import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.75rem 1.5rem",
        backgroundColor: "#1e293b", // gần giống màu navy
        color: "#fff",
        borderBottom: "4px solid #14b8a6",
      }}
    >
      {/* Left group: Logo + Navigation */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
        <Link
          to="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#fff",
            textDecoration: "none",
          }}
        >
          Paste.tc
        </Link>

        <Link
          to="/archive"
          style={{
            color: "#e2e8f0",
            textDecoration: "none",
            fontSize: "0.875rem",
            letterSpacing: "0.05rem",
          }}
        >
          ARCHIVE
        </Link>

        <Link
          to="/"
          style={{
            padding: "0.4rem 0.8rem",
            backgroundColor: "#14b8a6",
            borderRadius: "4px",
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "0.75rem",
          }}
        >
          + PASTE
        </Link>
      </div>

      {/* Right group: Auth buttons */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <Link
          to="/login"
          style={{
            border: "1px solid #94a3b8",
            borderRadius: "4px",
            padding: "0.3rem 0.75rem",
            color: "#fff",
            textDecoration: "none",
            fontSize: "0.75rem",
          }}
        >
          Login
        </Link>

        <Link
          to="/signup"
          style={{
            backgroundColor: "#3b82f6",
            borderRadius: "4px",
            padding: "0.3rem 0.75rem",
            color: "#fff",
            textDecoration: "none",
            fontSize: "0.75rem",
          }}
        >
          Sign up
        </Link>
      </div>
    </header>
  );
}
