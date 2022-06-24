import PositionBar from './Positions'
import TechnologyBar from './Technologies'
import OfferList from './Offers/List'
import OffersGrid from './Offers/Grid/OffersGrid'
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
    isListView,
    setIsListView,
    isPriceRange,
    setIsPriceRange,
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
          isPriceRange={isPriceRange}
          setIsPriceRange={setIsPriceRange}
        />
      </div>
      <Navi
        sort={sort}
        setSort={setSort}
        setIsListView={setIsListView}
        isListView={isListView}
      />
      {isListView ? (
        <OfferList filteredOffers={filteredOffers} />
      ) : (
        <OffersGrid filteredOffers={filteredOffers} />
      )}
    </div>
  )
}

export default Home
