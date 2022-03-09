import {
    Box,
    Grid,
    Heading,
    VStack,
    Image,
    Text,
    Container,
} from "@chakra-ui/react"

import club from '../club.png';


export const Ambience6 = (): any => {
    return (
        <Box textAlign="center" fontSize="xl">
          <VStack spacing={4}>
           <Container maxW='container.lg' fontSize={{ base: '10px', md: '14px', lg: '18px' }}>
                You are a bartender at a nightclub in the middle of the city’s center.
                The atmosphere is loud and large. You can hear the DJ’s music and feel the thumping of the bass.
                It’s a Saturday night and you have been juggling dozens of customers all night. One particular
                customer really wants a drink you don’t know how to make!
           </Container>
            <Image src= {club} alt='Night Club Ambience' maxWidth={"57%"} />
            <Grid templateColumns='repeat(3, 1fr)' gap={5} >
              <Heading fontSize={{ base: '16px', md: '20px', lg: '30px' }}>
                  Voice Conversion
              </Heading>
              <Heading fontSize={{ base: '16px', md: '20px', lg: '30px' }}>
                  Baseline Text to Speech
              </Heading>
              <Heading fontSize={{ base: '16px', md: '20px', lg: '30px' }}>
                  Pitch Adaptive Text To Speech
              </Heading>
            </Grid>
            <Grid templateColumns='repeat(3, 1fr)' gap={5} >
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072368&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072263&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072323&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </Grid>
          </VStack>
        </Box>
    )
};
