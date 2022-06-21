import styled from 'styled-components'

const CalendarIcon = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
    >
      <path
        d='M21.5 3.50098H1.5C0.947715 3.50098 0.5 3.94869 0.5 4.50098V22.501C0.5 23.0533 0.947715 23.501 1.5 23.501H21.5C22.0523 23.501 22.5 23.0533 22.5 22.501V4.50098C22.5 3.94869 22.0523 3.50098 21.5 3.50098Z'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.5 1.50098V4.50098'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.5 1.50098V4.50098'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.5 1.50098V4.50098'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.5 1.50098V4.50098'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.5 1.50098V4.50098'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.5 8.5H15.5V12.5H11.5V9.5C11.5 9.23478 11.6054 8.98043 11.7929 8.79289C11.9804 8.60536 12.2348 8.5 12.5 8.5V8.5Z'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.5 8.5H18.5C18.7652 8.5 19.0196 8.60536 19.2071 8.79289C19.3946 8.98043 19.5 9.23478 19.5 9.5V12.5H15.5V8.5Z'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.5 12.501H11.5V16.501H15.5V12.501Z'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19.5 12.501H15.5V16.501H19.5V12.501Z'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.5 16.501H11.5V20.501H15.5V16.501Z'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.5 16.5H19.5V19.5C19.5 19.7652 19.3946 20.0196 19.2071 20.2071C19.0196 20.3946 18.7652 20.5 18.5 20.5H15.5V16.5Z'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.5 12.5H7.5V16.5H3.5V13.5C3.5 13.2348 3.60536 12.9804 3.79289 12.7929C3.98043 12.6054 4.23478 12.5 4.5 12.5Z'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.5 12.501H7.5V16.501H11.5V12.501Z'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.5 16.5H7.5V20.5H4.5C4.23478 20.5 3.98043 20.3946 3.79289 20.2071C3.60536 20.0196 3.5 19.7652 3.5 19.5V16.5Z'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.5 16.501H7.5V20.501H11.5V16.501Z'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(CalendarIcon)`
  stroke: ${({ theme }) => theme.universalColors.white};
`
Styled.displayName = 'CalendarIcon'
export default Styled
