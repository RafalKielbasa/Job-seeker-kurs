import styled from 'styled-components'
const WarningIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M12 15L12 9'
          stroke='#222426'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12.001 18.524H12'
          stroke='#222426'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 13.5V12.5'
          stroke='black'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M23.5004 22.6C23.5004 22.5352 23.4846 22.4714 23.4544 22.414L12.3664 1.222C12.3315 1.15515 12.2789 1.09915 12.2143 1.06008C12.1498 1.021 12.0758 1.00034 12.0004 1.00034C11.925 1.00034 11.851 1.021 11.7865 1.06008C11.7219 1.09915 11.6693 1.15515 11.6344 1.222L0.546403 22.413C0.51415 22.474 0.498219 22.5423 0.500158 22.6112C0.502097 22.6802 0.521839 22.7475 0.557467 22.8066C0.593095 22.8656 0.643398 22.9145 0.703488 22.9484C0.763578 22.9823 0.831413 23.0001 0.900403 23H23.1004C23.2065 23 23.3082 22.9579 23.3832 22.8828C23.4583 22.8078 23.5004 22.7061 23.5004 22.6Z'
          stroke='black'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}
const Styled = styled(WarningIcon)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
Styled.displayName = 'WarningIcon'
export default Styled
