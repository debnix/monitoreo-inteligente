import { createRef } from 'react';
import { ItemPopup } from '../interfaces/ItemPopup';

export const initializerPopups: ItemPopup[] = [
  {
    id: 'item1',
    position: { left: 10, top: 30, width: 400, height: 60 },
    elementRef: createRef() as React.RefObject<HTMLDivElement>,
    popupType: 'A',
    title: 'Component A',
    content: 'This is a paragraph'
  },
  {
    id: 'item2',
    position: { left: 10, top: 150, width: 400, height: 60 },
    elementRef: createRef() as React.RefObject<HTMLDivElement>,
    popupType: 'B',
    title: 'Component B',
    content: 'This is a paragraph'
  }
]
