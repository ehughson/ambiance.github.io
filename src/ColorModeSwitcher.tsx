import * as React from "react"
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
  Flex,
  Button,
  Image,
} from "@chakra-ui/react"
import { FaMoon, FaSun } from "react-icons/fa"
import { useState } from 'react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Logo from './logo.png';
import { Link } from 'react-router-dom';

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue("dark", "light")
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)
  const [display, changeDisplay] = useState('none')


  return (
    <Flex>
      <Flex
        px="6"
        py="5"
        align="left"
        justify="space-between"
      >
      <Image src={Logo} h="50px" alt = "ROSIE Logo" />
      </Flex>
      <Flex
        position="fixed"
        top="1rem"
        right="1rem"
        align="center"
      >
        {/* Desktop */}
        <Flex
          display={['none', 'none', 'none','flex']}
        >
          <Link to="/">
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
            >
              Home
            </Button>
          </Link>

          <Link to="/ambience1">
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
            >
              Fine Dining
            </Button>
          </Link>

          <Link to="/ambience2">
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Café
            </Button>
          </Link>
          
          <Link to="/ambience3">
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Lively Restaurant
            </Button>
          </Link>
          
          <Link to="/ambience4">
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Quiet Bar
            </Button>
          </Link>
          
          <Link to="/ambience5">
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Noisy Bar
            </Button>
          </Link>
          
          <Link to="/ambience6">
            <Button
              as="a"
              variant="ghost"
              aria-label="Contact"
              my={5}
              w="100%"
            >
              Night Club
            </Button>
          </Link>
        </Flex>
        <IconButton
          size="md"
          fontSize="lg"
          variant="ghost"
          color="current"
          marginLeft="2"
          onClick={toggleColorMode}
          icon={<SwitchIcon />}
          aria-label={`Switch to ${text} mode`}
          {...props}
        />

        {/* Mobile */}
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={
            <HamburgerIcon />
          }
          onClick={() => changeDisplay('flex')}
          display={['flex', 'flex', 'flex', 'none']}
        />
      </Flex>

      {/* Mobile Content */}
      <Flex
        w='100vw'
        display={display}
        bgColor="red.300"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={
              <CloseIcon />
            }
            onClick={() => changeDisplay('none')}
          />
        </Flex>

        <Flex
          flexDir="column"
          align="center"
        >
          <Link to="/">
            <Button
              as="a"
              variant="ghost"
              aria-label="Home"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Home
              </Button>
          </Link>

          <Link to="/ambience1">
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Fine Dining
            </Button>
          </Link>

          <Link to="/ambience2">
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Café
            </Button>
          </Link>

          <Link to="/ambience3">
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Lively Restaurant
            </Button>
          </Link>

          <Link to="/ambience4">
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Quiet Bar
                    </Button>
          </Link>

          <Link to="/ambience5">
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Noisy Bar
            </Button>
          </Link>

          <Link to="/ambience6">
            <Button
              as="a"
              variant="ghost"
              aria-label="About"
              my={5}
              w="100%"
              onClick={() => changeDisplay('none')}
            >
              Night Club
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
