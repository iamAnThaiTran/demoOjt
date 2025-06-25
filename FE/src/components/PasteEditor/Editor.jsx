import React from "react";

function Editor() {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "2rem auto",
        fontFamily: "sans-serif",
      }}
    >
      <h2>Create New Paste</h2>

      <label>New Paste</label>
      <textarea rows={10} style={{ width: "100%", marginBottom: "1rem" }} />

      <h4>Optional Paste Settings</h4>

      <label>Category</label>
      <select style={{ width: "100%", marginBottom: "1rem" }}>
        <option>None</option>
      </select>

      <label>Tags</label>
      <input
        type="text"
        placeholder="e.g. python, flask, webdev"
        style={{ width: "100%", marginBottom: "1rem" }}
      />

      <label>Syntax Highlighting</label>
      <select style={{ width: "100%", marginBottom: "1rem" }}>
        <option>None</option>
      </select>

      <label>Paste Expiration</label>
      <select style={{ width: "100%", marginBottom: "1rem" }}>
        <option>Never</option>
      </select>

      <label>Paste Exposure</label>
      <select style={{ width: "100%", marginBottom: "1rem" }}>
        <option>Public</option>
      </select>

      <fieldset style={{ marginBottom: "1rem" }}>
        <legend>Enable Password</legend>
        <label>
          <input type="checkbox" /> Enabled/Disabled
        </label>
        <br />
        <label>
          <input type="checkbox" /> Burn after read (override expiration)
        </label>
      </fieldset>

      <label>Paste Name / Title</label>
      <input type="text" style={{ width: "100%", marginBottom: "1rem" }} />

      <button
        style={{
          backgroundColor: "#3b82f6",
          color: "white",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Create New Paste
      </button>
    </div>
  );
}

export default Editor;
