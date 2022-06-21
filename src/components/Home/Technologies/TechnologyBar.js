import { TECHNOLOGIES } from '../mocks'

import TechnologyTab from './TechnologyTab'
import './Technologies.css'

const TechnologyBar = () => {
  return (
    <div className='Technology-bar'>
      <div>Clear all</div>
      {TECHNOLOGIES.map((techName) => (
        <TechnologyTab positionName={techName} />
      ))}
    </div>
  )
}

export default TechnologyBar
