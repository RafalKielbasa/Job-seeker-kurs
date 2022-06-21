import { getIconOnFly } from 'src/utils/icons'

import './Technologies.css'

const TechnologyTab = ({ techName, onClick, technologiesArray }) => {
  const Icon = getIconOnFly(techName)

  const className = technologiesArray.includes(techName)
    ? techName
    : 'Icon-wrapper'

  return (
    <div className='Technology-tab' onClick={onClick}>
      <div className={className}>
        <Icon />
      </div>
      <span>{techName}</span>
    </div>
  )
}

export default TechnologyTab
