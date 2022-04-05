import { useState } from 'react';
import Map from './Map';

const Maps = () => {
  const [maps] = useState([
    {
      id: 0,
      name: 'Ascent',
      bgPos: 'top',
    },
    {
      id: 1,
      name: 'Bind',
      bgPos: 'top',
    },
    {
      id: 2,
      name: 'Breeze',
      bgPos: 'center',
    },
    {
      id: 3,
      name: 'Haven',
      bgPos: 'top',
    },
    {
      id: 4,
      name: 'Icebox',
      bgPos: 'center',
    },
    {
      id: 5,
      name: 'Split',
      bgPos: 'center',
    },
    {
      id: 6,
      name: 'Fracture',
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
