import styled from 'styled-components'

const MapBoxMarker = ({ className }) => (
  <svg
    width='27'
    height='41'
    viewBox='0 0 32 32'
    fill='none'
    className={className}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fill='rgb(70, 104, 242)'
      d='M 27 13.5 C 27 19.07 20.25 27 14.75 34.5 C 14.02 35.5 12.98 35.5 12.25 34.5 C 6.75 27 0 19.22 0 13.5 C 0 6.04 6.04 0 13.5 0 C 20.96 0 27 6.04 27 13.5 Z'
    />
    <path
      opacity='0.25'
      d='M 13.5 0 C 6.04 0 0 6.04 0 13.5 C 0 19.22 6.75 27 12.25 34.5 C 13 35.52 14.02 35.5 14.75 34.5 C 20.25 27 27 19.07 27 13.5 C 27 6.04 20.96 0 13.5 0 Z M 13.5 1 C 20.42 1 26 6.58 26 13.5 C 26 15.9 24.5 19.18 22.22 22.74 C 19.95 26.3 16.71 30.14 13.94 33.91 C 13.74 34.18 13.61 34.32 13.5 34.44 C 13.39 34.32 13.26 34.18 13.06 33.91 C 10.28 30.13 7.41 26.31 5.02 22.77 C 2.62 19.23 1 15.95 1 13.5 C 1 6.58 6.58 1 13.5 1 Z'
    />
  </svg>
)

const Styled = styled(MapBoxMarker)`
  stroke: ${({ theme }) => theme.palette.text.default};
`
Styled.displayName = 'MapBoxMarker'
export default Styled
