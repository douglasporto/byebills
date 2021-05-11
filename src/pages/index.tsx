import { Flex, Button, Stack, Image } from '@chakra-ui/react'

import { Input } from 'components/Form/Input'

export default function SignIn() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Image src="/img/logo.png" alt="Logo Workamais" height="360px" />

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
          <Input name="email" label="E-mail" type="email" />

          <Input name="password" label="Senha" type="password" />
        </Stack>
        <Button type="submit" size="lg" marginTop="6" colorScheme="primary">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
