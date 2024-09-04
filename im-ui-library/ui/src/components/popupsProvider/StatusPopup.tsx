import React, { memo } from 'react'
import '../../global.css'
import styles from './statusPopup.module.css'
import { PopupsProviderProps } from './PopupsProviderProps'
import Close from '../icons/Close'

type StatusType = 'danger' | 'success'
interface Props extends PopupsProviderProps {
	status: StatusType
}

const StatusPopup = (props: Props) => {
	console.log('render status popups')

	const handleClick = () => {
		if (props?.onClick) {
			props?.onClick(props.refEl)
		}
	}

	const handleMouseDown = () => {
		if (props.onMouseDown) {
			props.onMouseDown(props.refEl)
		}
	}

	return (
		<div
			className={[styles.basicPopup, styles[props.status]].join(' ')}
			ref={props.refEl}
			style={{ left: `${props.left}px`, top: `${props.top}px`, maxWidth: `${props.width}px` }}
			onClick={handleClick}
		>
			<section className={styles.header} onMouseDown={handleMouseDown}>
				<h3>{props.title}</h3>
				<div className={styles.container_icon} onClick={() => props.onClose(props.refEl)}>
					<Close color="#000" height={12} width={12} />
				</div>
			</section>
			<article className={styles.body}>{props.children}</article>
		</div>
	)
}

export default memo(StatusPopup)
