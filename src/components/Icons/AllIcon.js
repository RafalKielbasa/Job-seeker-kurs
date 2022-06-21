import styled from 'styled-components'

const AllIcon = ({ className }) => {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M71.9872 29H93.8013V99H71.9872V29ZM77.4958 34.5205V93.4795H88.2927V34.5205H77.4958ZM99.1859 29H121V99H99.1859V29ZM104.695 34.5205V93.4795H115.491V34.5205H104.695ZM22.4096 31.6498H47.0603L68.4699 99H43.6361L41.5208 91.0505H27.9491L25.8338 99H1L22.4096 31.6498ZM26.4361 37.1703L8.53626 93.4795H21.6017L23.717 85.53H45.7529L47.8682 93.4795H60.9336L43.0338 37.1703H26.4361ZM34.7349 44.5694L43.4427 76.918H26.0272L34.7349 44.5694ZM33.2187 71.3975H36.2512L34.7349 65.7649L33.2187 71.3975Z'
      />
    </svg>
  )
}

const Styled = styled(AllIcon)`
  display: flex;
  fill: ${({ theme }) => theme.palette.icon.contrast};
`
Styled.displayName = 'AllIcon'
export default Styled
