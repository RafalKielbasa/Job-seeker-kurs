import styled from 'styled-components'

const OfferIcon = ({ className }) => {
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
        d='M5.5 17H3.5C3.23478 17 2.98043 16.8946 2.79289 16.7071C2.60536 16.5196 2.5 16.2652 2.5 16V2C2.5 1.73478 2.60536 1.48043 2.79289 1.29289C2.98043 1.10536 3.23478 1 3.5 1H14.5C14.7652 1 15.0196 1.10536 15.2071 1.29289C15.3946 1.48043 15.5 1.73478 15.5 2V4'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.5 20H6.5C6.23478 20 5.98043 19.8946 5.79289 19.7071C5.60536 19.5196 5.5 19.2652 5.5 19V5C5.5 4.73478 5.60536 4.48043 5.79289 4.29289C5.98043 4.10536 6.23478 4 6.5 4H17.5C17.7652 4 18.0196 4.10536 18.2071 4.29289C18.3946 4.48043 18.5 4.73478 18.5 5V7'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M20.5 7H9.5C8.94772 7 8.5 7.44772 8.5 8V22C8.5 22.5523 8.94772 23 9.5 23H20.5C21.0523 23 21.5 22.5523 21.5 22V8C21.5 7.44772 21.0523 7 20.5 7Z'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.5 11L10.866 11.732C10.9002 11.8008 10.9504 11.8604 11.0122 11.906C11.0741 11.9515 11.1459 11.9817 11.2217 11.994C11.2975 12.0063 11.3752 12.0004 11.4483 11.9768C11.5214 11.9531 11.5878 11.9124 11.642 11.858L13.5 10'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.5 11H19.5'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.5 16L10.866 16.732C10.9002 16.8008 10.9504 16.8604 11.0122 16.906C11.0741 16.9515 11.1459 16.9817 11.2217 16.994C11.2975 17.0063 11.3752 17.0004 11.4483 16.9768C11.5214 16.9531 11.5878 16.9124 11.642 16.858L13.5 15'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.5 16H19.5'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.5 19H17.5'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(OfferIcon)``
Styled.displayName = 'OfferIcon'
export default Styled
