import OfferListItem from './OfferListItem'
import './Offers.css'

const OfferList = ({ filteredOffers }) => {
  return (
    <div className='Offer-list'>
      {filteredOffers?.map((offer) => (
        <OfferListItem offer={offer} />
      ))}
    </div>
  )
}
export default OfferList
