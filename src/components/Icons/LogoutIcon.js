import styled from 'styled-components'

const LogoutIcon = ({ className }) => {
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
        d='M13.5 5V1.5C13.5 1.23478 13.3946 0.98043 13.2071 0.792893C13.0196 0.605357 12.7652 0.5 12.5 0.5H1.5C1.23478 0.5 0.98043 0.605357 0.792893 0.792893C0.605357 0.98043 0.5 1.23478 0.5 1.5V22.5C0.5 22.7652 0.605357 23.0196 0.792893 23.2071C0.98043 23.3946 1.23478 23.5 1.5 23.5H12.5C12.7652 23.5 13.0196 23.3946 13.2071 23.2071C13.3946 23.0196 13.5 22.7652 13.5 22.5V19'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M23.5 12H4.5'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.5 17L23.5 12L18.5 7'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(LogoutIcon)``
Styled.displayName = 'LogoutIcon'
export default Styled
