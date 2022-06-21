import styled from 'styled-components'
const InfoSnackIcon = ({ className }) => {
  return (
    <div className={className}>
      <svg
        width='6'
        height='10'
        viewBox='0 0 6 10'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M5.5 9.005H4C3.73478 9.005 3.48043 8.89964 3.29289 8.71211C3.10536 8.52457 3 8.27022 3 8.005V1.505C3 1.37239 2.94732 1.24522 2.85355 1.15145C2.75979 1.05768 2.63261 1.005 2.5 1.005H1'
          stroke='#222426'
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
const Styled = styled(InfoSnackIcon)`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  position: absolute;
`
Styled.displayName = 'InfoSnackIcon'
export default Styled
