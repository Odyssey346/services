import Navbar from "../components/Navbar";
import { Heading, Text, Link, Button } from "@chakra-ui/react";

export default function ServerError() {
    return (
        <div>
            <Navbar />
            <Heading m={4} color="red.300">500</Heading>
            <Text m={4}>Seems like something went wrong on the server!</Text>
        </div>    
    )
}