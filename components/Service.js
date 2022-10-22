import { Box, Heading, Link, Badge, Button, Stack, Text } from "@chakra-ui/react";

export default function ServiceComponent(props) {
    return (
        <Box
            bg="gray.700"
            rounded="lg"
            p={4}
            maxW={{ base: "100%", sm: '390px' }}
            boxShadow="base"
            backdropFilter="auto"
            backdropBlur="10px"
        >
            {( props.status === 200) && (
                <Heading>{props.title} <Badge colorScheme="green" fontSize="md">Up!</Badge></Heading>
            )}
            {( props.status !== 200) && (
                <Heading>{props.title} <Badge colorScheme="red" fontSize="md">Down</Badge></Heading>
            )}
            <Text size="md" mt={2} mb={2}>{props.description}</Text>
            <Stack direction="row" spacing={4}>
                {( props.status === 200) && (
                    <Button colorScheme="blue" variant="solid" as={Link} href={props.link} isExternal>Visit</Button>
                )}
                {( props.status !== 200) && (
                    <Button colorScheme="red" variant="solid" as={Link} href={props.link} isExternal disabled>Visit</Button>
                )}
                {( props.title !== "memestream") && (
                    <Button colorScheme="blue" variant="solid" as={Link} href={props.github} isExternal>Source code</Button>
                )}
            </Stack>
        </Box>
    )
}

