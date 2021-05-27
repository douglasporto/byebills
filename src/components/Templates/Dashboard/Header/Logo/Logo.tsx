import { Text } from '@chakra-ui/react'

export function Logo() {
  return (
    <Text fontSize={['2xl', '3xl']} fontWeight="bold" letterSpacing="tight">
      Bye Bills
      <Text as="span" color="primary.500" marginLeft="1">
        !
      </Text>
    </Text>
  )
}
