import styled from 'styled-components'

const CalendarIconEmpty = ({ className }) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_6402:1613)'>
        <path
          d='M18.7503 2.08594H1.25033C0.790088 2.08594 0.416992 2.45903 0.416992 2.91927V18.7526C0.416992 19.2128 0.790088 19.5859 1.25033 19.5859H18.7503C19.2106 19.5859 19.5837 19.2128 19.5837 18.7526V2.91927C19.5837 2.45903 19.2106 2.08594 18.7503 2.08594Z'
          stroke='#222426'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M4.58301 0.417969V4.58464'
          stroke='#222426'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M15.417 0.417969V4.58464'
          stroke='#222426'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M0.416992 6.25H19.5837'
          stroke='#222426'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_6402:1613'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

const Styled = styled(CalendarIconEmpty)`
  stroke: ${({ theme }) => theme.universalColors.white};
`
Styled.displayName = 'CalendarIconEmpty'
export default Styled
