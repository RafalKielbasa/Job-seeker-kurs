import styled from 'styled-components'

const Vector = ({ className }) => {
  return (
    <svg
      width='12'
      height='19'
      viewBox='0 0 12 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M1 17.6667L10.8681 9.60435C10.9095 9.57035 10.9428 9.52862 10.9655 9.4819C10.9882 9.43519 11 9.38455 11 9.33333C11 9.28211 10.9882 9.23147 10.9655 9.18476C10.9428 9.13804 10.9095 9.09631 10.8681 9.06232L1 1'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(Vector)`
  display: flex;
  stroke: ${({ theme }) => theme.palette.icon.dark};
`
Styled.displayName = 'Vector'
export default Styled
