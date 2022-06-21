import styled from 'styled-components'

const ArrowIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width='40'
      height='40'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M35 20.6641L4.5 20.6641'
        stroke='inherit'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.5 28.6641L4.5 20.6641L10.5 12.6641'
        stroke='inherit'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(ArrowIcon)`
  display: flex;
`
Styled.displayName = 'ArrowIcon'
export default Styled
