import React from 'react'
import {
  Flex,
  Heading,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink
} from '@chakra-ui/core'
import DashboardShell from './DashboardShell'

const FreePlanEmptyState = () => (
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
          </Flex>
    </DashboardShell>
)

export default FreePlanEmptyState
