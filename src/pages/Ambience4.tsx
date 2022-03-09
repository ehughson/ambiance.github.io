import {
    Box,
    Grid,
    Heading,
    Container,
    VStack,
    Image,
} from "@chakra-ui/react"

import quietbar from '../quietbar.png';

export const Ambience4 = (): any => {
    return (
        <Box textAlign="center" fontSize="xl">
          <VStack spacing={4}>
            <Container maxW='container.lg' fontSize={{ base: '10px', md: '14px', lg: '18px' }}>
            You are a bartender at a small bar that is always quiet. The atmosphere is dark and empty.
            You can hear the clinking of glasses as a bartender cleans up and whispering of conversations
            from the few patrons that choose to visit.  Given that it is a small bar, the owners haven’t
            invested in a wide variety of available food. A customer wants to order something that is not
            on the menu.
            </Container>
            <Image src= {quietbar} alt='Quiet Bar Ambience' maxWidth={"54%"} />
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
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072380&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072275&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072335&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </Grid>
          </VStack>
        </Box>
    )
};
