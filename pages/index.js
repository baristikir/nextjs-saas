import { Head } from 'next/document';
import { Button, Heading, Text, Code } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      
      <main>
        <Heading>
          Next SaaS
        </Heading>

        <Text>
          Current user: 
          <Code>{auth.user ? auth.user.email : "No User signed in."}</Code>
        </Text>

        {auth.user ? (          
          <Button onClick={(e) => auth.signout()}>Sign Out</Button>
        ) : (          
          <Button onClick={(e) => auth.signinWithGitHub()}>Sign In</Button>
        )}
        
      </main>
    </div>
  )
}
