import React from "react";
function Spinner() {
  return (
    <div
      class="spinner-border"
      style={{
        width: " 4rem ",
        height: "4rem",
        zIndex: "999",
        left: "45%",
        position: "fixed",
        top: "45%",
      }}
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
  );
}
export default Spinner;
