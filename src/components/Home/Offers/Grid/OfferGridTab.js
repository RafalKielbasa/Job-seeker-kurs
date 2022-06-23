import { useNavigate } from 'react-router-dom'

import { ReactIcon, LocationIcon, RemoteIcon } from 'src/components/Icons'

import '../Offers.css'
const OfferGridTab = ({ offer }) => {
  const {
    id,
    position,
    company,
    city,
    salaryMin,
    salaryMax,
    technology,
    remote,
    expLvl,
  } = offer
  const navigate = useNavigate()
  return (
    <div className={`Grid-offer-color-${technology}`}>
      <div className='Grid-offer-content'>
        <div className='Grid-remote'> {remote && <RemoteIcon />}</div>
        <div className='Grid-position'>
          <div className='Logo-grid'>
            <ReactIcon />
          </div>
          <div className='Grid-position-name'>
            <div className='Grid-title'>{position}</div>
            <div>{company}</div>
          </div>
        </div>
        <div className='Grid-salary'>{`${salaryMin} - ${salaryMax} PLN net 💰`}</div>
        <div className='Grid-offer-info'>
          <div>
            <LocationIcon />
            {city}
          </div>
          <div className='Divider' />
          <div>{expLvl}</div>
        </div>
        <div
          className='Grid-details-button'
          onClick={() => navigate(`/details/${id}`)}
        >
          Details
        </div>
      </div>
    </div>
  )
}

export default OfferGridTab
