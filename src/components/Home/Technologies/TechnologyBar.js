import { useState } from 'react'

import { TECHNOLOGIES } from 'src/utils/mocks'

import TechnologyTab from './TechnologyTab'
import './Technologies.css'

const TechnologyBar = () => {
  const [technologiesArray, setTechnologiesArray] = useState([])

  const stateButtonName =
    technologiesArray.length === 0 ? 'Add all' : 'Clear all'

  const handleStateButtonCLick = () =>
    technologiesArray.length === 0
      ? setTechnologiesArray(TECHNOLOGIES)
      : setTechnologiesArray([])

  const handleTechnologyCLick = (techName) => {
    if (technologiesArray.includes(techName)) {
      const filteredArray = technologiesArray.filter((item) => item != techName)
      return setTechnologiesArray(filteredArray)
    }
    setTechnologiesArray([...technologiesArray, techName])
  }

  return (
    <div className='Technology-bar'>
      <div className='Technology-wrapper'>
        <div className='State-button' onClick={handleStateButtonCLick}>
          {stateButtonName}
        </div>
        {TECHNOLOGIES.map((techName) => (
          <TechnologyTab
            key={techName}
            techName={techName}
            onClick={() => handleTechnologyCLick(techName)}
            technologiesArray={technologiesArray}
          />
        ))}
      </div>
      <div className='Additional-filters'>
        <div className='Remote'>100% remote</div>
        <div className='Price'> Price range </div>
      </div>
    </div>
  )
}

export default TechnologyBar
