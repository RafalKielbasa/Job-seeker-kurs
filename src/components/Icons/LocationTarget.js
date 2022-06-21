import styled from 'styled-components'

const LocationTargetIcon = ({ className }) => {
  return (
    <svg
      width='30'
      height='30'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 1V4'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 20V23'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M23 12H20'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4 12H1'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(LocationTargetIcon)`
  stroke: ${({ theme }) => theme.palette.icon.contrast};
`
Styled.displayName = 'LocationTargetIcon'
export default Styled
