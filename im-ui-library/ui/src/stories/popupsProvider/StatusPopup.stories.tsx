import type { Meta, StoryObj } from '@storybook/react'
import StatusPopup from '../../components/popupsProvider/StatusPopup'

const meta = {
	title: 'Components/PopupsProvider/StatusPopup',
	component: StatusPopup,
	parameters: {
		layout: 'padded'
	},
	argTypes: {
		status: {
			type: 'string',
			options: ['danger', 'success'],
			control: 'select'
		}
	}
} satisfies Meta<typeof StatusPopup>

export default meta
type Story = StoryObj<typeof meta>

export const statusPopup: Story = {
	args: {
		title: 'My Status Popup',
		children:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		let: 100,
		top: 100,
		width: 300,
		height: 400,
		status: 'danger',
		onClose: () => {}
	}
}
