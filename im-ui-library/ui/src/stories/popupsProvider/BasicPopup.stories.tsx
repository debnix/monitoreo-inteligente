import type { Meta, StoryObj } from '@storybook/react'
import BasicPopup from '../../components/popupsProvider/BasicPopup'
import { createRef } from 'react'

const meta = {
	title: 'Components/PopupsProvider/BasicPopup',
	component: BasicPopup,
	parameters: {
		layout: 'padded'
	},
	argTypes: {}
} satisfies Meta<typeof BasicPopup>

export default meta
type Story = StoryObj<typeof meta>

export const basicPopup: Story = {
	args: {
		title: 'My Basic Popup',
		children:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		left: 100,
		top: 100,
		width: 300,
		height: 400,
		onClose: () => {},
		refEl: createRef()
	}
}
