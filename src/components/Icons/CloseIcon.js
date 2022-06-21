import styled from 'styled-components'

const CloseIcon = ({ className }) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M5.51953 10.4804L10.4803 5.51965' strokeWidth='0.5' />
      <path d='M5.51953 5.51965L10.4803 10.4804' strokeWidth='0.5' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z'
      />
    </svg>
  )
}

const Styled = styled(CloseIcon)`
  stroke: ${({ theme }) => theme.palette.icon.dark};
`
Styled.displayName = 'CloseIcon'
export default Styled
