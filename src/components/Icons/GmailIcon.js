import styled from 'styled-components'

const GmailIcon = ({ className }) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <rect width='20' height='20' fill='url(#pattern40)' />
      <defs>
        <pattern
          id='pattern40'
          patternContentUnits='objectBoundingBox'
          width='1'
          height='1'
        >
          <use xlinkHref='#image0' transform='scale(0.00195312)' />
        </pattern>
        <image
          id='image0'
          width='512'
          height='512'
          xlinkHref='data:image/png;base64,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'
        />
      </defs>
    </svg>
  )
}

const Styled = styled(GmailIcon)`
  display: flex;
`
Styled.displayName = 'GmailIcon'
export default Styled
