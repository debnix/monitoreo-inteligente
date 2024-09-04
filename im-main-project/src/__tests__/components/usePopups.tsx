import usePopups from '@/components/popupsDraw/hooks/usePopups'
import { ItemPopup } from '@/components/popupsDraw/interfaces/ItemPopup'
import PopupsDraw from '@/components/popupsDraw/PopupsDraw'
import '@testing-library/jest-dom'
import { act, render, renderHook, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createRef, RefObject } from 'react'

describe('usePopups', () => {
	//Create a new Popup Object
	const idPopup = 'Test-1'
	const refPopup: RefObject<HTMLDivElement> = createRef()
	const newPopupA: ItemPopup = {
		id: idPopup,
		title: 'Jest Test',
		content: 'This is a test paragraph',
		elementRef: refPopup,
		popupType: 'A',
		position: {
			top: 10,
			left: 10,
			height: 300,
			width: 400
		}
	}

	test('Add Popup', () => {
		const { result } = renderHook(() => usePopups())
		act(() => result.current.addPopup(newPopupA))
		expect(result.current.itemsPopups).toContain(newPopupA)
	})

	test('Close Popup', () => {
		const { result } = renderHook(() => usePopups())
		act(() => result.current.closePopup(idPopup))
		expect(result.current.itemsPopups).not.toContain(newPopupA)
	})
})
