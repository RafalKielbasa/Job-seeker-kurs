import { ReactIcon, LocationIcon, RemoteIcon } from 'src/components/Icons'

import './Offers.css'
const OfferTab = ({ offer }) => {
  const {
    position,
    company,
    city,
    salaryMin,
    salaryMax,
    technology,
    remote,
    expLvl,
  } = offer

  return (
    <div className={`Offer-color-${technology}`}>
      <div className='Offer-content'>
        <div className='Logo'>
          <ReactIcon />
        </div>
        <div className='Offer-info'>
          <div className='Left-side-info'>
            <div className='Title'>
              {position}
              {remote && <RemoteIcon />}
            </div>
            <div className='Location'>
              <div>{company}</div>
              <div className='Divider'></div>
              <div>
                <LocationIcon />
                {city}
              </div>
              <div className='Divider'></div>
              <div>{expLvl}</div>
            </div>
          </div>
          <div className='Right-site-info'>
            <div className='Salary'>{`${salaryMin} - ${salaryMax} PLN net 💰`}</div>
            <div className='Technology'>{technology}</div>
          </div>
        </div>
        <div className='Details-button'>Details</div>
      </div>
    </div>
  )
}

export default OfferTab
