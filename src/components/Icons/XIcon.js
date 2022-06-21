import styled from 'styled-components'

const XIcon = ({ className }) => (
  <svg
    width='18'
    height='18'
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className={className}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.70707 0.999962L8.99941 8.29241L16.2929 0.999962C16.4881 0.8047 16.8047 0.8047 17 0.999962C17.1952 1.19522 17.1952 1.51181 17 1.70707L9.70641 8.99941L17 16.2929C17.1952 16.4881 17.1952 16.8047 17 17C16.8047 17.1952 16.4881 17.1952 16.2929 17L8.99941 9.70641L1.70707 17C1.51181 17.1952 1.19522 17.1952 0.999962 17C0.8047 16.8047 0.8047 16.4881 0.999962 16.2929L8.29241 8.99941L0.999962 1.70707C0.8047 1.51181 0.8047 1.19522 0.999962 0.999962C1.19522 0.8047 1.51181 0.8047 1.70707 0.999962Z'
    />
  </svg>
)

const Styled = styled(XIcon)`
  fill: ${({ theme }) => theme.universalColors.black};
`
Styled.displayName = 'XIcon'
export default Styled
