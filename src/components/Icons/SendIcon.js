import styled from 'styled-components'

const SendIcon = ({ className }) => {
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
        d='M1.46797 12.9015C1.31932 12.8133 1.19758 12.6878 1.11542 12.538C1.03326 12.3882 0.993689 12.2197 1.00082 12.0499C1.00795 11.8801 1.06152 11.7153 1.15596 11.5726C1.2504 11.4299 1.38225 11.3145 1.53779 11.2385L23.0002 0.5L17.8092 21.2639C17.7713 21.4131 17.6974 21.5512 17.5938 21.6669C17.4901 21.7825 17.3596 21.8722 17.2133 21.9285C17.0661 21.986 16.9071 22.009 16.7491 21.9957C16.5912 21.9823 16.4386 21.9331 16.3036 21.8518L1.46797 12.9015Z'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.5037 18.9569L8.53371 21.8593C8.46509 21.9265 8.37761 21.9722 8.28236 21.9908C8.18711 22.0093 8.08837 21.9998 7.99865 21.9635C7.90893 21.9271 7.83225 21.8656 7.77834 21.7867C7.72443 21.7077 7.6957 21.6149 7.6958 21.52V16.6592L23.0002 0.5'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(SendIcon)`
  display: flex;
  stroke: ${({ theme }) => theme.palette.icon.primary};
`
Styled.displayName = 'SendIcon'
export default Styled
