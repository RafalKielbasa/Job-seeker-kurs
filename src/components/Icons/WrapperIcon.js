import styled, { css } from 'styled-components'

const WrapperIcon = ({ className, children, onClick, link, download }) => {
  return (
    <>
      {link ? (
        <a
          className={className}
          href={link}
          download={download}
          target='_blank'
          rel='noreferrer'
        >
          {children}
        </a>
      ) : (
        <div className={className} onClick={onClick}>
          {children}
        </div>
      )}
    </>
  )
}

const Styled = styled(WrapperIcon)`
  position: relative;
  min-width: 30px;
  width: 38px;
  height: 38px;
  border: 1px solid ${({ theme }) => theme.palette.border.bothDark};
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.background.invertedA};
  transition: 0.1s;

  > div,
  svg {
    position: absolute;
    transition: 0.1s;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  ${({ round }) =>
    round &&
    css`
      min-width: 44px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
    `}

  ${({ mid }) =>
    mid &&
    css`
      min-width: 42px;
      width: 42px;
      height: 42px;
    `}

  ${({ outlined }) =>
    outlined &&
    css`
      border: 1px solid ${({ theme }) => theme.palette.background.invertedA};
      background-color: ${({ theme }) => theme.palette.background.default};
    `}
  ${({ secondary }) =>
    secondary &&
    css`
      background-color: ${({ theme }) => theme.palette.secondary.main};
      color: ${({ theme }) => theme.universalColors.white};
    `}    
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.universalColors.blue};
      > svg {
        stroke: ${({ theme }) => theme.universalColors.white};
      }

      > div,
      svg {
        transform: translate(-50%, -50%) rotate(180deg);
      }
    `}
`
Styled.displayName = 'WrapperIcon'
export default Styled
