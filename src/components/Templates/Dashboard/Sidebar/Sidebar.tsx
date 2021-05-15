import { DrawerBody } from '@chakra-ui/core'
import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  useBreakpointValue,
  DrawerHeader
} from '@chakra-ui/react'
import { useSidebarDrawer } from 'context/SidebarDrawerContext'
import { Logo } from '../Header/Logo'
import { NavSidebar } from './Nav'

export function Sidebar() {
  const { isOpen, onClose } = useSidebarDrawer()
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  })

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent backgroundColor="gray.800" padding="4">
            <DrawerCloseButton marginTop="6" />
            <DrawerHeader>
              <Logo />
            </DrawerHeader>
            <DrawerBody>
              <NavSidebar />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  return (
    <Box as="aside" width="64" marginRight="8">
      <NavSidebar />
    </Box>
  )
}
