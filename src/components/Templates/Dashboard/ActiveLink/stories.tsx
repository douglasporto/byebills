import { Story, Meta } from '@storybook/react/types-6-0'
import { ActiveLink } from '.'

export default {
  title: 'ActiveLink',
  component: ActiveLink
} as Meta

const Template: Story = () => <ActiveLink />

export const Default = Template.bind({})
Default.args = {}
