import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight">
        Bye Bills
        <Text as="span" color="primary.500" marginLeft="1">
          !
        </Text>
      </Text>

      <Flex align="center" ml="auto">
        <Flex align="center">
          <Box mr="4">
            <Text>Douglas Porto</Text>
            <Text color="gray.300" fontSize="small">
              Douglas@bm.com
            </Text>
          </Box>

          <Avatar
            size="md"
            bgColor="primary.500"
            color="white"
            name="Douglas Porto"
          />
        </Flex>
      </Flex>
    </Flex>
  )
}
