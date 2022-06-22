import { JOBOFFERS } from 'src/utils/mocks'

import OfferTab from './OfferTab'
import './Offers.css'

const OfferList = () => {
  return (
    <div className='Offer-list'>
      {JOBOFFERS.map((offer) => (
        <OfferTab offer={offer} />
      ))}
    </div>
  )
}
export default OfferList
