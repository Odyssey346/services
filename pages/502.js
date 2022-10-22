import SEO from "../components/SEO"
import Navbar from "../components/Navbar"
import { Heading, Text, Link, Button, Image } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

export default function FiveOhTwo() {
    return (
        <div>
            <SEO title="502" description="Bad gateway" url="https://services.odyssey346.dev/502"/>
            <Navbar />
            <Heading m={4} color="red.300">502 Bad Gateway</Heading>
            <Text m={4}>Seems like something went wrong with the service you&apos;re using.</Text>
            <Text m={4}>If this keeps happening, or the service doesn&apos;t come back in (at max) an hour, please <Link colorScheme="blue" variant="solid" as={Link} href="mailto:hi@odyssey346.dev?subject=Your (enter service here) instance is down.">send me an E-mail. <ExternalLinkIcon /></Link> I will respond during my day (UTC+2)</Text>
            <Text m={4}>In the meantime, enjoy this cat GIF!</Text>
            <Image src="https://cataas.com/cat/gif" alt="A cat" m={4} rounded="lg" boxSize="sm" />
        </div>    
    )
}