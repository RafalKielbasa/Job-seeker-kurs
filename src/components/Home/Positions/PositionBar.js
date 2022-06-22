import { POSITIONS } from 'src/utils/mocks'

import PositionTab from './PositionTab'
import SeniorityButton from './SeniorityButton'
import './Position.css'

const PositionBar = ({
  selectedPosition,
  setSelectedPosition,
  seniority,
  setSeniority,
}) => {
  const handlePositionClick = (name) =>
    name === selectedPosition
      ? setSelectedPosition('')
      : setSelectedPosition(name)

  return (
    <div className='Position-bar'>
      <div className='Position-tabs'>
        {POSITIONS.map((positionName) => (
          <PositionTab
            key={positionName}
            positionName={positionName}
            onClick={() => handlePositionClick(positionName)}
            selectedPosition={selectedPosition}
          />
        ))}
      </div>
      <SeniorityButton seniority={seniority} setSeniority={setSeniority} />
    </div>
  )
}
export default PositionBar
