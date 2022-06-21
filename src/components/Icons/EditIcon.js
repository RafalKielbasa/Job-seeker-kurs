import styled from 'styled-components'

const EditIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width='81'
      height='81'
      viewBox='0 0 81 81'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M56.1667 8H10.8333C9.26853 8 8 9.26853 8 10.8333V56.1667C8 57.7315 9.26853 59 10.8333 59H56.1667C57.7315 59 59 57.7315 59 56.1667V10.8333C59 9.26853 57.7315 8 56.1667 8Z'
        stroke='#222426'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M19 64.5513L60.7188 72.9444C61.0817 73.0176 61.4555 73.0185 61.8189 72.9473C62.1822 72.876 62.5279 72.7339 62.8363 72.5291C63.1447 72.3243 63.4096 72.0608 63.616 71.7537C63.8225 71.4466 63.9663 71.1018 64.0393 70.7391L72.944 26.5627C73.0921 25.8315 72.9437 25.0715 72.5315 24.4494C72.1193 23.8274 71.4769 23.3942 70.7454 23.2449L64.5439 22'
        stroke='#222426'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M22.88 15.1204L15.25 22.7504L11.5 23.5004L12.25 19.7504L19.88 12.1204C20.0763 11.9237 20.3095 11.7677 20.5662 11.6612C20.8229 11.5548 21.0981 11.5 21.376 11.5C21.6539 11.5 21.9291 11.5548 22.1858 11.6612C22.4425 11.7677 22.6757 11.9237 22.872 12.1204L22.88 12.1284C23.0767 12.3247 23.2327 12.5579 23.3391 12.8146C23.4456 13.0713 23.5004 13.3465 23.5004 13.6244C23.5004 13.9022 23.4456 14.1774 23.3391 14.4341C23.2327 14.6908 23.0767 14.924 22.88 15.1204Z'
        stroke='#222426'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const Styled = styled(EditIcon)`
  path:last-child {
    transform: translate(0px, -9px) scale(1.8);
  }
`
Styled.displayName = 'EditIcon'
export default Styled
