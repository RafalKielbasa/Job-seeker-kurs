import { getIconOnFly } from 'src/utils/icons'

import './Position.css'

const PositionTab = ({ positionName, onClick, selectedPosition }) => {
  const Icon = getIconOnFly(positionName)

  const className =
    selectedPosition === positionName ? positionName : 'Position-tab'

  return (
    <div className={`Color-${positionName}`}>
      <div className={className} onClick={onClick}>
        <div className='Position-box'>
          <Icon />
          <span>{positionName}</span>
        </div>
      </div>
    </div>
  )
}

export default PositionTab
