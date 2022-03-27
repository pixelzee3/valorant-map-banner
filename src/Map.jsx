// https://stackoverflow.com/questions/68020378/how-to-use-template-literals-in-tailwindcss-to-change-classes-dynamically
// ^ that could help you figure out this bug.`

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
