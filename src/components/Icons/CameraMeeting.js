import styled from 'styled-components'

const CameraMeeting = ({ className }) => {
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
        d='M16.8462 19H3V5H16.8462V10.4444L23 6.55556V17.4444L16.8462 13.5556V19Z'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(CameraMeeting)`
  stroke: ${({ theme }) => theme.palette.icon.contrast};
`
Styled.displayName = 'CameraMeeting'
export default Styled
