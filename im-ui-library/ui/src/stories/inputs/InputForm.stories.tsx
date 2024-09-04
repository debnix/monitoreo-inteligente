import type { Meta, StoryObj } from '@storybook/react'
import InputForm from '../../components/inputForm/InputForm'

const meta = {
	title: 'Components/Inputs/InputForm',
	component: InputForm,
	parameters: {
		layout: 'padded'
	},
	argTypes: {}
} satisfies Meta<typeof InputForm>

export default meta
type Story = StoryObj<typeof meta>

export const inputForm: Story = {
	args: {
		placeholder: "I'm placeholder",
		onChange: () => {},
		type: 'text',
		value: 'Hello',
		label: 'Label:'
	}
}
