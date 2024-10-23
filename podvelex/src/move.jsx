import React from "react";
import { useState, useEffect } from "react";

const Move = () => {
  const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 });
  const onMouseMove = (e) =>
    setCursorPosition({ top: e.screenY, left: e.screenX });

  return (
    <div onMouseMove={onMouseMove}>
      <div style={{ position: "absolute", ...cursorPosition }} />
    </div>
  );
};

export default Move;
