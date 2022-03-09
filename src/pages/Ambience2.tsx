import {
    Box,
    Grid,
    Heading,
    Container,
    VStack,
    Image,
} from "@chakra-ui/react"

import cafe from '../cafe.png';

export const Ambience2 = (): any => {
    return (
        <Box textAlign="center" fontSize="xl">
          <VStack spacing={4}>
            <Container maxW='container.lg' fontSize={{ base: '10px', md: '14px', lg: '18px' }}>
              You are a waiter in one of the city’s popular cafés. The atmosphere is bustling and green.
              It’s bright and lively and the people’s conversations carry. It has been a busy Saturday morning
              for you. One of your customers is looking for a nice breakfast. However, on this particular
              morning, you have run out of the eggs benedict which the customer was hoping to order.
            </Container>
            <Image src={cafe} alt='Café Ambience' maxWidth={"54%"}/>
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
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072395&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072293&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072356&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </Grid>
          </VStack>
        </Box>
    )
};
