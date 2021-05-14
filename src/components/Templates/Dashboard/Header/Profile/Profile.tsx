import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface AvatarProps {
  name: string
  email: string
}
export function Profile({ name, email }: AvatarProps) {
  return (
    <Flex align="center">
      <Box mr="4">
        <Text>{name}</Text>
        <Text color="gray.300" fontSize="small">
          {email}
        </Text>
      </Box>

      <Avatar size="md" bgColor="primary.500" color="white" name={name} />
    </Flex>
  )
}
