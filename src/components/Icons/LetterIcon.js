import styled from 'styled-components'

const LetterIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.52246 5.7793H13.041'
        strokeWidth='0.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.52246 7.63086H9.70764'
        strokeWidth='0.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.48145 3.66602H9.14811'
        strokeWidth='0.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.52246 9.48438H13.041'
        strokeWidth='0.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.52246 11.7051H11.5595'
        strokeWidth='0.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M13.4116 15.6654H2.4821C2.30529 15.6654 2.13572 15.5951 2.01069 15.4701C1.88567 15.3451 1.81543 15.1755 1.81543 14.9987V0.998698C1.81543 0.821887 1.88567 0.652318 2.01069 0.527293C2.13572 0.402269 2.30529 0.332031 2.4821 0.332031H11.3441C11.5209 0.332069 11.6904 0.402332 11.8154 0.527365L14.2868 2.9987C14.4118 3.12369 14.4821 3.29323 14.4821 3.47003V14.9987'
        strokeWidth='0.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(LetterIcon)`
  display: flex;
  stroke: ${({ theme }) => theme.palette.icon.contrast};
`
Styled.displayName = 'LetterIcon'
export default Styled
