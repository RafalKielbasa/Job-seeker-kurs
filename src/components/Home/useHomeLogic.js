import { useEffect } from 'react'
import { useState } from 'react'

import { SORTBY, JOBOFFERS } from 'src/utils/mocks'

export default function useHomeLogic() {
  const [selectedPosition, setSelectedPosition] = useState('')
  const [technologiesArray, setTechnologiesArray] = useState([])
  const [seniority, setSeniority] = useState('')
  const [sort, setSort] = useState(SORTBY[0])
  const [filteredOffers, setFilteredOffers] = useState([])
  const [isListView, setIsListView] = useState(true)
  const [isRemote, setIsRemote] = useState(false)

  const positionLength = selectedPosition.length
  const technologyLength = technologiesArray.length
  const seniorityLength = seniority.length

  useEffect(() => {
    const offerDeepCopy = JSON.parse(JSON.stringify(JOBOFFERS))
    const offersSort = offerDeepCopy.sort(
      ({ salaryMin: prev }, { salaryMin: next }) =>
        sort === SORTBY[0] ? prev - next : next - prev
    )
    setFilteredOffers(offersSort)

    const offersFilter = () => {
      const firstFilter =
        positionLength !== 0
          ? offersSort?.filter(
              ({ positionName }) => positionName === selectedPosition
            )
          : offersSort
      const secondFilter =
        technologyLength !== 0
          ? firstFilter?.filter(({ technology }) =>
              technologiesArray.includes(technology)
            )
          : firstFilter
      const thirdFilter =
        seniorityLength !== 0
          ? secondFilter?.filter(({ expLvl }) => expLvl === seniority)
          : secondFilter
      const lastFilter = isRemote
        ? thirdFilter?.filter(({ remote }) => remote)
        : thirdFilter

      return lastFilter
    }

    setFilteredOffers(offersFilter)
  }, [sort, selectedPosition, technologiesArray, seniority, isRemote])

  return {
    selectedPosition,
    setSelectedPosition,
    technologiesArray,
    setTechnologiesArray,
    seniority,
    setSeniority,
    sort,
    setSort,
    filteredOffers,
    isRemote,
    setIsRemote,
    isListView,
    setIsListView,
  }
}
