import styled from 'styled-components'

const PMIcon = ({ className }) => {
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
        d='M68.8907 2.66653C79.8581 2.65552 90.5476 6.11565 99.4283 12.5513C108.309 18.987 114.925 28.0681 118.329 38.4939C121.733 48.9196 121.75 60.1552 118.378 70.5914C115.006 81.0276 108.418 90.1289 99.5573 96.5919V125.333H46.224V109.333H40.288C36.0445 109.333 31.9749 107.647 28.9743 104.647C25.9737 101.646 24.288 97.5767 24.288 93.3332V77.3332H6.224C17.9253 42.2185 24.6293 2.66653 68.8907 2.66653Z'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M75.8826 22.8741L77.8666 29.3327C78.1887 30.4054 78.9073 31.3151 79.8762 31.8768C80.8451 32.4385 81.9916 32.6102 83.0826 32.3567L89.5999 30.8421C90.8402 30.563 92.1373 30.6884 93.3011 31.1999C94.465 31.7113 95.4345 32.582 96.0677 33.6845C96.7009 34.7869 96.9645 36.063 96.8198 37.3261C96.6752 38.5891 96.1299 39.7727 95.2639 40.7034L90.6826 45.6367C89.9217 46.4621 89.4993 47.5435 89.4993 48.6661C89.4993 49.7886 89.9217 50.8701 90.6826 51.6954L95.2639 56.6287C96.1299 57.5594 96.6752 58.743 96.8198 60.006C96.9645 61.2691 96.7009 62.5453 96.0677 63.6477C95.4345 64.7501 94.465 65.6208 93.3011 66.1323C92.1373 66.6437 90.8402 66.7691 89.5999 66.4901L83.0559 64.9754C81.965 64.722 80.8185 64.8936 79.8495 65.4553C78.8806 66.0171 78.162 66.9267 77.8399 67.9994L75.8719 74.4581C75.5043 75.6734 74.7553 76.7381 73.7358 77.4949C72.7163 78.2517 71.4803 78.6602 70.2106 78.6602C68.9409 78.6602 67.7049 78.2517 66.6853 77.4949C65.6658 76.7381 64.9168 75.6734 64.5492 74.4581L62.5812 67.9994C62.2591 66.9267 61.5405 66.0171 60.5716 65.4553C59.6027 64.8936 58.4562 64.722 57.3652 64.9754L50.8212 66.4901C49.5812 66.7683 48.2847 66.642 47.1218 66.1297C45.9588 65.6173 44.9906 64.7459 44.359 63.6432C43.7274 62.5404 43.4657 61.2643 43.6122 60.002C43.7588 58.7397 44.3058 57.5575 45.1732 56.6287L49.7492 51.6954C50.5124 50.8712 50.9364 49.7893 50.9364 48.6661C50.9364 47.5428 50.5124 46.4609 49.7492 45.6367L45.1732 40.7034C44.3041 39.7741 43.756 38.5906 43.6093 37.3267C43.4627 36.0629 43.7253 34.7853 44.3586 33.6817C44.9918 32.5781 45.9623 31.7068 47.1275 31.1957C48.2927 30.6845 49.5911 30.5606 50.8319 30.8421L57.3759 32.3567C58.4668 32.6102 59.6133 32.4385 60.5822 31.8768C61.5512 31.3151 62.2698 30.4054 62.5919 29.3327L64.5599 22.8741C64.9275 21.6587 65.6765 20.594 66.696 19.8372C67.7155 19.0805 68.9515 18.6719 70.2212 18.6719C71.4909 18.6719 72.7269 19.0805 73.7465 19.8372C74.766 20.594 75.5149 21.6587 75.8826 22.8741V22.8741Z'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M70.2239 55.3333C73.9058 55.3333 76.8906 52.3486 76.8906 48.6667C76.8906 44.9848 73.9058 42 70.2239 42C66.542 42 63.5573 44.9848 63.5573 48.6667C63.5573 52.3486 66.542 55.3333 70.2239 55.3333Z'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(PMIcon)`
  display: flex;
  stroke: ${({ theme }) => theme.palette.icon.contrast};
`
Styled.displayName = 'PMIcon'
export default Styled
