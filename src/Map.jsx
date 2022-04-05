const Map = ({ mapName, bgPos }) => {
  return (
    <div
      className={`h-40 w-full bg-${mapName.toLowerCase()} ${
        bgPos ? 'bg-' + bgPos : 'bg-center'
      } relative bg-cover md:h-52`}
    >
      <h2 className={`absolute bottom-2.5 left-2.5 font-sans text-4xl md:text-5xl text-white ${mapName.toLowerCase() === "filler" ? "hidden" : ""}`}>
        {mapName}
      </h2>
    </div>
  );
};

export default Map;
