import {
    Box,
    Grid,
    Container,
    VStack,
    Image,
    Heading,
} from "@chakra-ui/react"

import noisybar from '../noisybar.png';

export const Ambience5 = (): any => {
    return (
        <Box textAlign="center" fontSize="xl">
          <VStack spacing={4}>
            <Container maxW='container.lg' fontSize={{ base: '10px', md: '14px', lg: '18px' }}>
              You are a bartender at a small bar that is always bringing in a steady flow of customers.
              The atmosphere is bright, warm, and noisy. You here the bustling of many conversations and loud laughter.
              Today is the Stanley Cup finals, so the bar is full of eager watchers. One fan wants nachos for the table,
              but you’ve ran out of nacho cheese!
            </Container>
            <Image src={noisybar} alt='Noisy Bar Ambience' maxWidth={"58%"} />
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
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072374&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072266&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072329&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </Grid>
          </VStack>
        </Box>
    )
};
