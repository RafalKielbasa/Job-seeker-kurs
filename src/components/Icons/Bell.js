import styled from 'styled-components'

const Bell = ({ className }) => {
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
        d='M18.5 16V11.5C18.5 10.2167 18.1202 8.96219 17.4083 7.89445C16.6965 6.82671 15.6845 5.99356 14.5 5.5C14.5 4.83696 14.2366 4.20107 13.7678 3.73223C13.2989 3.26339 12.663 3 12 3C11.337 3 10.7011 3.26339 10.2322 3.73223C9.76339 4.20107 9.5 4.83696 9.5 5.5C8.31545 5.99356 7.3035 6.82671 6.59167 7.89445C5.87985 8.96219 5.5 10.2167 5.5 11.5V16C5.5 16.5304 5.28929 17.0391 4.91421 17.4142C4.53914 17.7893 4.03043 18 3.5 18H20.5C19.9696 18 19.4609 17.7893 19.0858 17.4142C18.7107 17.0391 18.5 16.5304 18.5 16Z'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M14 18C14 18.5304 13.7893 19.0391 13.4142 19.4142C13.0391 19.7893 12.5304 20 12 20C11.4696 20 10.9609 19.7893 10.5858 19.4142C10.2107 19.0391 10 18.5304 10 18'
        stroke='white'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(Bell)``
Styled.displayName = 'Bell'
export default Styled
