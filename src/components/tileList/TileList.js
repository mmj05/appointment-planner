import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ arr }) => {
  const tiles = arr.map((obj, i) => <Tile key={i} />);
  return (
    <div>
      {tiles}
    </div>
  );
};
