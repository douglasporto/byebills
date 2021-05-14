import { Story, Meta } from '@storybook/react/types-6-0'
import { Avatar } from '.'

export default {
  title: 'Avatar',
  component: Avatar
} as Meta

const Template: Story = () => <Avatar />

export const Default = Template.bind({})
Default.args = {}
