import { Icon, Link, Text, LinkProps } from '@chakra-ui/react'
import { ElementType } from 'react'

interface NavLinkProps extends LinkProps {
  title: string
  icon: ElementType
}
export function NavLink({ title, icon, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" paddingY="1" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text marginLeft="4" fontWeight="medium">
        {title}
      </Text>
    </Link>
  )
}
