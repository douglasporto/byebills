import { useState } from 'react'
import { Flex, FormControl, FormLabel, Stack, Switch } from '@chakra-ui/react'
import { BmInput } from 'components/Form/BmInput'
import { Select } from './styles'

export function CreateTransaction() {
  const [isFixed, setIsFixed] = useState(false)

  return (
    <Flex
      as="form"
      width="100%"
      padding="8"
      borderRadius={8}
      flexDirection="column"
    >
      <Stack spacing="4">
        <Select
          placeholder="Tipo"
          backgroundColor="gray.900"
          background="gray.900"
          variant="filled"
          focusBorderColor="primary.500"
          _hover={{ backgroundColor: 'gray.900' }}
        >
          <option value="1">Despesa</option>
          <option value="2">Receita</option>
        </Select>
        <BmInput name="Valor" label="Valor" type="text" />
        <BmInput name="descrição" label="descrição" type="text" />
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="email-alerts" mb="0">
            Transação fixa?
          </FormLabel>
          <Switch
            id="isFixed"
            colorScheme="teal"
            isChecked={isFixed}
            onChange={() => setIsFixed(!isFixed)}
          />
          {isFixed && <div>Douglas</div>}
        </FormControl>
      </Stack>
    </Flex>
  )
}
