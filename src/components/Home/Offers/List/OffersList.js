import OfferListItem from './OfferListItem'
import '../Offers.css'

const OffersList = ({ filteredOffers }) => {
  return (
    <div className='Offer-list'>
      {filteredOffers?.map((offer) => (
        <OfferListItem offer={offer} />
      ))}
    </div>
  )
}
export default OffersList
