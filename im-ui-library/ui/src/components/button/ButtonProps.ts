type ButtonType = 'submit' | 'button'
type ColorType = 'success' | 'danger'
type SizeType = 'sm' | 'md'

export interface ButtonProps {
  type: ButtonType
  color: ColorType
  text: string
  size?: SizeType
  onClick: () => void
}
