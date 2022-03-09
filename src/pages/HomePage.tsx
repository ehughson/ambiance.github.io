import * as React from "react"
import {
  Box,
  Heading,
  HStack,
  Container,
  VStack,
} from "@chakra-ui/react"
import back from '../back.jpg';

export const HomePage = () => (
    <VStack>
      <Box w='100%' h={['500px','730px','730px' ]} bg='blue' bgImage={back} bgSize='cover' bgAttachment='fixed' bgPos='50% 100%' pos='relative' bgRepeat='no-repeat' > </Box>
      <Box h="100vh" w="full" px="250px" py="60px" paddingLeft={['0px','250px','250px' ]} paddingRight={['0px','250px','250px' ]}>
        <Heading
          textAlign="center"
          color="red.300"
          letterSpacing="1px"
          pb="100px"
          paddingTop='40px'
          fontSize={{ base: '20px', md: '20px', lg: '37px' }}
        >
          Read the Room: Adapting a Robot's Voice to Ambient and Social Contexts
        </Heading>
        <HStack spacing="50px">
        </HStack>
      </Box>
    </VStack>
)