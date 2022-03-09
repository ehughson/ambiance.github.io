import * as React from "react"
import {
  Box,
  Heading,
  Image,
  Text,
  VStack,
  Container,
} from "@chakra-ui/react"
import back from '../back.jpg';
import us from '../us.png';
import nserc from '../nserc.png';

export const HomePage = () => (
    <VStack>
      <Box w='100%' h={['500px','730px','730px' ]} bgImage={back} bgSize='cover' bgAttachment='fixed' bgPos='50% 100%' pos='relative' bgRepeat='no-repeat' > </Box>
      <Box h="100vh" w="full" px="250px" py="60px" paddingLeft={['0px','10px','100px' ]} paddingRight={['0px','10px','100px' ]}>
        <Heading
          textAlign="center"
          color="red.300"
          letterSpacing="1px"
          pb="100px"
          paddingTop='30px'
          paddingBottom="40px"
          fontSize={{ sm: '18px', md: '20px', lg: '37px' }}
        >
          Read the Room: Adapting a Robot's Voice to Ambient and Social Contexts
        </Heading>
        <Text
          textAlign="center"
          letterSpacing="1px"
          pb="100px"
          paddingTop='0px'
          paddingBottom='0px'
          fontSize={{ base: '16px', md: '18px', lg: '25px' }}
        >
          Emma Hughson¹, Paige Tuttösí¹, Akihiro Matsufuji², and Angelica Lim¹³
        </Text>
        <Text
          textAlign="center"
          letterSpacing="1px"
          pb="100px"
          paddingTop='0px'
          paddingBottom='0px'
          fontSize={{ base: '14px', md: '16px', lg: '22px' }}
        >
          IEEE Internatonal Conference on Robotics and Automation
        </Text>
        <Text
          textAlign="center"
          letterSpacing="1px"
          pb="100px"
          paddingTop='0px'
          paddingBottom='0px'
          fontSize={{ base: '10px', md: '10px', lg: '12px' }}
        >
          1. Simon Fraser University
          2. Tokyo Metropolitan University
        </Text>
        <Text
          textAlign="center"
          letterSpacing="1px"
          pb="100px"
          paddingTop='0px'
          paddingBottom='15px'
          fontSize={{ base: '10px', md: '10px', lg: '12px' }}
        >
          3. We acknowledge the support of the Natural Sciences and Engineering Research Council of Canada (NSERC).
          Nous remercions le Conseil de recherches en sciences naturelles et en génie du Canada (CRSNG) de son soutien.
        </Text>
        <Container>
          <Image src= {nserc} alt='Photo of the authors' maxHeight={"45%"} align="center"/>
        </Container>
        <Text
          textAlign="center"
          letterSpacing="1px"
          pb="100px"
          paddingBottom='10px'
          paddingTop='15px'
          fontSize={{ base: '10px', md: '10px', lg: '18px' }}
        >
          Adapting one's voice to different ambient environments and social interactions is
          required for human social interaction. In robotics, the ability to recognize speech
          in noisy and quiet environments has received significant attention, but considering
          ambient cues in the production of social speech features has been little explored.
          Our research aims to modify a robot’s speech to maximize acceptability in various
          social and acoustic contexts, starting with a use case for service robots in varying
          restaurants. We created an original dataset collected over Zoom with participants
          conversing in scripted and unscripted tasks given 7 different ambient sounds and
          background images. Voice conversion methods, in addition to altered Text-to-Speech
          that matched ambient specific data, were used for speech synthesis tasks.  We conducted
          a subjective perception study that showed that humans prefer synthetic speech that
          matches ambience and social context, ultimately preferring a more human-like voices.
          This work provides three solutions to ambient and socially appropriate synthetic voices:
          (1) a novel protocol to collect real contextual audio voice data, (2) tools and directions
          to manipulate robot speech for appropriate social and ambient specific interactions,
          and (3) insight into voice conversion's role in flexibly altering robot speech to
          match different ambient environments.
        </Text>
        <Container>
          <Image src= {us} alt='Photo of the authors' maxHeight={"45%"} align="center"/>
        </Container>
      </Box>
    </VStack>
)