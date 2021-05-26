import { Flex, Button, Stack, Text } from '@chakra-ui/react'

import { BmInput } from 'components/Form/BmInput'

export default function SignIn() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text
        fontSize={['4xl', '5xl']}
        fontWeight="bold"
        letterSpacing="tight"
        marginBottom="8"
      >
        Bye Bills
        <Text as="span" color="primary.500" marginLeft="1">
          !
        </Text>
      </Text>

      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        backgroundColor="gray.800"
        padding="8"
        borderRadius={8}
        flexDirection="column"
      >
        <Stack spacing="4">
          <BmInput name="email" label="E-mail" type="email" />
          <BmInput name="password" label="Senha" type="password" />
        </Stack>
        <Button type="submit" size="lg" marginTop="6" colorScheme="primary">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
