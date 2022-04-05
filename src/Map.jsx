const Map = ({ mapName, bgPos }) => {
  return (
    <div
      className={`h-40 w-full bg-${mapName} ${bgPos ? "bg-" + bgPos : "bg-center"} bg-cover md:h-52`}
    ></div>
  );
};

export default Map;
