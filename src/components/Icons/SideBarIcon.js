import styled from 'styled-components'

const SideBarIcon = ({ className }) => {
  return (
    <svg
      width='41'
      height='768'
      viewBox='0 0 41 768'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M27.2201 99.03C27.2201 105.85 23.5801 112.15 17.6801 115.56L12.0001 118.84C-3.91994 128.03 -3.91994 151.01 12.0001 160.2L17.6801 163.48C23.5801 166.89 27.2201 173.19 27.2201 180.01L27.22 768H55.06L55.0601 -0.5H27.2201V99.03Z' />
    </svg>
  )
}

const Styled = styled(SideBarIcon)`
  fill: ${({ theme }) => theme.universalColors.blue};
`
Styled.displayName = 'SideBarIcon'
export default Styled
