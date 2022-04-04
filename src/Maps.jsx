import { useState } from 'react';
import Map from './Map';

const Maps = () => {
  const [maps] = useState([
    {
      id: 0,
      name: 'ascent',
      bgPos: 'top',
    },
    {
      id: 1,
      name: 'bind',
      bgPos: 'center',
    },
    {
      id: 2,
      name: 'breeze',
      bgPos: 'center',
    },
    {
      id: 3,
      name: 'haven',
      bgPos: 'center',
    },
    {
      id: 4,
      name: 'icebox',
      bgPos: 'center',
    },
    {
      id: 5,
      name: 'split',
      bgPos: 'center',
    },
    {
      id: 6,
      name: 'fracture',
      bgPos: 'center',
    },
  ]);

  return (
    <div className="group grid grid-cols-1 md:grid-cols-2">
      {maps.map(map => (
        <Map key={map.id} mapName={map.name} bgPos={map.bgPos} />
      ))}
      {maps.length % 2 !== 0 ? <div className='h-0 md:h-auto overflow-hidden'><Map mapName="filler" /></div> : null}
    </div>
  );
};

export default Maps;
