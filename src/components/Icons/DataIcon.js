import styled from 'styled-components'

const DataIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width='128'
      height='128'
      viewBox='0 0 128 128'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M113.104 23.9998C114.104 24.9998 114.666 26.3561 114.667 27.7705V120C114.667 121.414 114.105 122.771 113.105 123.771C112.104 124.771 110.748 125.333 109.333 125.333H18.6667C17.2522 125.333 15.8957 124.771 14.8955 123.771C13.8953 122.771 13.3334 121.414 13.3334 120V7.99984C13.3334 6.58535 13.8953 5.2288 14.8955 4.2286C15.8957 3.22841 17.2522 2.6665 18.6667 2.6665H89.5627C90.2656 2.67154 90.9607 2.8155 91.6078 3.09008C92.2549 3.36467 92.8413 3.76447 93.3334 4.2665L113.104 23.9998Z'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M34.7415 51.1999V87.5252C34.7415 93.6905 47.8081 98.7252 63.9308 98.7252C80.0535 98.7252 93.3335 93.5359 93.3335 87.3652V51.0132'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M93.3335 69.4243C93.3335 75.6003 80.0588 80.7843 63.9308 80.7843C47.8028 80.7843 34.7415 75.7763 34.7415 69.5843'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M93.3335 51.0133C93.3335 57.184 80.0588 62.368 63.9308 62.368C47.8028 62.368 34.7415 57.3707 34.7415 51.168C34.7415 44.9653 47.8135 40 63.9308 40C80.0481 40 93.3335 44.8373 93.3335 51.0133Z'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(DataIcon)`
  stroke: ${({ theme }) => theme.palette.icon.contrast};
`
Styled.displayName = 'DataIcon'
export default Styled
