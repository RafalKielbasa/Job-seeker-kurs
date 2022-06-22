import { WrappedVector, Share, ReactIcon } from 'src/components/Icons'
import { JOBOFFERS } from 'src/utils/mocks'

import './Details.css'

const Details = () => {
  const {
    position,
    company,
    city,
    salaryMin,
    salaryMax,
    technology,
    remote,
    expLvl,
    positionName,
  } = JOBOFFERS[0]
  return (
    <div className='Page'>
      <div className='Content'>
        <div className='Nav-bar'>
          <div className='Back'>
            <WrappedVector />
            Back to the offers
          </div>
          <div className='Apply'>
            <div className='Icon-wrap'>
              <Share />
            </div>
            <div>Apply now</div>
          </div>
        </div>
        <div className='Offer-information'>
          <ReactIcon />
          <div className='Offer-info-tab'>
            <div>
              <div>{position}</div>
              {remote && <div className='Tab1'>100% remote</div>}
              <div className='Tab2'>{technology}</div>
            </div>
            <div>
              {`${salaryMin} - ${salaryMax} PLN net `}
              <span>/ gross per month</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Details
