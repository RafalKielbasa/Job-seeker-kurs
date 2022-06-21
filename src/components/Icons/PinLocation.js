import styled from 'styled-components'

const PinLocation = ({ className }) => {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 32 32'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M15.9997 2C18.4239 2.00035 20.7487 2.96361 22.4627 4.67791C24.1768 6.3922 25.1397 8.71713 25.1397 11.1413C25.1397 15.428 18.5504 26.0547 16.561 29.164C16.5007 29.2581 16.4177 29.3356 16.3196 29.3892C16.2215 29.4429 16.1115 29.471 15.9997 29.471C15.8879 29.471 15.7779 29.4429 15.6798 29.3892C15.5817 29.3356 15.4987 29.2581 15.4384 29.164C13.449 26.0547 6.8597 15.4307 6.8597 11.1413C6.85952 9.94094 7.0958 8.75227 7.55505 7.6432C8.0143 6.53413 8.68752 5.52638 9.53627 4.67752C10.385 3.82865 11.3927 3.15528 12.5017 2.69587C13.6107 2.23646 14.7993 2 15.9997 2Z'
        fill='#EC8A34'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M15.9987 15.3333C18.576 15.3333 20.6654 13.244 20.6654 10.6667C20.6654 8.08934 18.576 6 15.9987 6C13.4214 6 11.332 8.08934 11.332 10.6667C11.332 13.244 13.4214 15.3333 15.9987 15.3333Z'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(PinLocation)`
  stroke: ${({ theme }) => theme.palette.text.default};
`
Styled.displayName = 'PinLocation'
export default Styled
