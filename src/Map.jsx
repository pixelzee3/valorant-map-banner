const Map = ({ mapName, bgPos }) => {
  return (
    <div
      className={`h-40 w-full bg-${mapName.toLowerCase()} ${
        bgPos ? 'bg-' + bgPos : 'bg-center'
      } relative bg-cover md:h-52`}
    >
      <div className="w-full h-full">
        <h2
          className={`absolute bottom-2.5 left-2.5 font-sans text-4xl text-white md:text-5xl ${
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
