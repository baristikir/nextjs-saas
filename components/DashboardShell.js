import React from 'react'
import {
  Flex,
  Link,
  Stack,
  Input,
  Button,
  Text,
  Progress,
  Avatar,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { Logo } from '@/styles/logo'

import { useAuth } from '@/lib/auth'

const DashboardShell = ({children}) => {
    const auth = useAuth();

    return (
        <Flex flexDirection="column">
            <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                backgroundColor="white"
                pt="1rem"
                pb="1rem"
                pl="2.5rem"
                pr="2rem"
            >
                <Stack isInline spacing={4} alignItems="center">
                    <Logo size="32px" mr={8} />
                    <Link>Challenges</Link>
                    <Link>Get Help</Link>
                </Stack>
            <Flex>
                <InputGroup>
                    <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />}
                    />
                    <Input type="phone" placeholder="Search for Challenges.." />
                </InputGroup>
            </Flex>
            <Stack
            isInline
            spacing={16}
            alignItems="center"
            justifyContent="flex-start"
            >
                <Button colorScheme="green" size="md">
                    Upgrade to Pro ✨
                </Button>
                <Avatar size="md" src={auth.user.photoUrl}></Avatar>
            </Stack>
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
    );
}

export default DashboardShell;
