import {
    Box,
    Grid,
    Heading,
    Container,
    VStack,
    Image,
} from "@chakra-ui/react"

import finedining from '../finedining.png';


export const Ambience1 = (): any => {
    return (
        <Box textAlign="center" fontSize="x01">
          <VStack spacing={4}>
            <Container maxW='container.lg' fontSize={{ base: '10px', md: '14px', lg: '18px' }}>
            You are a waiter in the city’s fanciest restaurant. The atmosphere is warm, the music is slow
            and romantic, and the lights are dimmed.  People come far and wide to experience this particular
            restaurant and the food it has to offer. As such, every night is fully booked. One of your
            customers is on a date and is trying to make the most of the evening. However, on this particular
            night, you have run out of the popular duck which the customer was hoping to order.
            </Container>
            <Image src= {finedining} alt='Fine Dining Ambience' maxWidth={"52%"}/>
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
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072401&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072296&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
              <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1220072359&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
            </Grid>
          </VStack>
        </Box>
    )
};
