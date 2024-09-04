export interface PopupsProviderProps {
  title: string
  children: React.ReactNode
  left: number
  top: number
  width: number
  height: number
  refEl: React.RefObject<HTMLDivElement>
  onMouseDown?: (refElement?: React.RefObject<HTMLDivElement>) => void
  onClick?: (refElement?: React.RefObject<HTMLDivElement>) => void
  onClose: (refElement: React.RefObject<HTMLDivElement>) => void
}
