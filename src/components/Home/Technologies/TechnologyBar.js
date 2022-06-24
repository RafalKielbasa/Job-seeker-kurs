import { TECHNOLOGIES } from 'src/utils/mocks'

import TechnologyTab from './TechnologyTab'
import './Technologies.css'

const TechnologyBar = ({
  technologiesArray,
  setTechnologiesArray,
  isRemote,
  setIsRemote,
  isPriceRange,
  setIsPriceRange,
}) => {
  console.log(isPriceRange)
  const stateButtonName =
    technologiesArray.length === 0 ? 'Select all' : 'Clear all'

  const remoteClassName = isRemote ? 'Remote-active' : 'Remote'

  const priceRangeClassName = isPriceRange
    ? 'Price-range-active'
    : 'Price-range'

  const toggleChange = (func) => func((prev) => !prev)

  const handleStateButtonCLick = () =>
    technologiesArray.length === 0
      ? setTechnologiesArray(TECHNOLOGIES)
      : setTechnologiesArray([])

  const handleTechnologyCLick = (techName) => {
    if (technologiesArray.includes(techName)) {
      const filteredArray = technologiesArray.filter(
        (item) => item !== techName
      )
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
        <div
          className={remoteClassName}
          onClick={() => toggleChange(setIsRemote)}
        >
          100% remote
        </div>
        <div
          className={priceRangeClassName}
          onClick={() => toggleChange(setIsPriceRange)}
        >
          Price range
        </div>
      </div>
    </div>
  )
}

export default TechnologyBar
