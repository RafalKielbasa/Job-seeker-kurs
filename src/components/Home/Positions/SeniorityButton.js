import { useState } from 'react'

import { WrappedVector } from 'src/components/Icons'
import { SENIORITY } from 'src/utils/mocks'

import './Position.css'

const SeniorityButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleButton = () => setIsOpen((prev) => !prev)

  const BtnClassName = isOpen ? 'Seniority-button-open' : 'Seniority-button'

  return (
    <div className='Seniority-container'>
      <div className={BtnClassName} onClick={toggleButton}>
        <span>Seniority</span>
        <WrappedVector />
      </div>
      {isOpen && (
        <div className='Seniority-options'>
          {SENIORITY.map((item) => (
            <button className='Seniority-opion'>{item}</button>
          ))}
        </div>
      )}
    </div>
  )
}

export default SeniorityButton
