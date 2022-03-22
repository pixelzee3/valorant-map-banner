const Map = ({ mapName }) => {
  const mapBGProperty = `${mapName ? `bg-${mapName}` : ''}`;
  return (
    <div
      className={`h-32 md:h-40 w-full border-2 border-indigo-600 ${mapBGProperty} `}
    ></div>
  );
};

export default Map;
