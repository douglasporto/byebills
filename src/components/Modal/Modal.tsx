import {
  ModalProps as ModalChakraProps,
  Modal as ModalChakra,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button
} from '@chakra-ui/react'

interface ModalProps extends ModalChakraProps {
  title: string
}

export function Modal({
  title,
  isOpen,
  onClose,
  children,
  ...rest
}: ModalProps) {
  return (
    <ModalChakra isOpen={isOpen} onClose={onClose} {...rest}>
      <ModalOverlay />
      <ModalContent backgroundColor="gray.800">
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>{children}</ModalBody>

        <ModalFooter>
          <Button
            colorScheme="teal"
            variant="outline"
            _hover={{ backgroundColor: 'teal', color: 'white' }}
            mr={3}
          >
            Incluir
          </Button>
          <Button
            variant="ghost"
            _hover={{ backgroundColor: 'red.300', color: 'white' }}
            onClick={onClose}
          >
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalChakra>
  )
}
