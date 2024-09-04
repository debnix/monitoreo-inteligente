type ButtonType = 'submit' | 'button'
type ColorType = 'blue' | 'danger' | 'white'
type SizeType = 'sm' | 'md'

export interface ButtonProps {
  type: ButtonType
  color: ColorType
  text: string
  size?: SizeType
  onClick: () => void
  outline?: boolean
}
