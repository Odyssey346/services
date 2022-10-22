import Head from 'next/head'
import Image from 'next/image'
import { HStack, Heading, SimpleGrid, Link, Text, Highlight, Button } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import ServiceComponent from '../components/Service'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'

export default function Home(props) {
  return (
    <div className="container">
        <SEO title="Home" description="Odyssey346's Services" url="https://services.odyssey346.dev/"/>
        <Navbar />

        <Text size="md" ml={4}>
          Service status last updated: {props.updated}
        </Text>

        <Heading size="lg" m={4}>Frontends</Heading>
        <Text size="md" m={4}>These are frontends to popular services, which you can use to improve your privacy, bypass restrictions, or reduce bandwidth usage.</Text>
        <SimpleGrid columns={{base: 1, md: 3}} m={4} gap={3}>
            <ServiceComponent
                title="Ferrit"
                description="A privacy-respecting front-end for Reddit. Forked from Libreddit."
                github="https://github.com/ferritreader/ferrit"
                status={props.ferrit}
                link="https://fr.odyssey346.dev"
            />

            <ServiceComponent
                title="Invidious"
                description="A privacy-respecting front-end and proxy for YouTube."
                github="https://github.com/iv-org/invidious"
                status={props.invidious}
                link="https://inv.odyssey346.dev"
            />

            <ServiceComponent
                title="Quetre"
                description="A privacy-respecting front-end for Quora."
                github="https://github.com/zyachel/quetre"
                status={props.quetre}
                link="https://qtr.odyssey346.dev"
            />

            <ServiceComponent
                title="BreezeWiki"
                description="A clean, unbloated and privacy-respecting front-end for Fandom."
                github="https://gitdab.com/cadence/breezewiki"
                status={props.breezewiki}
                link="https://bw.odyssey346.dev"
            />
            <ServiceComponent
                title="rimgo"
                description="An alternative frontend for Imgur. Originally based on rimgu."
                github="codeberg.org/video-prize-ranch/rimgo"
                status={props.rimgo}
                link="https://rim.odyssey346.dev"
            />

            <ServiceComponent
                title="ProxiTok"
                description="A privacy-respecting front-end for TikTok."
                github="https://github.com/pablouser1/ProxiTok"
                status={props.proxitok}
                link="https://proxitok.odyssey346.dev"
            />

            <ServiceComponent
                title="Nitter"
                description="A privacy-respecting front-end for Twitter."
                github="https://github.com/zedeus/nitter"
                status={props.nitter}
                link="https://ntr.odyssey346.dev"
            />
        </SimpleGrid>

        <Heading size="lg" m={4}>My own services</Heading>
        <Text size="md" m={4}>These are services I have made myself!</Text>
        <SimpleGrid columns={{base: 1, md: 3}} m={4} gap={3}>
            <ServiceComponent
                title="Odyssey346's Services"
                description="This website! It's a Next.js app."
                github="https://github.com/Odyssey346/services"
                status={props.services}
                link="https://services.odyssey346.dev"
            />

            <ServiceComponent
                title="memestream"
                description="a never-ending stream of memes"
                github="no"
                status={props.memestream}
                link="https://ms.odyssey346.dev"
            />
        </SimpleGrid>


        <Text size="md" m={4}>Design and some code inspired by <Link href="https://drivet.xyz" isExternal>Drivet&apos;s website <ExternalLinkIcon mx='2px' /></Link> </Text>

    </div>
  )
}

export async function getStaticProps() {
    const date = new Date()
    const updated = date.toLocaleString()

    const invidious = await fetch('https://inv.odyssey346.dev/api/v1/stats')
    const ferrit = await fetch('https://fr.odyssey346.dev/')
    const quetre = await fetch('https://qtr.odyssey346.dev/')
    const breezewiki = await fetch('https://bw.odyssey346.dev/')
    const rimgo = await fetch('https://rim.odyssey346.dev/')
    const proxitok = await fetch('https://proxitok.odyssey346.dev/')
    const nitter = await fetch('https://ntr.odyssey346.dev/')
    const memestream = await fetch('https://ms.odyssey346.dev/')
    const services = await fetch('https://services.odyssey346.dev/')

    return {
        revalidate: 60,
        props: {
            updated: updated,
            invidious: invidious.status,
            ferrit: ferrit.status,
            quetre: quetre.status,
            breezewiki: breezewiki.status,
            rimgo: rimgo.status,
            proxitok: proxitok.status,
            nitter: nitter.status,
            memestream: memestream.status,
            services: services.status
        }
    }
}
