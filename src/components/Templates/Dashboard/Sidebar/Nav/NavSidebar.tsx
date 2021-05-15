import { Stack } from '@chakra-ui/react'
import { RiDashboardLine } from 'react-icons/ri'
import { NavLink, NavSection } from '.'

export function NavSidebar() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink title="Dashboard" icon={RiDashboardLine} href="/dashboard" />
        <NavLink
          title="Transações"
          icon={RiDashboardLine}
          href="/transactions"
        />
        <NavLink
          title="Cartões de Crédito"
          icon={RiDashboardLine}
          href="/dashboard"
        />
      </NavSection>
      <NavSection title="PLANEJAMENTO">
        <NavLink
          title="Meus Planejamentos"
          icon={RiDashboardLine}
          href="/dashboard"
        />
      </NavSection>
    </Stack>
  )
}
