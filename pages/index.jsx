import Head from 'next/head'
import { Stack, HStack, Box, Heading, Text, chakra, Center } from "@chakra-ui/react"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Witches DAO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack spacing={10} px={4} mx="auto">
      <chakra.main>
      <Center h="100px">
        <Heading>Witches DAO</Heading>
      </Center>
        
        <HStack px={10} spacing={8}>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
          >
            <Heading fontSize="xl">About Us</Heading>
            <Text mt={4}>Women in Technology, Crypto, Hardware, Engineering and Sciences</Text>
          </Box>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
          >
            <Heading fontSize="xl">Magical Manifesto</Heading>
            <Text mt={4}>Moon moon materialist vibration psychology solar natural new heart sirius, vibration heal natural flow. Moon earth spiritual atoms</Text>
          </Box>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
          >
            <Heading fontSize="xl">Discord</Heading>
            <Text mt={4}>Magic core natural, orbit formation spacetime spiritual planets positive moon flow objects.</Text>
          </Box>
          <Box
            p={5}
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
          >
            <Heading fontSize="xl">Events</Heading>
            <Text mt={4}>Spectrum mercury constellation psychology geometry intelligence, existence spatial wave intelligence hubble spirit sun.</Text>
          </Box>
        </HStack>
        </chakra.main>
      </Stack>
    </div>
  )
}
