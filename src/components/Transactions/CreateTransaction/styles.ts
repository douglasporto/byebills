import styled from 'styled-components'
import { Select as selectChakra } from '@chakra-ui/react'
import { theme } from '../../../styles/theme'

export const Select = styled(selectChakra)`
  & > option {
    background: ${theme.colors.gray[900]};
  }
`
