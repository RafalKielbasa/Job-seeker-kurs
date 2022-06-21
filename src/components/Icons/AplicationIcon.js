import styled from 'styled-components'

const AplicationIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.5 12.5C15.2348 12.5 14.9804 12.6054 14.7929 12.7929C14.6054 12.9804 14.5 13.2348 14.5 13.5V19.5H3.5C3.23478 19.5 2.98043 19.3946 2.79289 19.2071C2.60536 19.0196 2.5 18.7652 2.5 18.5V1.5C2.5 1.23478 2.60536 0.98043 2.79289 0.792893C2.98043 0.605357 3.23478 0.5 3.5 0.5H20.5C20.7652 0.5 21.0196 0.605357 21.2071 0.792893C21.3946 0.98043 21.5 1.23478 21.5 1.5V12.5H15.5Z'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21.5 12.5L14.5 19.5'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3 21.5H19.5'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3 23.5H19.5'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(AplicationIcon)``
Styled.displayName = 'AplicationIcon'
export default Styled
