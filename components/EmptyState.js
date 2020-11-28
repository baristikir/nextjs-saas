import React from 'react'
import {
  Flex,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Skeleton,
  Stack,
} from '@chakra-ui/react'

import DashboardShell from './DashboardShell'

const EmptyState = () => (
    <DashboardShell>
          <Flex
            flexDirection="column"
            p={8}
            justifyContent="flex-start"
            maxWidth="620px"
          >
            <Breadcrumb>
              <BreadcrumbItem>
                <BreadcrumbLink>Dashboard /</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading>Dashboard</Heading>
            <Stack>
              <Skeleton height="20px" width="240px">
                <div>contents wrapped</div>
              </Skeleton>
              <Skeleton width="180px">
                <div>won't be visible</div>
              </Skeleton>
            </Stack>
          </Flex>
    </DashboardShell>
)

export default EmptyState
