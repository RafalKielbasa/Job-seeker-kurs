import { useState } from 'react'

import Vector from 'src/components/Icons/VectorMini'
import { SORTBY } from 'src/utils/mocks'

import './Navi.css'

const SortBy = ({ sort, setSort }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChange = () => setIsOpen((prev) => !prev)

  const onClick = (name) => {
    setSort(name)
    setIsOpen(false)
  }

  const cutOptionName = (option) => {
    if (option.length >= 5) {
      const cutName = option.slice(0, 6) + '...'
      return cutName
    }
    return option
  }

  const VectorClassName = isOpen ? 'Vector-open' : 'Vector'

  return (
    <div>
      <div className='Sort-by' onClick={toggleChange}>
        Sort By:
        <div className='Option'>{cutOptionName(sort)}</div>
        <div className={VectorClassName}>
          <Vector />
        </div>
      </div>
      {isOpen && (
        <div className='Option-names'>
          {SORTBY.map((item) => (
            <div key={item} onClick={() => onClick(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SortBy
