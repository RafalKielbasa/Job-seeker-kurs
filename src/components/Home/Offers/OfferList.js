import OfferTab from './OfferTab'
import './Offers.css'

const OfferList = ({ filteredOffers }) => {
  return (
    <div className='Offer-list'>
      {filteredOffers?.map((offer) => (
        <OfferTab offer={offer} />
      ))}
    </div>
  )
}
export default OfferList
