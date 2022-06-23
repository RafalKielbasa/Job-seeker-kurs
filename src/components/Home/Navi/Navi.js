import { GridLayoutIcon, ListIcon } from 'src/components/Icons'

import SortBy from './SortBy'
import './Navi.css'

const Navi = ({ sort, setSort, setIsListView, isListView }) => {
  const activeListClassName = isListView ? 'Active-list-layout' : 'List-layout'

  const activeGridClassName = !isListView ? 'Active-grid-layout' : 'Grid-layout'

  return (
    <div className='Navi'>
      <SortBy sort={sort} setSort={setSort} />
      <div className={activeListClassName} onClick={() => setIsListView(true)}>
        <ListIcon />
      </div>
      <div className={activeGridClassName} onClick={() => setIsListView(false)}>
        <GridLayoutIcon />
      </div>
    </div>
  )
}

export default Navi
