import styled from 'styled-components'

const DetailsIcon = ({ className }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M18.5 19V22.5C18.5 22.7652 18.3946 23.0196 18.2071 23.2071C18.0196 23.3946 17.7652 23.5 17.5 23.5H1.5C1.23478 23.5 0.98043 23.3946 0.792893 23.2071C0.605357 23.0196 0.5 22.7652 0.5 22.5V4.5C0.5 4.23478 0.605357 3.98043 0.792893 3.79289C0.98043 3.60536 1.23478 3.5 1.5 3.5H4.5'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14.5 3.5H17.5C17.7652 3.5 18.0196 3.60536 18.2071 3.79289C18.3946 3.98043 18.5 4.23478 18.5 4.5V8'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M9.5 3.49902C10.3284 3.49902 11 2.82745 11 1.99902C11 1.1706 10.3284 0.499023 9.5 0.499023C8.67157 0.499023 8 1.1706 8 1.99902C8 2.82745 8.67157 3.49902 9.5 3.49902Z'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.915 2.5H13.5C13.7652 2.5 14.0196 2.60536 14.2071 2.79289C14.3946 2.98043 14.5 3.23478 14.5 3.5V4.5C14.5 4.76522 14.3946 5.01957 14.2071 5.20711C14.0196 5.39464 13.7652 5.5 13.5 5.5H5.5C5.23478 5.5 4.98043 5.39464 4.79289 5.20711C4.60536 5.01957 4.5 4.76522 4.5 4.5V3.5C4.5 3.23478 4.60536 2.98043 4.79289 2.79289C4.98043 2.60536 5.23478 2.5 5.5 2.5H8.085'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.5 9.49902H15.5'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.5 13.499H12.966'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M3.5 17.499H11.483'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17 17.5L13.5 18.5L14.5 15L20.482 9.01797C20.8153 8.69529 21.2621 8.51656 21.7261 8.52032C22.19 8.52409 22.6338 8.71005 22.9619 9.0381C23.2899 9.36615 23.4759 9.80999 23.4796 10.2739C23.4834 10.7378 23.3047 11.1846 22.982 11.518L17 17.5Z'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(DetailsIcon)`
  display: flex;
  stroke: ${({ theme }) => theme.palette.icon.primary};
`
Styled.displayName = 'DetailsIcon'
export default Styled
