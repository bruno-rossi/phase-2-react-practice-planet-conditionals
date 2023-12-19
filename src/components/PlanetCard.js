import React, { useState } from 'react'
import PlanetFacts from "./PlanetFacts"

function PlanetCard({planet}) {

  const [ isToggled, setToggle ] = useState(false);

  function handleToggle() {
    setToggle(prevValue => !isToggled);
    console.log(isToggled);
  }

  const isPlanetClass = planet.is_planet ? null : "not-planet";

  return (
    <div className="card" onClick={() => handleToggle()}>
      <h2>{planet.name}</h2>
      { isToggled ? <PlanetFacts planet={planet} /> : <img className={isPlanetClass} src={planet.image} alt={planet.name} /> }
    </div>
  )
}

export default PlanetCard
