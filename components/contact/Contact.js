import { Flex, Box, Stack, Button, ButtonGroup } from '@chakra-ui/react';
import { useState } from 'react';
import classes from './Contact.module.css';
import { SiLinkedin, SiGithub, SiTwitter } from 'react-icons/si';
import { GiPapers } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { FaCopy } from 'react-icons/fa';

export const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard('shane.dalton.gray@gmail.com')
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      String('mailto:shane.dalton.gray^gmail.com').replace('^', '@'),
      '_self'
    );
  };

  return (
    <Flex className={classes.scrollSnapChild} justify="center" height="85vh">
      <Flex
        justify="center"
        pt={['10%', '7%', '5%', '4%', '3%']}
        borderWidth={1}
        borderRadius={8}
        boxShadow="dark-lg"
        backgroundColor="#81b29a"
        height={['60vh', '40vh']}
        overflow="scroll"
        className="scroll"
        width={['80%', '40%']}
        mt={['25%', '10%']}
      >
        <Stack spacing={[8, 4]}>
          <a
            href="https://www.linkedin.com/in/shanegray394/"
            target="_blank"
            rel="noreferrer"
          >
            <Button leftIcon={<SiLinkedin />} width="175px">
              LinkedIn
            </Button>
          </a>
          <a
            href="https://github.com/Shane-Gray394"
            target="_blank"
            rel="noreferrer"
          >
            <Button leftIcon={<SiGithub />} width="175px">
              GitHub
            </Button>
          </a>
          <a
            href="https://twitter.com/Shane_the_Gray"
            target="_blank"
            rel="noreferrer"
          >
            <Button leftIcon={<SiTwitter />} width="175px">
              Twitter
            </Button>
          </a>
          <a
            href="https://docs.google.com/document/d/1eQWS-g4Ze0B4YtK5YmNFScb46QunMcKAzSSEG7xZlKs/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Button leftIcon={<GiPapers />} width="175px">
              Resume
            </Button>
          </a>
          <Box>
            <ButtonGroup isAttached width="175px">
              <Button leftIcon={<MdEmail />} onClick={handleSubmit}>
                Email
              </Button>
              <Button leftIcon={<FaCopy />} onClick={handleCopyClick}>
                {isCopied ? 'Copied!' : 'Copy'}
              </Button>
            </ButtonGroup>
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
};
