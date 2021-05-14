import { Story, Meta } from '@storybook/react/types-6-0'
import { Logo } from '.'

export default {
  title: 'Logo',
  component: Logo
} as Meta

const Template: Story = () => <Logo />

export const Default = Template.bind({})
Default.args = {}
