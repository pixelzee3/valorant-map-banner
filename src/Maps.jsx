import Map from './Map';

const Maps = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Map mapName="ascent" />
      <Map mapName="bind" />
      <Map mapName="breeze" />
      <Map mapName="haven" />
      <Map mapName="icebox" />
      <Map mapName="split" />
      <Map mapName="fracture" />
    </div>
    );
};

export default Maps;
