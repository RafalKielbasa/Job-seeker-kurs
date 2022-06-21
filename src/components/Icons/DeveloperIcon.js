import styled from 'styled-components'

const DeveloperIcon = ({ className }) => {
  return (
    <svg
    className={className}
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M0 24.68h24v-24H0v24Z" fill="url(#1a)" />
    <defs>
      <pattern
        id="1a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#1b" transform="scale(.01563)" />
      </pattern>
      <image
        id="1b"
        width={64}
        height={64}
        xlinkHref="data:image/png;base64,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"
      />
    </defs>
  </svg>
  )
}

const Styled = styled(DeveloperIcon)`
  display: flex;
`
Styled.displayName = 'DeveloperIcon'
export default Styled