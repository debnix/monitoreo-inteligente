'use client'
import React, { createRef, Suspense, useRef, useState } from 'react'
import styles from './popupsDraw.module.css'
import usePopups from './hooks/usePopups'
import BasicPopup from '@repo/im-ui-library/basicPopup'
import Button from '@repo/im-ui-library/button'
import useListeners from './hooks/useListeners'
import ModalForm from '../modalForm/ModalForm'
import StatusPopup from '@repo/im-ui-library/statusPopup'
import { FormPopup } from '../modalForm/ModalFormProps'
import { PopupType } from './interfaces/ItemPopup'
import { ModalState } from './interfaces/ModalState'

const PopupsDraw = () => {
	const [modalForm, setModalForm] = useState<ModalState>({ show: false, popupType: 'A' })
	const containerRef = useRef<HTMLDivElement>(null)
	const { itemsPopups, itemsRef, closePopup, closeAll, addPopup } = usePopups()
	const { mouseDown, onClickPopup } = useListeners({ containerRef, itemsRef })

	const handleBtnA = () => setModalForm({ show: true, popupType: 'A' })
	const handleBtnB = () => setModalForm({ show: true, popupType: 'B' })
	const handleCloseModal = () => setModalForm({ ...modalForm, show: false })

	const handleSendForm = (form: FormPopup) => {
		setModalForm({ ...modalForm, show: false })
		const position = { top: form.top, left: form.left, height: form.height, width: form.width }
		addPopup({
			id: form.id,
			title: form.title,
			content: form.text,
			popupType: modalForm.popupType as PopupType,
			position,
			elementRef: createRef()
		})
	}

	return (
		<section role="popupDraw" className={styles.container}>
			{/*  ------Controller to add and clear popups ------ */}
			<section className={styles.container__controllers}>
				<Button onClick={handleBtnA} text="Add A" type="button" color="success" />
				<Button onClick={handleBtnB} text="Add B" type="button" color="success" />
				<Button onClick={closeAll} text="Cerrar Todos" type="button" color="danger" />
			</section>
			{/* ------ Conten to move popups ------- */}
			<div className={styles.popupsDraw} ref={containerRef}>
				{itemsPopups.map((item, index) =>
					item.popupType === 'A' ? (
						<Suspense fallback={<div>loading...</div>} key={item.id}>
							<BasicPopup
								id={item.id}
								title={item.title}
								refEl={item.elementRef}
								height={item.position.height}
								width={item.position.width}
								left={item.position.left}
								top={item.position.top}
								onClose={closePopup}
								onMouseDown={mouseDown}
								onClick={onClickPopup}
							>
								{item.content}
							</BasicPopup>
						</Suspense>
					) : (
						<StatusPopup
							key={item.id}
							id={item.id}
							title={item.title}
							refEl={item.elementRef}
							height={item.position.height}
							width={item.position.width}
							left={item.position.left}
							top={item.position.top}
							onClose={closePopup}
							onMouseDown={mouseDown}
							onClick={onClickPopup}
							status="success"
						>
							{item.content}
						</StatusPopup>
					)
				)}
			</div>
			{/* ----Modal---- */}
			<ModalForm show={modalForm.show} onClose={handleCloseModal} sendForm={handleSendForm} title="Add Basic Popup" />
		</section>
	)
}

export default PopupsDraw
