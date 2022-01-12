import {
  Flex,
  Button,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
} from '@chakra-ui/react';
import classes from './Header.module.css';
import Link from 'next/link';
import { useMediaQuery } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { RiContactsBook2Line } from 'react-icons/ri';

export const Header = () => {
  const [isLargerThan30] = useMediaQuery('(min-width: 30em)');
  const [isSmallerThan] = useMediaQuery('(max-width: 48em)');
  return (
    <Flex
      justify="space-between"
      className={classes.scrollSnapChild}
      backgroundColor="#003049"
      borderWidth="full"
      borderBottomRadius={3}
      boxShadow="lg"
      w="100%"
      pt="25"
      pb="25"
      height={['20vh', '15vh']}
    >
      <Image src="logo.png" alt="logo" pl="10" />
      {isSmallerThan ? (
        <Menu>
          <MenuButton mt="6" mr="3" as={Button} rightIcon={<ChevronDownIcon />}>
            Menu
          </MenuButton>
          <MenuList backgroundColor="#f4f1de">
            <Link href="#about" passHref>
              <MenuItem as="a">About</MenuItem>
            </Link>
            <Link href="#projects" passHref>
              <MenuItem as="a">Projects</MenuItem>
            </Link>
            <Link href="#contact" passHref>
              <MenuItem as="a">Contact</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      ) : (
        <ButtonGroup spacing="10" mr="20">
          <Button rightIcon={<CgProfile />} color="#f7f5fb" variant="link">
            <Link href="#about">About</Link>
          </Button>
          <Button
            rightIcon={<AiOutlineFolderOpen />}
            color="#f7f5fb"
            variant="link"
          >
            <Link href="#projects">Projects</Link>
          </Button>
          <Button
            rightIcon={<RiContactsBook2Line />}
            color="#f7f5fb"
            variant="link"
          >
            <Link href="#contact">Contact</Link>
          </Button>
        </ButtonGroup>
      )}
    </Flex>
  );
};
