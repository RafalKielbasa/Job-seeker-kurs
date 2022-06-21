import styled from 'styled-components'

const InfoIcon = ({ className }) => {
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
        d='M4.5 8.5H14'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.5 11.5H10.5'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.5 5.5H11.5'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.5 14.5H8.5'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4.5 17.5H8.5'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.5 23.5H1.5C1.23478 23.5 0.98043 23.3946 0.792893 23.2071C0.605357 23.0196 0.5 22.7652 0.5 22.5V1.5C0.5 1.23478 0.605357 0.98043 0.792893 0.792893C0.98043 0.605357 1.23478 0.5 1.5 0.5H14.793C15.0582 0.500057 15.3125 0.605451 15.5 0.793L19.207 4.5C19.3946 4.68749 19.4999 4.9418 19.5 5.207V8.5'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.5 23.5C20.8137 23.5 23.5 20.8137 23.5 17.5C23.5 14.1863 20.8137 11.5 17.5 11.5C14.1863 11.5 11.5 14.1863 11.5 17.5C11.5 20.8137 14.1863 23.5 17.5 23.5Z'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M17.5 20.5V17C17.5 16.8674 17.4473 16.7402 17.3536 16.6464C17.2598 16.5527 17.1326 16.5 17 16.5H16'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.75 14C16.7994 14 16.8478 14.0147 16.8889 14.0421C16.93 14.0696 16.962 14.1086 16.981 14.1543C16.9999 14.2 17.0048 14.2503 16.9952 14.2988C16.9855 14.3473 16.9617 14.3918 16.9268 14.4268C16.8918 14.4617 16.8473 14.4856 16.7988 14.4952C16.7503 14.5048 16.7 14.4999 16.6543 14.481C16.6086 14.462 16.5696 14.43 16.5421 14.3889C16.5147 14.3478 16.5 14.2994 16.5 14.25C16.5 14.1837 16.5263 14.1201 16.5732 14.0732C16.6201 14.0263 16.6837 14 16.75 14Z'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16 20.5H19'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(InfoIcon)``
Styled.displayName = 'InfoIcon'
export default Styled
