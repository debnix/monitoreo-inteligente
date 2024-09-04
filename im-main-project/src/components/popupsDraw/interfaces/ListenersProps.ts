import { ItemPopup } from './ItemPopup';

export interface ListenersProps {
  itemsRef: React.MutableRefObject<ItemPopup[]>
  containerRef: React.RefObject<HTMLDivElement>
}
