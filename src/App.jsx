import Maps from "./Maps";

function App() {
  return (
    <div className="bg-black w-screen h-screen">
      {/* Load assets */}
      <div className="bg-ascent"></div>
      <div className="bg-bind"></div>
      <div className="bg-breeze"></div>
      <div className="bg-haven"></div>
      <div className="bg-icebox"></div>
      <div className="bg-split"></div>
      <div className="bg-fracture"></div>
      <div className="bg-filler"></div>
      {/* (end) Load assets */}
      <Maps />
    </div>
  );
}

export default App;
