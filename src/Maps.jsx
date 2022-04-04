import { useState } from 'react';
import Map from './Map';

const Maps = () => {
  const [mapNames] = useState([
    'ascent',
    'bind',
    'breeze',
    'haven',
    'icebox',
    'split',
    'fracture',
  ]);

  return (
    <div className="group grid grid-cols-1 md:grid-cols-2">
      {mapNames.map((mapName) => (
        <Map key={mapName} mapName={mapName} />
      ))}
      {mapNames.length % 2 !== 0 ? <div className='h-0 md:h-auto overflow-hidden'><Map mapName="filler" /></div> : null}
    </div>
  );
};

export default Maps;
