
import { ChakraProvider, Flex } from '@chakra-ui/react'
import { addDecorator } from "@storybook/react";
import { theme } from '../src/styles/theme'

addDecorator(story => (
  <ChakraProvider theme={theme}>
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {story()}
    </Flex>
  </ChakraProvider>
))
