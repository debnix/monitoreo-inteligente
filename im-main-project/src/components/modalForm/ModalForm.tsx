import React, { useEffect, useState } from 'react'
import styles from './modalForm.module.css'
import { FormPopup, ModalFormProps } from './ModalFormProps'
import Button from '@repo/im-ui-library/button'
import InputForm from '@repo/im-ui-library/inputForm'

const initForm: FormPopup = {
	id: '',
	height: 200,
	width: 200,
	left: 0,
	top: 0,
	text: '',
	title: ''
}

const ModalForm = (props: ModalFormProps) => {
	const [formState, setFormState] = useState<FormPopup>(initForm)

	useEffect(() => {
		setFormState({ ...formState, id: globalThis.crypto.randomUUID() })
	}, [props.show])

	/* -----Event handles--- */

	const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setFormState({ ...formState, [event.target.name]: event.target.value })
	}

	const handleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setFormState({ ...formState, text: event.target.value })
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		props.sendForm(formState)
	}

	return (
		<section className={[styles.modalForm, styles[props.show ? 'show' : 'hidde']].join(' ')}>
			<h2>{props.title}</h2>
			<form onSubmit={handleSubmit}>
				<InputForm
					label="ID"
					name="id"
					onChange={handleChangeInput}
					type="text"
					value={formState.id}
					placeholder="Id"
					disable={true}
				/>
				<InputForm
					label="Title"
					required={true}
					name="title"
					onChange={handleChangeInput}
					placeholder="Title"
					type="text"
					value={formState.title}
				/>
				<div className={styles.container__textarea}>
					<label>Text</label>
					<textarea
						className={styles.textarea}
						placeholder="Write a Report here..."
						name="text"
						onChange={handleChangeTextArea}
						value={formState.text}
						required={true}
					/>
				</div>
				{/* Coordinates */}
				<div className={styles.flex__row}>
					<InputForm
						label="Top"
						name="top"
						onChange={handleChangeInput}
						placeholder="Write top"
						type="number"
						value={`${formState.top}`}
						required={true}
					/>
					<InputForm
						label="Left"
						name="left"
						onChange={handleChangeInput}
						placeholder="Write left"
						type="number"
						value={`${formState.left}`}
						required={true}
					/>
				</div>
				{/* Size: Width - height */}
				<div className={styles.flex__row}>
					<InputForm
						label="Width"
						name="width"
						onChange={handleChangeInput}
						placeholder="Write width"
						type="number"
						value={`${formState.width}`}
						required={true}
					/>
					<InputForm
						label="Height"
						name="height"
						onChange={handleChangeInput}
						placeholder="Write height"
						type="number"
						value={`${formState.height}`}
						required={true}
					/>
				</div>

				<div className={[styles.flex__row, styles.button__container].join(' ')}>
					<Button type="button" color="danger" onClick={props.onClose} text="Cerrar" />
					<Button type="submit" color="success" onClick={() => {}} text="Save" />
				</div>
			</form>
		</section>
	)
}

export default ModalForm
