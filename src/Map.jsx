import { useState } from "react";

const Map = ({ mapName, bgPos }) => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className={`h-40 w-full bg-${mapName.toLowerCase()} ${
        bgPos ? 'bg-' + bgPos : 'bg-center'
      } relative bg-cover md:h-52`}
      onClick={handleClick}
    >
      <div className={`w-full h-full ${mapName !== "filler" && !clicked ? "hover:bg-white hover:bg-opacity-25" : ""} ${clicked && mapName.toLowerCase() !== "filler" ? "bg-red-500 bg-opacity-50" : ""} transition-all`}>
        <h2
          className={`absolute select-none bottom-2.5 left-2.5 font-sans text-4xl text-white md:text-5xl ${
            mapName.toLowerCase() === 'filler' ? 'hidden' : ''
          }`}
        >
          {mapName}
        </h2>
      </div>
    </div>
  );
};

export default Map;
