import React from 'react'
import {
  Flex,
  Icon,
  Link,
  Stack,
  Input,
  Button,
  Text,
  Progress,
} from '@chakra-ui/react'

const DashboardShell = ({children}) => (
    <Flex flexDirection="column">
      <Flex
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        backgroundColor="white"
        p="1rem"
      >
        <Stack isInline spacing={4}>
          <Icon name="add" />
          <Link>Challenges</Link>
          <Link>Get Help</Link>
        </Stack>
        <Flex>
          <Input />
        </Flex>
        <Flex>
          <Button variantColor="green" size="md">
            Button text
          </Button>
        </Flex>
      </Flex>
      <Flex backgroundColor="gray.50">
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          backgroundColor="white"
          width="100%"
          maxWidth="200px"
          p="40px"
          alignItems="space-between"
        >
          <Stack width="100%" mb={8}>
            <Text fontWeight="bold">Roadmap -</Text>
            <Progress width="100%" height="16px" />
          </Stack>
          <Stack alignItems="stretch" spacing={4}>
            <Link>Link text</Link>
            <Link>Link text</Link>
            <Link>Link text</Link>
          </Stack>
        </Flex>
        <Flex width="100%" height="100vh">
          {children}
        </Flex>
      </Flex>
    </Flex>
)

export default DashboardShell
