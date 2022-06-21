import styled from 'styled-components'

const DownloadIcon = ({ className }) => {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <g clipPath='url(#clip0)'>
        <path
          d='M4.58231 9.58366C4.35314 9.58366 4.29814 9.71616 4.46064 9.87866L9.70397 15.1228C9.74269 15.1618 9.78872 15.1926 9.83942 15.2137C9.89012 15.2348 9.94448 15.2457 9.99939 15.2457C10.0543 15.2457 10.1087 15.2348 10.1594 15.2137C10.2101 15.1926 10.2561 15.1618 10.2948 15.1228L15.554 9.89366C15.7206 9.73282 15.6623 9.59949 15.4331 9.59782L12.9156 9.58366V1.25033C12.9156 1.02931 12.8278 0.81735 12.6716 0.66107C12.5153 0.50479 12.3033 0.416992 12.0823 0.416992H7.91564C7.69462 0.416992 7.48266 0.50479 7.32638 0.66107C7.1701 0.81735 7.08231 1.02931 7.08231 1.25033V9.16699C7.08231 9.2775 7.03841 9.38348 6.96027 9.46162C6.88213 9.53976 6.77615 9.58366 6.66564 9.58366H4.58231Z'
          stroke='#222426'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M19.5827 15.417V18.7503C19.5827 18.9713 19.4949 19.1833 19.3386 19.3396C19.1823 19.4959 18.9704 19.5837 18.7493 19.5837H1.24935C1.02834 19.5837 0.816374 19.4959 0.660093 19.3396C0.503813 19.1833 0.416016 18.9713 0.416016 18.7503V15.417'
          stroke='#222426'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0'>
          <rect width='20' height='20' fill='white' />
        </clipPath>
      </defs>
    </svg>
  )
}

const Styled = styled(DownloadIcon)`
  display: flex;
`
Styled.displayName = 'DownloadIcon'
export default Styled
