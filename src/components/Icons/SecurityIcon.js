import styled from 'styled-components'

const SecurityIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width='128'
      height='128'
      viewBox='0 0 128 128'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M104 50.6772H24C21.0544 50.6772 18.6666 53.0651 18.6666 56.0106V120.011C18.6666 122.956 21.0544 125.344 24 125.344H104C106.945 125.344 109.333 122.956 109.333 120.011V56.0106C109.333 53.0651 106.945 50.6772 104 50.6772Z'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M34.6666 31.9998C34.6666 24.2202 37.7571 16.7591 43.2582 11.258C48.7592 5.75697 56.2203 2.6665 64 2.6665C71.7796 2.6665 79.2407 5.75697 84.7418 11.258C90.2428 16.7591 93.3333 24.2202 93.3333 31.9998V50.6665H34.6666V31.9998Z'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M82.181 89.9904C77.2948 85.2912 70.7789 82.6665 63.9997 82.6665C57.2205 82.6665 50.7046 85.2912 45.8184 89.9904'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M93.0882 78.4008C85.2693 70.8834 74.844 66.6846 63.9975 66.6846C53.1511 66.6846 42.7257 70.8834 34.9069 78.4008'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M64 109.344C66.9455 109.344 69.3333 106.956 69.3333 104.011C69.3333 101.065 66.9455 98.6772 64 98.6772C61.0544 98.6772 58.6666 101.065 58.6666 104.011C58.6666 106.956 61.0544 109.344 64 109.344Z'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(SecurityIcon)`
  display: flex;
  stroke: ${({ theme }) => theme.palette.icon.contrast};
`
Styled.displayName = 'SecurityIcon'
export default Styled
