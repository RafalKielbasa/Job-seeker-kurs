import styled from 'styled-components'

const Vector = ({ className }) => {
  return (
    <svg
      className={className}
      width='18'
      height='12'
      viewBox='0 0 18 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.66671 0.999999L8.72903 10.8681C8.76302 10.9095 8.80475 10.9428 8.85147 10.9655C8.89818 10.9882 8.94882 11 9.00004 11C9.05126 11 9.1019 10.9882 9.14861 10.9655C9.19533 10.9428 9.23706 10.9095 9.27106 10.8681L17.3334 1'
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
