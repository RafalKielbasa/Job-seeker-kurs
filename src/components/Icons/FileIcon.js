import styled from 'styled-components'

const FileIcon = ({ className }) => {
  return (
    <svg
      width='44'
      height='44'
      viewBox='0 0 44 44'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M12.21 16H35.21'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.21 21H26.21'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.0996 10.2944H24.6996'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.21 26H35.21'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M12.21 32H31.21'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M36.21 42.6945H6.70039C6.223 42.6945 5.76516 42.5048 5.4276 42.1672C5.09003 41.8297 4.90039 41.3718 4.90039 40.8945V3.09443C4.90039 2.61704 5.09003 2.15921 5.4276 1.82164C5.76516 1.48408 6.223 1.29443 6.70039 1.29443H30.6278C31.1052 1.29454 31.5629 1.48424 31.9004 1.82183L38.573 8.49444C38.9106 8.83192 39.1003 9.28969 39.1004 9.76704V40.8945'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <defs>
        <clipPath id='clip0'>
          <rect
            width='43.2'
            height='43.2'
            fill='white'
            transform='translate(0 0.394531)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}

const Styled = styled(FileIcon)``
Styled.displayName = 'FileIcon'
export default Styled
