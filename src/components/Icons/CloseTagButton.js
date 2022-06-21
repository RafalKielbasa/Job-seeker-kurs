import styled from 'styled-components'

const CloseTagButton = ({ className, onClick, index }) => (
  <svg
    className={className}
    key={index}
    onClick={onClick}
    width='10'
    height='10'
    viewBox='0 0 10 10'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.35353 0.999981L4.9997 4.6462L8.64643 0.999981C8.74406 0.90235 8.90235 0.90235 8.99998 0.999981C9.09761 1.09761 9.09761 1.2559 8.99998 1.35353L5.3532 4.9997L8.99998 8.64643C9.09761 8.74406 9.09761 8.90235 8.99998 8.99998C8.90235 9.09761 8.74406 9.09761 8.64643 8.99998L4.9997 5.3532L1.35353 8.99998C1.2559 9.09761 1.09761 9.09761 0.999981 8.99998C0.90235 8.90235 0.90235 8.74406 0.999981 8.64643L4.6462 4.9997L0.999981 1.35353C0.90235 1.2559 0.90235 1.09761 0.999981 0.999981C1.09761 0.90235 1.2559 0.90235 1.35353 0.999981Z'
    />
  </svg>
)

const Styled = styled(CloseTagButton)`
  > div {
    > svg {
      fill: none;
    }
    > path {
      fill: ${({ theme }) => theme.universalColors.black};
    }
  }
`
Styled.displayName = 'CloseTagButton'
export default Styled
