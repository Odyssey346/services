import Navbar from "../components/Navbar"
import { Heading, Text, Link, Button } from "@chakra-ui/react"
import SEO from "../components/SEO"

export default function Privacy() {
    return (
        <div className="container">
            <SEO title="Privacy Policy" description="Odyssey346's Services Privacy Policy" url="https://services.odyssey346.dev/privacy"/>
            <Navbar />
            <Heading m={4}>Privacy Policy</Heading>
            <Heading size="md" m={4}>Last updated: 22.10.2022</Heading>
            <Text m={4}>This Privacy Policy applies to all the services listed on the main page.</Text>
            <Heading size="md" m={4}>What data is collected?</Heading>
            <Text m={4}>I do not log requests, unless you are visiting a sensitive page.</Text>
            <Text m={4}>Some of the services I host allow you to make a user account. These allow you to delete your accounts, if you need to.</Text>
            <Heading size="md" m={4}>GDPR</Heading>
            <Text m={4}>You cannot request your data, since I don&apos;t know who you are.</Text>
            <Button colorScheme="blue" variant="solid" as={Link} href="/" ml={4}>Back to main page</Button>
        </div>
    )
}