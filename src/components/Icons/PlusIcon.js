import styled from 'styled-components'

const PlusIcon = ({ className }) => {
  return (
    <svg
      width='48'
      height='48'
      viewBox='0 0 48 48'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M46.229 20.4615C46.7812 20.4615 47.229 20.9092 47.229 21.4615V26.5399C47.229 27.0922 46.7812 27.5399 46.229 27.5399H27.5423V46.2265C27.5423 46.7788 27.0946 47.2265 26.5423 47.2265H21.464C20.9117 47.2265 20.464 46.7788 20.464 46.2265V27.5399H1.77734C1.22506 27.5399 0.777344 27.0922 0.777344 26.5399V21.4615C0.777344 20.9093 1.22506 20.4615 1.77734 20.4615H20.464V1.7749C20.464 1.22262 20.9117 0.774902 21.464 0.774902H26.5423C27.0946 0.774902 27.5423 1.22262 27.5423 1.7749V20.4615H46.229Z' />
    </svg>
  )
}

const Styled = styled(PlusIcon)`
  stroke: ${({ theme }) => theme.palette.text.default};
`
Styled.displayName = 'PlusIcon'
export default Styled