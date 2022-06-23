import OfferGridTab from './OfferGridTab'
import '../Offers.css'

const OffersGrid = ({ filteredOffers }) => {
  return (
    <div className='Grid-offers-container'>
      <div className='Offers-grid'>
        {filteredOffers?.map((offer) => (
          <OfferGridTab offer={offer} />
        ))}
      </div>
    </div>
  )
}
export default OffersGrid
