import styled from 'styled-components'

const GridLayoutIcon = ({ className }) => (
  <svg
    className={className}
    width='30'
    height='30'
    viewBox='0 0 30 30'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='0.5' y='0.5' width='29' height='29' rx='7.5' />
    <rect x='0.5' y='0.5' width='29' height='29' rx='7.5' strokeOpacity='0.2' />
    <rect x='7.5' y='7.5' width='6' height='6' rx='1.5' />
    <rect x='7.5' y='7.5' width='6' height='6' rx='1.5' strokeOpacity='0.2' />
    <rect x='7.5' y='16.5' width='6' height='6' rx='1.5' />
    <rect x='7.5' y='16.5' width='6' height='6' rx='1.5' strokeOpacity='0.2' />
    <rect x='16.5' y='7.5' width='6' height='6' rx='1.5' />
    <rect x='16.5' y='7.5' width='6' height='6' rx='1.5' strokeOpacity='0.2' />
    <rect x='16.5' y='16.5' width='6' height='6' rx='1.5' />
    <rect x='16.5' y='16.5' width='6' height='6' rx='1.5' strokeOpacity='0.2' />
  </svg>
)

const Styled = styled(GridLayoutIcon)`
  display: flex;
  stroke: ${({ theme }) => theme.universalColors.black};
  fill: none;
`
Styled.displayName = 'GridLayoutIcon'
export default Styled
