import styled from 'styled-components'

const Filters = ({ className }) => {
  return (
    <svg
      width='22'
      height='22'
      viewBox='0 0 21 23'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M1.07171 4.37516H4.91171H4.98851C5.29571 5.68076 6.52451 6.67916 7.98371 6.67916C9.44291 6.67916 10.5949 5.68076 10.9789 4.37516H11.0557H19.5037C19.9645 4.37516 20.2717 4.06796 20.2717 3.60716C20.2717 3.14636 19.9645 2.83916 19.5037 2.83916H11.0557H10.9789C10.6717 1.53356 9.44291 0.535156 7.98371 0.535156C6.52451 0.535156 5.37251 1.53356 4.98851 2.83916H4.91171H1.07171C0.610911 2.83916 0.303711 3.14636 0.303711 3.60716C0.303711 4.06796 0.610911 4.37516 1.07171 4.37516ZM7.98371 2.07116C8.82851 2.07116 9.51971 2.76236 9.51971 3.60716C9.51971 4.45196 8.82851 5.14316 7.98371 5.14316C7.13891 5.14316 6.44771 4.45196 6.44771 3.60716C6.44771 2.76236 7.13891 2.07116 7.98371 2.07116Z'
        fill='#222426'
      />
      <path
        d='M1.07171 12.0548H10.2877H10.3645C10.6717 13.3604 11.9005 14.3588 13.3597 14.3588C14.8189 14.3588 15.9709 13.3604 16.3549 12.0548H16.4317H19.5037C19.9645 12.0548 20.2717 11.7476 20.2717 11.2868C20.2717 10.826 19.9645 10.5188 19.5037 10.5188H16.4317H16.3549C16.0477 9.21324 14.8189 8.21484 13.3597 8.21484C11.9005 8.21484 10.7485 9.21324 10.3645 10.5188H10.2877H1.07171C0.610911 10.5188 0.303711 10.826 0.303711 11.2868C0.303711 11.7476 0.610911 12.0548 1.07171 12.0548ZM13.3597 9.75084C14.2045 9.75084 14.8957 10.442 14.8957 11.2868C14.8957 12.1316 14.2045 12.8228 13.3597 12.8228C12.5149 12.8228 11.8237 12.1316 11.8237 11.2868C11.8237 10.442 12.5149 9.75084 13.3597 9.75084Z'
        fill='#222426'
      />
      <path
        d='M1.07171 19.7345H4.91171H4.98851C5.29571 21.0401 6.52451 22.0385 7.98371 22.0385C9.44291 22.0385 10.5949 21.0401 10.9789 19.7345H11.0557H19.5037C19.9645 19.7345 20.2717 19.4273 20.2717 18.9665C20.2717 18.5057 19.9645 18.1985 19.5037 18.1985H11.0557H10.9789C10.6717 16.8929 9.44291 15.8945 7.98371 15.8945C6.52451 15.8945 5.37251 16.8929 4.98851 18.1985H4.91171H1.07171C0.610911 18.1985 0.303711 18.5057 0.303711 18.9665C0.303711 19.4273 0.610911 19.7345 1.07171 19.7345ZM7.98371 17.4305C8.82851 17.4305 9.51971 18.1217 9.51971 18.9665C9.51971 19.8113 8.82851 20.5025 7.98371 20.5025C7.13891 20.5025 6.44771 19.8113 6.44771 18.9665C6.44771 18.1217 7.13891 17.4305 7.98371 17.4305Z'
        fill='#222426'
      />
    </svg>
  )
}

const Styled = styled(Filters)`
  stroke: ${({ theme }) => theme.palette.icon.dark};
`
Styled.displayName = 'Filters'
export default Styled