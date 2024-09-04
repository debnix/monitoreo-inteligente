import React, { useCallback, useRef } from 'react'
import { ListenersProps } from '../interfaces/ListenersProps'

const useListeners = ({ containerRef, itemsRef }: ListenersProps) => {
	/* EVENT MOUSE DOWN */
	const mouseDown = useCallback((refEl?: React.RefObject<HTMLDivElement>) => {
		resetZindex()
		if (refEl?.current) {
			refEl.current.style.zIndex = '1'
		}
		/* EVENT MOUSE MOVE */
		const mouseMove = (event: MouseEvent) => {
			const movementX = event.movementX
			const movementY = event.movementY

			if (refEl?.current && containerRef.current) {
				//Get Styles from popupElement and containerElement
				const stylesContainer = window.getComputedStyle(containerRef.current)
				const stylesPopup = window.getComputedStyle(refEl.current)
				const widthContainer = parseInt(stylesContainer.width)
				//Get new coordinates x,y
				const posX = parseInt(stylesPopup.left) + movementX
				const posY = parseInt(stylesPopup.top) + movementY
				const x = `${posX}px`
				const y = `${posY}px`
				//Get width limit container
				const limitX = widthContainer - parseInt(stylesPopup.width)
				if (posX >= 0 && posX <= limitX) {
					refEl.current.style.left = x
				}
				//Get heigth limit container
				const limitY = parseInt(stylesContainer.height) - parseInt(stylesPopup.height)
				if (posY >= 0 && posY <= limitY) {
					refEl.current.style.top = y
				}
			}
		}

		const clearEvents = () => {
			containerRef.current?.removeEventListener('mousemove', mouseMove)
			containerRef.current?.removeEventListener('mouseup', mouseUp)
			containerRef.current?.removeEventListener('mouseleave', mouseLeave)
			containerRef.current?.removeEventListener('mouseover', mouseLeave)
		}

		/* EVENT MOUSE UP */
		const mouseUp = (event: MouseEvent) => {
			clearEvents()
		}
		/* EVENT MOUSE LEAVE */
		const mouseLeave = (event: MouseEvent) => {
			clearEvents()
		}
		containerRef.current?.addEventListener('mousemove', mouseMove)
		containerRef.current?.addEventListener('mouseup', mouseUp)
		containerRef.current?.addEventListener('mouseleave', mouseLeave)
		containerRef.current?.addEventListener('mouseover', mouseLeave)
	}, [])

	const resetZindex = () => {
		itemsRef.current.map((item) => {
			if (item.elementRef.current) {
				item.elementRef.current.style.zIndex = 'auto'
			}
		})
	}

	const onClickPopup = useCallback((refEl?: React.RefObject<HTMLDivElement>) => {
		resetZindex()
		if (refEl?.current) {
			refEl.current.style.zIndex = '1'
		}
	}, [])

	return { mouseDown, onClickPopup }
}

export default useListeners
