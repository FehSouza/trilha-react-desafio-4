import { ButtonContainer } from './styles'
import { IButtonProps } from './types'

const Button = ({ title, onClick, isValid }: IButtonProps) => {
  return (
    <ButtonContainer onClick={onClick} disabled={isValid ? false : true}>
      {title}
    </ButtonContainer>
  )
}

export default Button
