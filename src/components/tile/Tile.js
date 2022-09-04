import React from "react";

export const Tile = ({ obj }) => {
  const tileValues = Object.values(obj);
  const tile = tileValues.map((el, i) => {
    return <p key={i} className={i === 0 ? "tile-title" : "tile"}>{el}</p>;
  })
  return (
    <div className="tile-container">
      {tile}
    </div>
  );
};
