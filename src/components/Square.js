import React from "react";

function Square({ colorValue }) {
  return (
    <section className="square" style={{ backgroundColor: colorValue }}>
      <p className="nameOfSquare">{colorValue ? colorValue : "Empy Value"}</p>
    </section>
  );
}

export default Square;
