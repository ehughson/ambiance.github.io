import {
    Box,
    Grid,
    Heading,
    Container,
    VStack,
    Image,
} from "@chakra-ui/react"

import livelyrestaurant from '../livelyrestaurant.png';

export const Ambience3 = (): any => {
    return (
        <Box textAlign="center" fontSize="xl">
          <VStack spacing={4}>
            <Container maxW='container.lg' fontSize={{ base: '10px', md: '14px', lg: '18px' }}>
            You are a waiter in one of the city’s unique pizza places. The atmosphere is colourful and fun.
            It’s bright and lively and families and friends have gathered and are having loud conversations.
            It has been a busy Saturday afternoon for you. It has been one of the hottest days of the summer.
            One of your customers is looking for a margherita pizza. However, you have run out of basil.
            </Container>
            <Image src= {livelyrestaurant} alt='Livley Restaurant Ambience'  maxWidth={"51%"} />
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
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072392&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072284&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072341&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </Grid>
         </VStack>
       </Box>
    )
};
