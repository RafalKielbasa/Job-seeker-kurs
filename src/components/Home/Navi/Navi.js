import SortBy from './SortBy'
import './Navi.css'

const Navi = ({ sort, setSort }) => {
  return (
    <div className='Navi'>
      <SortBy sort={sort} setSort={setSort} />
    </div>
  )
}

export default Navi
