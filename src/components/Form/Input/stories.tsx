import { Story, Meta } from '@storybook/react/types-6-0'
import { InputProps, Input } from './Input'
import { Flex } from '@chakra-ui/core'

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    name: {
      type: 'string'
    },
    label: {
      type: 'string'
    }
  }
} as Meta

const Template: Story<InputProps> = ({ ...args }) => {
  return (
    <Flex
      as="form"
      width="100%"
      maxWidth={360}
      backgroundColor="gray.800"
      padding="8"
      borderRadius={8}
      flexDirection="column"
    >
      <Input name={args.name} label={args.label} />
    </Flex>
  )
}

export const Default = Template.bind({})
Default.args = {
  name: 'email',
  label: 'E-mail'
}
