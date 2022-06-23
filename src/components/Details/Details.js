import { useNavigate, useLocation } from 'react-router-dom'

import {
  WrappedVector,
  Share,
  ReactIcon,
  LocationIcon,
  CameraMeeting,
  Buildings,
} from 'src/components/Icons'
import { JOBOFFERS, USERINFO, COMPANYINFO, CONDITIONS } from 'src/utils/mocks'
import { getIconOnFly } from 'src/utils/icons'

import ApplyJobForm from './ApplyJobForm'
import './Details.css'

const Details = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const locationLength = location.pathname.length

  const offferId = location.pathname.slice(locationLength - 1)

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
    years,
    additionalTech,
  } = JOBOFFERS[offferId]

  const Icon = getIconOnFly(positionName)

  return (
    <div className='Page'>
      <div className='Content'>
        <div className='Nav-bar'>
          <div className='Back' onClick={() => navigate('/')}>
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
            <div>
              <div>{company}</div>
              <div className='Divider' />
              <div>
                <LocationIcon />
                {city}
              </div>
              <div className='Divider' />
              <div>{expLvl}</div>
            </div>
          </div>
        </div>
        <div className='Tabs-container'>
          <div className='Information-tab'>
            <div className='Round-wrapper'>
              <Icon />
            </div>
            <span>Main technology</span>
            <span>{technology}</span>
          </div>
          <div className='Information-tab'>
            <div className='Round-wrapper'>{`${years} yr.`}</div>
            <span>Work level</span>
            <span>{expLvl}</span>
          </div>
          <div className='Information-tab'>
            <div className='Round-wrapper'>
              <CameraMeeting />
            </div>
            <span>Interview type</span>
            <span>Online interview</span>
          </div>
          <div className='Information-tab'>
            <div className='Round-wrapper'>
              <Buildings />
            </div>
            <span>Company size</span>
            <span>50-100</span>
          </div>
        </div>
        <div className='Grid-container'>
          <div className='Top-left'>
            Required technologies
            <div className='Tab2'>{technology}</div>
          </div>
          <div className='Top-right'>
            Additional technologies
            <div className='Tab2'>{additionalTech}</div>
          </div>
          <div className='Bottom-left'>
            <div>
              <span>Start: </span>ASAP
            </div>
            <div>
              <span>Type of contract: </span>B2B
            </div>
            <div>
              <span>Company type: </span>other
            </div>
          </div>
          <div className='Bottom-right'>
            Availability
            <div>Full time</div>
          </div>
        </div>
        <div className='More-info'>
          <div>{COMPANYINFO}</div>
          {USERINFO.map(({ title, content }) => (
            <div className='Info-title'>
              <div>{title}</div>
              {content.map((item) => (
                <div className='Info-line'>
                  <div className='Orange-dot' />
                  <div>{item}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className='Conditions'>{CONDITIONS}</div>
        <ApplyJobForm />
      </div>
    </div>
  )
}
export default Details
