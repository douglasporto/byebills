import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react'
import { RiDashboardLine } from 'react-icons/ri'

export function Sidebar() {
  return (
    <Box as="aside" width="64" marginRight="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="sm">
            GERAL
          </Text>
          <Stack spacing="4" marginTop="8" align="stretch">
            <Link display="flex" align="center" paddingY="1">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text marginLeft="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
            <Link display="flex" align="center" paddingY="1">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text marginLeft="4" fontWeight="medium">
                Transações
              </Text>
            </Link>
            <Link display="flex" align="center" paddingY="1">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text marginLeft="4" fontWeight="medium">
                Cartões de Crédito
              </Text>
            </Link>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.400" fontSize="sm">
            PLANEJAMENTO
          </Text>
          <Stack spacing="4" marginTop="8" align="stretch">
            <Link
              display="flex"
              align="center"
              color="primary.400"
              paddingY="1"
            >
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text marginLeft="4" fontWeight="medium">
                Meus Planejamentos
              </Text>
            </Link>
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}
