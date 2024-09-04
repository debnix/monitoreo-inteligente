type InputType = 'email' | 'text' | 'number'
export interface InputFormProps {
  placeholder?: string
  type: InputType
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  disable?: boolean
  name?: string
  required?: boolean
}
