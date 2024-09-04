type PopupType = 'A' | 'B'
export interface ItemPopup {
  id: string
  position: Position
  elementRef: React.RefObject<HTMLDivElement>,
  popupType: PopupType
  title: string
  content: React.ReactNode
}

export interface Position {
  left: number
  top: number
  width: number
  height: number
}
