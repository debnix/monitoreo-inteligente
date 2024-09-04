import React, { useState } from 'react'
import '../../global.css'
import styles from './inputForm.module.css'
import { InputFormProps } from './InputFormProps'

const InputForm = (props: InputFormProps) => {
	return (
		<div className={styles.inputForm}>
			<label htmlFor={props.name}>{props.label}</label>
			<input
				className={styles.input}
				placeholder={props.placeholder}
				type={props.type}
				onChange={props.onChange}
				value={props.value}
				disabled={props.disable}
				name={props.name}
				required={props.required}
			/>
		</div>
	)
}

export default InputForm
