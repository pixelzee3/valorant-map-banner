import Maps from "./Maps";

function App() {
  return (
    <div className="App">
      {/* Load assets */}
      <div className="bg-ascent"></div>
      <div className="bg-bind"></div>
      <div className="bg-breeze"></div>
      <div className="bg-haven"></div>
      <div className="bg-icebox"></div>
      <div className="bg-split"></div>
      <div className="bg-fracture"></div>
      {/* (end) Load assets */}
      <Maps />
    </div>
  );
}

export default App;
