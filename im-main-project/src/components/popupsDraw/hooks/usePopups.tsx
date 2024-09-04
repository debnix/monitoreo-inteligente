import React, { createRef, useCallback, useRef, useState } from 'react'
import { ItemPopup } from '../interfaces/ItemPopup'
import { initializerPopups } from '../data/initializerPopups'

const usePopups = () => {
	const [itemsPopups, setItemsPopups] = useState<ItemPopup[]>(initializerPopups)
	//Save reference
	const itemsRef = useRef(itemsPopups)

	const addPopup = useCallback((newPopup: ItemPopup) => {
		setItemsPopups((prevItemsPopups) => [...prevItemsPopups, newPopup])
		itemsRef.current = [...itemsRef.current, newPopup]
	}, [])

	const closePopup = useCallback((element: React.RefObject<HTMLDivElement>) => {
		const newElements = itemsRef.current.filter((item) => item.elementRef !== element)
		setItemsPopups(newElements)
		itemsRef.current = newElements
	}, [])

	const closeAll = useCallback(() => {
		setItemsPopups([])
		itemsRef.current = []
	}, [])

	return { itemsPopups, itemsRef, closePopup, closeAll, addPopup }
}

export default usePopups
