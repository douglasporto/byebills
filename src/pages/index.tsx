import {
  Flex,
  Input,
  Button,
  Stack,
  FormLabel,
  FormControl
} from '@chakra-ui/react'

export default function SignIn() {
  return (
    <Flex
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
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
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              id="email"
              type="email"
              focusBorderColor="purple.500"
              backgroundColor="gray.900"
              variant="filled"
              _hover={{ backgroundColor: 'gray.900' }}
              size="lg"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              name="password"
              id="password"
              type="password"
              focusBorderColor="purple.500"
              backgroundColor="gray.900"
              variant="filled"
              _hover={{ backgroundColor: 'gray.900' }}
              size="lg"
            />
          </FormControl>
        </Stack>
        <Button type="submit" size="lg" marginTop="6" colorScheme="purple">
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
