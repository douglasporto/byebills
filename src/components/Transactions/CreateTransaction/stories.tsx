import { Story, Meta } from '@storybook/react/types-6-0'
import { CreateTransaction } from '.'

export default {
  title: 'CreateTransaction',
  component: CreateTransaction
} as Meta

const Template: Story = () => <CreateTransaction />

export const Default = Template.bind({})
Default.args = {}
