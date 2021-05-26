import { Flex, Button, Stack, Text } from '@chakra-ui/react'

import { BmInput } from 'components/Form/BmInput'
import { SubmitHandler, useForm } from 'react-hook-form'

type SignInFormData = {
  email: string
  password: string
}
export default function SignIn() {
  const { register, handleSubmit, formState } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    console.log(data)
  }

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
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <BmInput label="E-mail" type="email" {...register('email')} />
          <BmInput label="Senha" type="password" {...register('password')} />
        </Stack>
        <Button
          type="submit"
          size="lg"
          marginTop="6"
          colorScheme="primary"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
