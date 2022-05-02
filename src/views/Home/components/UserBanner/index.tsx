import { Box, Flex } from '@pancakeswap/uikit'
import styled from 'styled-components'

import UserDetail from './UserDetail'

const StyledCard = styled(Box)`
  border-bottom: 0px ${({ theme }) => theme.colors.secondary} solid;
  border-left: 0px ${({ theme }) => theme.colors.secondary} solid;
  border-right: 0px ${({ theme }) => theme.colors.secondary} solid;
  border-radius: ${({ theme }) => `0 0 ${theme.radii.card} ${theme.radii.card}`};
  background: ${({ theme }) =>
    theme.isDark
      ? 'linear-gradient(360deg, rgba(255, 188, 33, 0.8) 0%, rgba(255, 188, 33, 0.8) 100%)'
      : 'linear-gradient(180deg, rgba(255, 188, 33, 0.8) 0%,  rgba(255, 188, 33, 0.8) 51.04%, rgba(255, 188, 33, 0.8) 100%)'};
`

const UserBanner = () => {
  return (
    <StyledCard p={['16px', null, null, '24px']}>
      <Flex alignItems="center" justifyContent="center" flexDirection={['column', null, null, 'row']}>
        <Flex flex="1" mr={[null, null, null, '32px']}>
          <UserDetail />
        </Flex>
        <Flex flex="1" width={['0%', null, 'auto']}>
        
        </Flex>
      </Flex>
    </StyledCard>
  )
}

export default UserBanner
