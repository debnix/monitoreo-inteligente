'use client'
import React, { Suspense, useCallback, useRef } from 'react'
import styles from './popupsDraw.module.css'
import usePopups from './hooks/usePopups'
import BasicPopup from '@repo/im-ui-library/basicPopup'
import Button from '@repo/im-ui-library/button'
import useListeners from './hooks/useListeners'
import ModalForm from '../modalForm/ModalForm'
import StatusPopup from '@repo/im-ui-library/statusPopup'

const PopupsDraw = () => {
	const containerRef = useRef<HTMLDivElement>(null)
	const { itemsPopups, itemsRef, closePopup, closeAll } = usePopups()
	const { mouseDown, onClickPopup } = useListeners({ containerRef, itemsRef })

	return (
		<section className={styles.container}>
			<section className={styles.container__controllers}>
				<Button onClick={() => {}} text="Add A" type="button" color="success" />
				<Button onClick={() => {}} text="Add B" type="button" color="success" />
				<Button onClick={closeAll} text="Cerrar Todos" type="button" color="danger" />
			</section>
			<div className={styles.popupsDraw} ref={containerRef}>
				{itemsPopups.map((item, index) =>
					item.popupType === 'A' ? (
						<Suspense fallback={<div>loading...</div>} key={item.id}>
							<BasicPopup
								title={item.title}
								children={item.content}
								refEl={item.elementRef}
								height={item.position.height}
								width={item.position.width}
								left={item.position.left}
								top={item.position.top}
								onClose={closePopup}
								onMouseDown={mouseDown}
								onClick={onClickPopup}
							/>
						</Suspense>
					) : (
						<StatusPopup
							key={item.id}
							title={item.title}
							children={item.content}
							refEl={item.elementRef}
							height={item.position.height}
							width={item.position.width}
							left={item.position.left}
							top={item.position.top}
							onClose={closePopup}
							onMouseDown={mouseDown}
							onClick={onClickPopup}
							status="success"
						/>
					)
				)}
			</div>
			{/* ----Modal---- */}
			<ModalForm show={true} onClose={() => {}} sendForm={() => {}} title="Add Basic Popup" />
		</section>
	)
}

export default PopupsDraw
