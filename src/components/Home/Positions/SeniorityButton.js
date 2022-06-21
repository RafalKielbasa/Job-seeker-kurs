import { Button } from '@material-ui/core'

import { WrappedVector } from 'src/components/Icons'

import './Position.css'

const SeniorityButton = ({ title }) => {
  return (
    <div>
      <button className='Seniority-button'>
        <span>Seniority</span>
        <WrappedVector />
      </button>
    </div>
  )
}

export default SeniorityButton
