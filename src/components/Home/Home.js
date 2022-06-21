import PositionBar from './Positions'
import TechnologyBar from './Technologies'
import Offers from './Offers'

import './Home.css'

function Home() {
  return (
    <div className='Page-container'>
      <div className='Filters-bar'>
        <PositionBar />
        <TechnologyBar />
      </div>
      <Offers />
    </div>
  )
}

export default Home
