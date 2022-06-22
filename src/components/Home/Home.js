import PositionBar from './Positions'
import TechnologyBar from './Technologies'
import OfferList from './Offers'
import Navi from './Navi'
import Logic from './useHomeLogic'

import './Home.css'

function Home() {
  const {
    selectedPosition,
    setSelectedPosition,
    technologiesArray,
    setTechnologiesArray,
    seniority,
    setSeniority,
    sort,
    setSort,
    filteredOffers,
    isRemote,
    setIsRemote,
  } = Logic()
  return (
    <div className='Page-container'>
      <div className='Filters-bar'>
        <PositionBar
          selectedPosition={selectedPosition}
          setSelectedPosition={setSelectedPosition}
          seniority={seniority}
          setSeniority={setSeniority}
        />
        <TechnologyBar
          technologiesArray={technologiesArray}
          setTechnologiesArray={setTechnologiesArray}
          isRemote={isRemote}
          setIsRemote={setIsRemote}
        />
      </div>
      <Navi sort={sort} setSort={setSort} />
      <OfferList filteredOffers={filteredOffers} />
    </div>
  )
}

export default Home
