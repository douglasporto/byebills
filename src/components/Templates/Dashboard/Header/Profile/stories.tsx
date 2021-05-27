import { Story, Meta } from '@storybook/react/types-6-0'
import { Profile } from '.'

export default {
  title: 'Profile',
  component: Profile
} as Meta

const Template: Story = () => <Profile name="Douglas" email="douglas@bm.com" />

export const Default = Template.bind({})
Default.args = {}
