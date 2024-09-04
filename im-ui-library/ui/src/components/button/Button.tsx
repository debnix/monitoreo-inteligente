import React from 'react'
import { ButtonProps } from './ButtonProps'
import '../../global.css'
import styles from './button.module.css'

const Button = ({ text, onClick, type, color, size }: ButtonProps) => {
	return (
		<button type={type} className={[styles.button, styles[color], styles[size ?? '']].join(' ')} onClick={onClick}>
			{text}
		</button>
	)
}

export default Button
