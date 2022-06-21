import styled from 'styled-components'

const MobilePhoneIcon = ({ className }) => {
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
        d='M93.3333 2.6665H34.6667C28.7756 2.6665 24 7.44213 24 13.3332V114.667C24 120.558 28.7756 125.333 34.6667 125.333H93.3333C99.2244 125.333 104 120.558 104 114.667V13.3332C104 7.44213 99.2244 2.6665 93.3333 2.6665Z'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M104 104H24'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M50.6666 13.3335H77.3333'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M64 112C64.2637 112 64.5215 112.078 64.7407 112.225C64.96 112.371 65.1309 112.579 65.2318 112.823C65.3327 113.067 65.3591 113.335 65.3077 113.593C65.2562 113.852 65.1292 114.09 64.9428 114.276C64.7563 114.463 64.5187 114.59 64.2601 114.641C64.0014 114.692 63.7334 114.666 63.4897 114.565C63.2461 114.464 63.0378 114.293 62.8913 114.074C62.7448 113.855 62.6666 113.597 62.6666 113.333C62.6666 112.98 62.8071 112.641 63.0571 112.391C63.3072 112.14 63.6463 112 64 112Z'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(MobilePhoneIcon)`
  display: flex;
  stroke: ${({ theme }) => theme.palette.icon.contrast};
`
Styled.displayName = 'MobilePhoneIcon'
export default Styled
