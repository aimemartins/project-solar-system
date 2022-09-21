import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map(({ image, name }, index) => (
          <PlanetCard key={ index } planetImage={ image } planetName={ name } />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
