import { forwardRef, ForwardRefRenderFunction } from 'react'
import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps
} from '@chakra-ui/react'

export interface InputProps extends ChakraInputProps {
  name: string
  label?: string
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="primary.500"
        backgroundColor="gray.900"
        variant="filled"
        _hover={{ backgroundColor: 'gray.900' }}
        size="lg"
        ref={ref}
        {...rest}
      />
    </FormControl>
  )
}

export const BmInput = forwardRef(InputBase)
