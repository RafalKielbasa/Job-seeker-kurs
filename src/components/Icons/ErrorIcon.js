import styled from 'styled-components'
const ErrorIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg
        width='2'
        height='8'
        viewBox='0 0 2 8'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 7L1 1'
          stroke='black'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <svg
        width='2'
        height='3'
        viewBox='0 0 2 3'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1.001 1.52399H1'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}
const Styled = styled(ErrorIcon)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
Styled.displayName = 'ErrorIcon'
export default Styled
