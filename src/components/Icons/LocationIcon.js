import styled from 'styled-components'

const LocationIcon = ({ className }) => {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M7.99984 7.66667C9.2885 7.66667 10.3332 6.622 10.3332 5.33333C10.3332 4.04467 9.2885 3 7.99984 3C6.71117 3 5.6665 4.04467 5.6665 5.33333C5.6665 6.622 6.71117 7.66667 7.99984 7.66667Z'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.00018 1C9.21228 1.00018 10.3747 1.48181 11.2317 2.33895C12.0887 3.1961 12.5702 4.35857 12.5702 5.57067C12.5702 7.714 9.27551 13.0273 8.28084 14.582C8.25068 14.6291 8.20917 14.6678 8.16013 14.6946C8.11108 14.7214 8.05608 14.7355 8.00018 14.7355C7.94427 14.7355 7.88927 14.7214 7.84022 14.6946C7.79118 14.6678 7.74967 14.6291 7.71951 14.582C6.72484 13.0273 3.43018 7.71533 3.43018 5.57067C3.43009 4.97047 3.54823 4.37613 3.77786 3.8216C4.00748 3.26706 4.34409 2.76319 4.76846 2.33876C5.19283 1.91432 5.69666 1.57764 6.25116 1.34793C6.80566 1.11823 7.39998 1 8.00018 1V1Z'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(LocationIcon)`
  stroke: ${({ theme }) => theme.palette.icon.contrast};
`
Styled.displayName = 'LocationIcon'
export default Styled
