import styled from 'styled-components'

const MapPlusIcon = ({ className }) => {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 24 24'
      fill='none'
      className={className}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12 1V21'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12 20V23'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M23 12H20'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M22 12H1'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(MapPlusIcon)`
  stroke: ${({ theme }) => theme.palette.text.default};
`
Styled.displayName = 'MapPlusIcon'
export default Styled
