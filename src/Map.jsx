const Map = ({ mapName, imgURL }) => {
  console.log(mapName);
  console.log(imgURL);
  
  return (
    <div
      className={`h-32 w-full border-2 border-indigo-600 bg-[url('${imgURL}')] md:h-40`}
    ></div>
  );
};

export default Map;
