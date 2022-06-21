import styled from 'styled-components'

const AngularIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width='128'
      height='128'
      viewBox='0 0 128 128'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M52.864 63.9999H76.144L63.769 38.1229L52.864 63.9999ZM63.81 1.02588L4.55298 21.8799L13.916 99.5169L63.873 126.974L114.087 99.1459L123.447 21.5109L63.81 1.02588ZM48.044 74.9999L40.779 93.1759L27.198 93.2319L63.806 12.1529L63.736 11.9999H63.672L63.673 11.8669L63.736 11.9999H63.877L64 11.7259V11.9999H63.876L63.807 12.1529L101.996 93.5699L88.922 93.2829L80.88 74.7029L63.707 74.7849' />
    </svg>
  )
}

const Styled = styled(AngularIcon)`
  display: flex;
  fill: ${({ theme }) => theme.palette.icon.contrast};
`
Styled.displayName = 'AngularIcon'
export default Styled