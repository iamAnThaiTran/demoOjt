import react from "react";

function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#0d263b",
        color: "#fff",
        boxShadow: "0 -2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <p style={{ margin: 0 }}>
        &copy; {new Date().getFullYear()} Paste.tc. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
