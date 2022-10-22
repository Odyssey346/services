import {HStack, Heading, Highlight, Button, Link } from "@chakra-ui/react";

export default function Navbar() {
    return (
      <HStack textAlign="center" m={4}>
        <Heading size="sm">
          <Highlight query="Odyssey346" styles={{ backgroundColor: 'green.300', rounded: "lg", px: "2" }}>
            Odyssey346&apos;s Services
          </Highlight>
          </Heading>
        <Button colorScheme="blue" variant="ghost" as={Link} href="/privacy">Privacy Policy</Button>
      </HStack>
    )
}