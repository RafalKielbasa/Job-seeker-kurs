import { useState } from 'react'

import { WrappedVector } from 'src/components/Icons'
import { SENIORITY } from 'src/utils/mocks'

import './Position.css'

const SeniorityButton = ({ seniority, setSeniority }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChange = () => setIsOpen((prev) => !prev)

  const seniorityChange = (seniorityName) =>
    seniorityName === seniority ? setSeniority('') : setSeniority(seniorityName)

  const BtnClassName = isOpen ? 'Seniority-button-open' : 'Seniority-button'

  const SeniorityLevel = seniority.length === 0 ? 'Seniority' : seniority

  return (
    <div className='Seniority-container'>
      <div className={BtnClassName} onClick={toggleChange}>
        <span>{SeniorityLevel}</span>
        <WrappedVector />
      </div>
      {isOpen && (
        <div className='Seniority-options'>
          {SENIORITY.map((item) => {
            const SeniorityOptionClassName =
              item === seniority
                ? 'Seniority-option-active'
                : 'Seniority-option'
            return (
              <button
                className={SeniorityOptionClassName}
                key={item}
                onClick={() => seniorityChange(item)}
              >
                {item}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default SeniorityButton
