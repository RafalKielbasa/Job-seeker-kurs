import PositionBar from './Positions'
import TechnologyBar from './Technologies'

import './Home.css'

function Home() {
  return (
    <div className='Page-container'>
      <div className='Filters-bar'>
        <PositionBar />
        <TechnologyBar />
      </div>
    </div>
  )
}

export default Home
