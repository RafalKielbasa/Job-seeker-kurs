import styled from 'styled-components'

const MailIcon = ({ className }) => {
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
        d='M22 18.5C22 18.8978 21.842 19.2794 21.5607 19.5607C21.2794 19.842 20.8978 20 20.5 20H3.5C3.10218 20 2.72064 19.842 2.43934 19.5607C2.15804 19.2794 2 18.8978 2 18.5V4.5C2 4.30302 2.0388 4.10796 2.11418 3.92597C2.18956 3.74399 2.30005 3.57863 2.43934 3.43934C2.72064 3.15804 3.10218 3 3.5 3H20.5C20.8978 3 21.2794 3.15804 21.5607 3.43934C21.842 3.72064 22 4.10218 22 4.5V18.5Z'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M21.5 3.5L12 12.5L2.5 3.5'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(MailIcon)``
Styled.displayName = 'MailIcon'
export default Styled
