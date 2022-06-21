import styled from 'styled-components'

const LockIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width='32'
      height='32'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0)'>
        <path
          d='M15.9993 24.4703C17.5587 24.4703 18.8228 23.2062 18.8228 21.6468C18.8228 20.0874 17.5587 18.8232 15.9993 18.8232C14.4399 18.8232 13.1758 20.0874 13.1758 21.6468C13.1758 23.2062 14.4399 24.4703 15.9993 24.4703Z'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M27.2933 18.286C27.2933 16.9309 26.7334 15.6314 25.7366 14.6732C24.7399 13.7151 23.388 13.1768 21.9784 13.1768H10.02C8.61036 13.1768 7.2585 13.7151 6.26177 14.6732C5.26504 15.6314 4.70508 16.9309 4.70508 18.286V25.9499C4.70508 27.3049 5.26504 28.6045 6.26177 29.5626C7.2585 30.5208 8.61036 31.0591 10.02 31.0591H21.9784C23.388 31.0591 24.7399 30.5208 25.7366 29.5626C26.7334 28.6045 27.2933 27.3049 27.2933 25.9499V18.286Z'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M23.5295 13.1767V8.3153C23.5295 6.35962 22.7363 4.48404 21.3242 3.10117C19.9122 1.7183 17.997 0.941406 16.0001 0.941406C14.0032 0.941406 12.0881 1.7183 10.676 3.10117C9.26398 4.48404 8.4707 6.35962 8.4707 8.3153V13.1767'
          stroke='white'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='32' height='32' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

const Styled = styled(LockIcon)``
Styled.displayName = 'LockIcon'
export default Styled
