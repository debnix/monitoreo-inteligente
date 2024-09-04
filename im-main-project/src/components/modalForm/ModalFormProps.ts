export interface ModalFormProps {
  show: boolean
  onClose: () => void
  sendForm: (form: FormPopup) => void
  title: string
}

export interface FormPopup {
  id: string
  title: string
  text: string
  left: number
  top: number
  width: number
  height: number
}
