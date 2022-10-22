import Navbar from "../components/Navbar";
import { Heading, Text, Link, Button } from "@chakra-ui/react";
import SEO from "../components/SEO";

export default function ServerError() {
    return (
        <div>
            <SEO title="500" description="Internal server error" url="https://services.odyssey346.dev/500"/>
            <Navbar />
            <Heading m={4} color="red.300">500</Heading>
            <Text m={4}>Seems like something went wrong on the server!</Text>
        </div>    
    )
}