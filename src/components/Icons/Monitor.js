import styled from 'styled-components'
const Monitor = ({ className }) => {
  return (
    <svg
      className={className}
      width='46'
      height='46'
      viewBox='0 0 46 46'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M33.541 24.9166C33.541 21.4245 38.6432 19.4081 44.0424 19.1858C44.1716 19.1804 44.3006 19.2011 44.4215 19.2469C44.5425 19.2926 44.653 19.3623 44.7463 19.4519C44.8395 19.5414 44.9138 19.6489 44.9644 19.7679C45.0151 19.8868 45.0411 20.0148 45.041 20.1441V35.4775C45.0412 35.7251 44.9455 35.9633 44.774 36.1419C44.6025 36.3206 44.3685 36.4259 44.121 36.4358C40.256 36.4261 36.5107 37.7763 33.541 40.25C30.5716 37.7756 26.8263 36.4247 22.961 36.4339C22.7136 36.424 22.4795 36.3187 22.308 36.14C22.1365 35.9613 22.0408 35.7232 22.041 35.4756V20.1422C22.0409 20.0129 22.067 19.8849 22.1176 19.7659C22.1683 19.647 22.2425 19.5395 22.3358 19.4499C22.4291 19.3604 22.5395 19.2907 22.6605 19.245C22.7814 19.1992 22.9104 19.1785 23.0396 19.1839C28.4388 19.4158 33.541 21.4321 33.541 24.9166Z'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M33.541 24.9244V40.2577'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M18.209 32.5833H3.83398C3.07149 32.5833 2.34022 32.2804 1.80105 31.7413C1.26189 31.2021 0.958984 30.4708 0.958984 29.7083V8.625C0.958984 7.8625 1.26189 7.13124 1.80105 6.59207C2.34022 6.0529 3.07149 5.75 3.83398 5.75H32.584C33.3465 5.75 34.0777 6.0529 34.6169 6.59207C35.1561 7.13124 35.459 7.8625 35.459 8.625V17.25'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M8.625 40.2577H23.9583'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M16.291 32.591V40.2577'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M5.75 12.466L9.58333 16.2993L5.75 20.1327'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M11.5 19.1744H18.2083'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}
const Styled = styled(Monitor)`
  stroke: ${({ theme }) => theme.palette.icon.dark};
`
Styled.displayName = 'Monitor'
export default Styled
