import type { Meta, StoryObj } from '@storybook/react'
import Button from '../../components/button/Button'

const meta = {
	title: 'Components/button/Button',
	component: Button,
	parameters: {
		layout: 'padded'
	},
	argTypes: {
		size: {
			options: ['sm', 'md'],
			control: 'select'
		}
	}
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const buttonDanger: Story = {
	args: {
		text: 'My Button',
		onClick: () => {},
		type: 'button',
		color: 'danger'
	}
}

export const buttonSucces: Story = {
	args: {
		text: 'My Button',
		onClick: () => {},
		type: 'button',
		color: 'success',
		size: 'md'
	}
}
