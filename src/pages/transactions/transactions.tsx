import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td
} from '@chakra-ui/react'
import { Header, Sidebar } from 'components/Templates/Dashboard'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

export default function Transactions() {
  return (
    <Box>
      <Header />
      <Flex
        width="100%"
        marginY="6"
        maxWidth={1480}
        marginX="auto"
        paddingX="6"
      >
        <Sidebar />
        <Box flex="1" borderRadius={8} backgroundColor="gray.800" padding="8">
          <Flex marginBottom="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Transações
            </Heading>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="primary"
              leftIcon={<Icon as={RiAddLine} fontSize="20" />}
            >
              Criar Transação
            </Button>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th>Data</Th>
                <Th>Desc</Th>
                <Th>Valor</Th>
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>10/10/2021</Td>
                <Td>Revista em quadrinho Demolidor</Td>
                <Td>R$ 60,00</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="primary"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>15/10/2021</Td>
                <Td>Aluguel</Td>
                <Td>R$ 2.000,00</Td>
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="primary"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  )
}
