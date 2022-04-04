const Map = ({ mapName, bgPos }) => {
  return (
    <div
      className={`h-32 w-full bg-${mapName} ${bgPos ? "bg-" + bgPos : "bg-center"} md:h-40`}
    ></div>
  );
};

export default Map;
