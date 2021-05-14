import { Box, Stack } from '@chakra-ui/react'
import { RiDashboardLine } from 'react-icons/ri'
import { NavSection, NavLink } from './Nav'

export function Sidebar() {
  return (
    <Box as="aside" width="64" marginRight="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink title="Dashboard" icon={RiDashboardLine} />
          <NavLink title="Transações" icon={RiDashboardLine} />
          <NavLink title="Cartões de Crédito" icon={RiDashboardLine} />
        </NavSection>
        <NavSection title="PLANEJAMENTO">
          <NavLink title="Meus Planejamentos" icon={RiDashboardLine} />
        </NavSection>
      </Stack>
    </Box>
  )
}
