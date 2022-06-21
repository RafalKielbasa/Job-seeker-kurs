import { getIconOnFly } from 'src/utils/icons'

import './Technologies.css'

const TechnologyTab = ({ positionName }) => {
  const Icon = getIconOnFly(positionName)
  return (
    <div className='Technology-tab'>
      <div className='Icon-wrapper'>
        <Icon />
      </div>
      <span>{positionName}</span>
    </div>
  )
}

export default TechnologyTab
