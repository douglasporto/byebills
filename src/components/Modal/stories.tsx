import { Story, Meta } from '@storybook/react/types-6-0'
import { Modal } from '.'

export default {
  title: 'Modal',
  component: Modal
} as Meta

const Template: Story = () => <Modal />

export const Default = Template.bind({})
Default.args = {}
