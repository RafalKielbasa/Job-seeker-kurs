import styled from 'styled-components'

const CheckedIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width='14'
      height='11'
      viewBox='0 0 14 11'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13 0.999001L6 10.499L1 6.499'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(CheckedIcon)``
Styled.displayName = 'CheckedIcon'
export default Styled
