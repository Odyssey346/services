import Navbar from "../components/Navbar"
import { Heading, Text, Link, Button } from "@chakra-ui/react"

export default function FourOFour() {
    return (
        <div>
            <Navbar />
            <Heading m={4} color="yellow.300">404</Heading>
            <Text m={4}>Seems like you got lost!</Text>
            <Button colorScheme="blue" variant="solid" as={Link} href="/" ml={4}>Back to main page</Button>
        </div>    
    )
}